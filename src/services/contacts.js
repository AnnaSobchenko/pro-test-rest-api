const { config } = require("dotenv");
const { Contacts } = require("../db/contactModel");
const fs = require("fs").promises;

const getAllContacts = async () => {
    const result = await Contacts.find({});
    return result;
};

const getOneContact = async (name) => {
    const result = await Contacts.findOne({ name: name });
    return result;
};

const addNewContact = async ({ name, job_title, comment, avatar, links }) => {

    const { github, linkedin, email, resume } = links;

    const newContact = {
        name,
        job_title,
        comment,
        avatar,
        "links": {
            github,
            linkedin,
            email,
            resume
        },
    }
    try {
        const newContactS = await new Contacts(newContact);
        await newContactS.save();
        return newContactS;
    } catch (err) {
        console.error(err)
    }
};

const updateOneContact = async (contactId, body) => {
    try {
        await Contacts.findByIdAndUpdate(contactId, {
            $set: body,
        });
        return await Contacts.findById(contactId);
    } catch (err) {
        console.error(err);
    }
};

const deleteContactById = async (contactId) => {
    console.log(contactId);
    const newContacts = await Contacts.findByIdAndRemove(contactId);
    return newContacts;
};

module.exports = {
    getAllContacts, getOneContact, addNewContact, updateOneContact, deleteContactById,
}