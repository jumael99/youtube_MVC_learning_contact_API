//@desc Get all contacts
//@route Get  /api/contacts
//@access public
const getContacts = ((req, res) => {
    res.status(200).json({
        message: 'Get all contact'
    })
})

//@desc Create new contact
//@route POST  /api/contacts
//@access public
const createContact = ((req, res) => {
    res.status(201).json({
        message: 'Create a new contact'
    })
})

//@desc Get a contact with id
//@route GET  /api/contacts/:id
//@access public
const getContact = ((req, res) => {
    res.status(201).json({
        message: `Create a new contact with ${req.params.id}`
    })
})

//@desc update a contact
//@route PUT  /api/contacts/:id
//@access public
const updateContact = ((req, res) => {
    res.status(201).json({
        message: 'Create a new contact'
    })
})

//@desc Delete a contact
//@route DELETE  /api/contacts/:id  /*Delete a contact with id*/
//@access public
const deleteContact = ((req, res) => {
    res.status(201).json({
        message: 'Create a new contact'
    })
})

module.exports = {getContacts, createContact, getContact, updateContact, deleteContact}

