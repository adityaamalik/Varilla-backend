const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    phoneNumber2: String,
    address: String,
    zipcode: Number,
    activationKey: {
        type: String,
        required: true,
    },
    validTill: {
        type: Date,
        required: true,
    },
    registerDate: {
        type: Date,
        required: true,
    },
    validFrom: {
        type: Date,
        required: true,
    },
    cards: Object,
});

exports.User = mongoose.model("User", userSchema);
