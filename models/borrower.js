const mongoose = require('mongoose');

const borrowerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    mobileNo: {
        type: String,
        required: true
    },
    nationalID: {
        type: String,
        required: true
    },
    dateBorrowed: {
        type: Date,
        required: true,
        default: Date.now
    }
}, { strict: false });


module.exports = mongoose.model('Borrower', borrowerSchema);