const express = require("express");
const contactsRoute = express.Router();

// importing usersController
const {
    getAllContacts,
    getSingleContact,
    addContact,
    updateContact,
    deleteContact
}= require('../controller/contactsController');


// @define: all contacts
// @route: /api/contacts
// @privacy: proected
contactsRoute.get('/', getAllContacts);

// @define: get single contacts
// @route: /api/contacts/:id
// @privacy: proected
contactsRoute.get('/:id', getSingleContact);

// @define: add contacts
// @route: /api/contacts/
// @privacy: public
contactsRoute.post('/', addContact);

// @define: update contacts
// @route: /api/contacts/:id
// @privacy: protected
contactsRoute.put('/:id', updateContact);

// @define: delete contacts
// @route: /api/contacts/:id
// @privacy: protected
contactsRoute.delete('/:id', deleteContact);

module.exports = contactsRoute;
 