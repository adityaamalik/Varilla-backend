const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: String,
    phoneNumber: String,
    address: String,
    activationKey: String,
    validTill: String,
});

exports.User = mongoose.model("User", userSchema);
