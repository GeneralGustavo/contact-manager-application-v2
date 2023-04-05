// @define: all contacts
// @route: /api/contacts
// @privacy: proected
const getAllContacts = async(req, res) => {
    res.json({message: "get All contacts!"});
};

// @define: get single contacts
// @route: /api/contacts/:id
// @privacy: proected
const getSingleContact = async(req, res) => {
    res.json({message: "get single contacts!"});
};

// @define: add contacts
// @route: /api/contacts/
// @privacy: public
const addContact = async(req, res) => {
    res.json({message: "add contacts!"});
};

// @define: update contacts
// @route: /api/contacts/:id
// @privacy: protected
const updateContact = async(req, res) => {
    res.json({message: "update contacts!"});
};

// @define: delete contacts
// @route: /api/contacts/:id
// @privacy: protected
const deleteContact = async(req, res) => {
    res.json({message: "delete contacts!"});
}


module.exports = {
    getAllContacts,
    getSingleContact,
    addContact,
    updateContact,
    deleteContact
};