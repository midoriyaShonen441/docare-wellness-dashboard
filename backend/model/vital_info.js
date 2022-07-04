const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const vital_info = new Schema(
    {   metadata: {
            user: {
                citizen_id:  { type:String, required: true }
            },
        },
        timestamp: Date,
        vital: [{
                type: String,
                value: Number,
                meal: String,
            }]
    },
    {  timeseries: {
            timeField: 'timestamp',
            metaField: 'metadata',
            granularity: 'minutes'
        } 
    }
)

module.exports = mongoose.Model("vital_info", vital_info)