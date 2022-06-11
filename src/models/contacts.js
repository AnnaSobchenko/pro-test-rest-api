const { config } = require("dotenv");
const { Contacts } = require("../db/contactModel");
const fs = require("fs").promises;

const getAllContacts = async () => {
    const result = await Contacts.find({});
    return result;
};

const getOneContact = async (name) => {
    const result = await Contacts.findOne({name: name});
    return result;
};

module.exports = {
    getAllContacts, getOneContact, 
}