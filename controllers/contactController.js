
const getContact = ((req, res) => {
    res.status(200).json({
        message: 'Get all the contact information'
    })
})
module.exports = {getContact}

