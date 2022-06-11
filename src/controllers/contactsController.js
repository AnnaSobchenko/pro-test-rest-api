const { getAllContacts, getOneContact } = require("../models/contacts")

const getContacts = async (req, res, next) => {
    const contacts = await getAllContacts();
    res.status(201).json({
        contentType: "application/json",
        ResponseBody: contacts,
    })
};

const getContact = async (req, res, next) => {
    const contact = await getOneContact(req.params.name);
    res.status(201).json({
        contentType: "application/json",
        ResponseBody: contact,
    })
};

const downloadFile = async (req, res, next) => {
    const name = req.params.name
    const contact = `public/resume/${name}`;
    return res.download(contact, name)
}

module.exports = {
    getContacts, getContact, downloadFile,
}