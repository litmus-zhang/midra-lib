const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    isbn: {
        type: String,
        required: true
    },
    publishYear: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    borrowed: {
        type: Boolean,
        default: false
    },
    borrower: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Borrower'
    }

})

module.exports = mongoose.model('Book', BookSchema);