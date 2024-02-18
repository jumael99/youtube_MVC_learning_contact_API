//@desc Get all contacts
//@route Get  /api/contacts
//@access public
const asyncHandler = require('express-async-handler')
const Contact = require('../models/contactModel')

const getContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find();
    res.status(200).json({
        contacts
    })
})

//@desc Create new contact
//@route POST  /api/contacts
//@access public
const createContact = asyncHandler(async (req, res) => {
    const {name,email,phone} = req.body;
    const contact = await Contact.create(
        {
            name,
            email,
            phone
        }
    )
    res.status(201).json(contact)
})

//@desc Get a contact with id
//@route GET  /api/contacts/:id
//@access public
const getContact = asyncHandler(async (req, res) => {
    const {id} = req.params;
    const info = await Contact.findById(id);
    /*throw an err if id not found*/
    res.status(201).json({
        info
    })
})

//@desc update a contact
//@route PUT  /api/contacts/:id
//@access public
const updateContact = asyncHandler (async(req, res) => {
    const updatedInfo = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    )
    res.status(201).json(updatedInfo)
})

//@desc Delete a contact
//@route DELETE  /api/contacts/:id  /*Delete a contact with id*/
//@access public
const deleteContact = asyncHandler(async (req, res) => {
    // First, find the document by ID.
    const contact = await Contact.findById(req.params.id);

    // If the document is found, remove it.
    if (contact) {
        await contact.remove();
        res.status(200).json({ message: 'Contact deleted successfully' });
    } else {
        // If the document is not found, return a 404 error.
        res.status(404).json({ message: 'Contact not found' });
    }
});


module.exports = {getContacts, createContact, getContact, updateContact, deleteContact}

