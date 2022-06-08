const { getAllContacts, getOneContact } = require("../models/contacts")

const getContacts = async (req, res, next) => {
    const contacts = await getAllContacts();
    res.status(201).json({
        contentType: "application/json",
        ResponseBody: contacts,
    })
};

const getContact = async (req, res, next) => {
    const contact = await getOneContact(req.body);
    res.status(201).json({
        contentType: "application/json",
        ResponseBody: contact,
    })
};

module.exports = {
    getContacts, getContact,
}