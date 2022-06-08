const { Contacts } = require("../db/contactModel");

const getAllContacts = async () => {
    const result = await Contacts.find({});
    return result;
};

const getOneContact = async (body) => {
    const result = await Contacts.findOne(body.name);
    return result;
};

module.exports = {
    getAllContacts, getOneContact,
}