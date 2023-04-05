// @define: all contacts
// @route: /api/contacts
// @privacy: proected
// @method :GET
const getAllContacts = async(req, res) => {
    res.json({message: "get All contacts!"});
};

// @define: get single contacts
// @route: /api/contacts/:id
// @privacy: proected
// @method :GET
const getSingleContact = async(req, res) => {
    res.json({message: "get single contacts!"});
};

// @define: add contacts
// @route: /api/contacts/
// @privacy: protected
// @method :POST
const addContact = async(req, res) => {
    res.json({message: "add contacts!"});
};

// @define: update contacts
// @route: /api/contacts/:id
// @privacy: protected
// @method :PUT
const updateContact = async(req, res) => {
    res.json({message: "update contacts!"});
};

// @define: delete contacts
// @route: /api/contacts/:id
// @privacy: protected
// @method :DELETE
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