const mongoose = require("mongoose");

const catSchema = mongoose.Schema({
        categoryName: { type: String, required: true },
        NoteTitle: { type: String, required: true },
        NoteDescription: { type: String, required: true },
    },
    {
        versionKey: false,
    }
);

const CatModel = mongoose.model("category", catSchema);

module.exports = {
    CatModel,
};