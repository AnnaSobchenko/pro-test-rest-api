const { Contacts } = require("../db/contactModel");
const {
  getAllContacts,
  getOneContact,
  addNewContact,
  deleteContactById,
  updateOneContact,
} = require("../services/contacts");

const getContacts = async (req, res, next) => {
  const contacts = await getAllContacts();
  res.status(201).json({
    contentType: "application/json",
    ResponseBody: contacts,
  });
};

const getContact = async (req, res, next) => {
  const contact = await getOneContact(req.params.name);
  res.status(201).json({
    contentType: "application/json",
    ResponseBody: contact,
  });
};

const addContact = async (req, res, next) => {
  const newContact = await addNewContact(req.body);
  res.status(201).json({
    contentType: "application/json",
    ResponseBody: newContact,
  });
};

const updateContact = async (req, res, next) => {
  const updatedContact = await updateOneContact(req.params.contactId, req.body);
  console.log(req.params.contactId, req.body);
  !updatedContact
    ? res.status(404).json({ message: "Couldn't update contact" })
    : res.status(201).json({
        contentType: "application/json",
        ResponseBody: updatedContact,
      });
};

const deleteContact = async (req, res, next) => {
  console.log(req.params.contactId);
  const contacts = await deleteContactById(req.params.contactId);
  !contacts
    ? res.status(404).json({ message: "Contact not found" })
    : res.status(200).json({ message: "Сontact deleted" });
};

const downloadFile = async (req, res, next) => {
  const name = req.params.name;
  const contact = `public/resume/${name}`;
  res.download(contact, name);
};

const downloadAvatar = async (req, res, next) => {
  const name = req.params.name;
  const contact = `public/avatar/${name}`;
  res.download(contact, name);
};

module.exports = {
  getContacts,
  getContact,
  downloadFile,
  downloadAvatar,
  addContact,
  updateContact,
  deleteContact,
};
