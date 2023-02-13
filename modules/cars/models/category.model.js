const mongoose = require('mongoose'),
    schema = mongoose.Schema;

let categorySchema = new schema({
    name: {
        type: String,
        default: 1,
    },
}, { timestamps: true });

let category = mongoose.model('category', categorySchema);

module.exports = category;
