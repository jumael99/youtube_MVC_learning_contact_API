//@desc Get all contacts
//@route Get  /api/contacts
//@access public

const getContacts = async (req, res) => {

    res.status(200).json({
        message: 'Get all contact'
    })
}

//@desc Create new contact
//@route POST  /api/contacts
//@access public
const createContact = async (req, res) => {
    console.log(req.body);
    res.status(201).json({
        message: 'Create a new contact'
    })
}

//@desc Get a contact with id
//@route GET  /api/contacts/:id
//@access public
const getContact = async (req, res) => {
    res.status(201).json({
        message: `Create a new contact with ${req.params.id}`
    })
}

//@desc update a contact
//@route PUT  /api/contacts/:id
//@access public
const updateContact = async(req, res) => {
    res.status(201).json({
        message: `update a contact with id: ${req.params.id}`
    })
}

//@desc Delete a contact
//@route DELETE  /api/contacts/:id  /*Delete a contact with id*/
//@access public
const deleteContact = async(req, res) => {
    res.status(201).json({
        message: `Delete a contact with id: ${req.params.id}`
    })
}

module.exports = {getContacts, createContact, getContact, updateContact, deleteContact}

