const mongoose = require("mongoose");

const notificationSchema = mongoose.Schema({
    header: String,
    body: String,
});

exports.Notification = mongoose.model("Notification", notificationSchema);
