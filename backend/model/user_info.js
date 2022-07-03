const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const user_info = new Schema(
    {   user: {
            citizen_id: { type:  String, required: true},
            domain_id:{ type:  String, required: true},
            fullname: String,
            role: String,
            gender:String,
            dob: Date,
            blood_type: String,
            height: Number,
            weight: Number,
            allergy: [ String ],
            condition: [ String ],
            drug: [ String ],
            vital_sign: {
                pulse: Number,
                bp: Number,
                temp: Number,
                oxygen: Number,
                glucose: Number,
                weight: Number,
            },
        },
        contact: {
            mobile: String,
            address_1: String, 
            address_2: String,
            subdistrict: String,
            district: String,
            province: String,
            zip: String,
            note: String,
            latitude: String,
            longitude: String
        },
        family : [{
            fullname: String,
            mobile: String,
            relation: String
        }]
    },
    { timestamps: true }
)

module.exports = mongoose.model("user_info", user_info);