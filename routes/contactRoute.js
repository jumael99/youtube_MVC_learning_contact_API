const express = require('express')
const  router =express.Router()

const {
    getContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact
}
    = require('../controllers/contactController')

router.route('/api/contacts').get(getContacts).post(createContact);
router.route('/api/contacts/:id').get(getContact).put(updateContact).delete(deleteContact);




module.exports = router;