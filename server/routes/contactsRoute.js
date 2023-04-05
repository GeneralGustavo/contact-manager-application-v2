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
// @method :GET
contactsRoute.get('/', getAllContacts);

// @define: get single contacts
// @route: /api/contacts/:id
// @privacy: proected
// @method :GET
contactsRoute.get('/:id', getSingleContact);

// @define: add contacts
// @route: /api/contacts/
// @privacy: public
// @method :POST
contactsRoute.post('/', addContact);

// @define: update contacts
// @route: /api/contacts/:id
// @privacy: protected
// @method :PUT
contactsRoute.put('/:id', updateContact);

// @define: delete contacts
// @route: /api/contacts/:id
// @privacy: protected
// @method :DELETE
contactsRoute.delete('/:id', deleteContact);

module.exports = contactsRoute;
 