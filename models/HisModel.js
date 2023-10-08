const mongoose = require("mongoose");

const hisSchema = mongoose.Schema({
        NoteTitle: { type: String, required: true },
        NoteDescription: { type: String, required: true },
        Date: { type: Date }

    },
    {
        versionKey: false,
    }
);

const HisModel = mongoose.model("history", hisSchema);

module.exports = {
    HisModel,
};