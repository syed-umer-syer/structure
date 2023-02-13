const mongoose = require('mongoose'),
    schema = mongoose.Schema;

let carSchema = new schema({
    name: {
        type: String,
        default: 1,
    },
    categoryId: {
        type: schema.Types.ObjectId,
        ref: 'category',
        require: true
    },
    color: String,
    company: String,
}, { timestamps: true });

let car = mongoose.model('car', carSchema);

module.exports = car;
