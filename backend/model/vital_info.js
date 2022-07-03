const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const vital_info = new Schema(
    {
        citizen_id:  { type:String, required: true },
    },
    { timestamps: true }
)

module.exports = mongoose.Model("vital_info", vital_info)