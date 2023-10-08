const mongoose = require("mongoose");

const cusSchema = mongoose.Schema({
        name: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
    },
    {
        versionKey: false,
    }
);

const CusModel = mongoose.model("cus", cusSchema);

module.exports = {
    CusModel,
};