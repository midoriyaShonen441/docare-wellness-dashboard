const mongoose = require("mongoose");
const db = require("./connection/connection");

const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

db.connect();




////////////////// Test Debug //////////////////////////////
app.get("/", (req, res) => {
    res.send("OK");
})

////////////////// User Info API //////////////////////////////

app.post("/syncUser", async(req, res) => {
    const payload = req.body;
    const userInfo = require("./model/user_info");

    try {
        userAvialable = await userInfo.findOne(
            { "user.citizen_id": payload.user.citizen_id }
        );

        if (userAvialable) {
            res.sendStatus(200);
            console.log("Profile already create");
        } else {
            await userInfo.create(payload);
            res.sendStatus(200);
            console.log("Sync Profile OK");

        };
    } catch (err) {
        res.send(err);
    };

});

app.post("/updateBatch", async(req, res) => {
    const users = req.body.users;
    const userInfo = require("./model/user_info");

    try {
        users.forEach(async (value) => {
            await userInfo.findOneAndUpdate(
                { "user.citizen_id": value.citizen_id },
                { user: value }
            );
        });
        res.sendStatus(200);
    } catch (err) {
        res.send(err);
    };
});


app.delete("/deleteUser", async(req, res) => {
    const userIds = req.body.user_ids;
    const userInfo = require("./model/user_info");
    console.log(userIds);

    try {
        userIds.forEach(async (value) => {
            await userInfo.findOneAndDelete(
                { "user.citizen_id": value }
            );
        });
        res.sendStatus(200);
    } catch (err) {
        res.send(err);
    };


})

// app.post("/createUserInfo", async (req, res) => {
//     const payload = req.body
//     const userInfo = require("./model/user_info");

//     let query = { citizen_id: payload.citizen_id };
//     let options = {upsert: true, new: true, setDefaultsOnInsert: false};

//     try {
//         await userInfo.findOneAndUpdate(query, payload, options)
//         res.send(payload)
//     }
//     catch (err) {
//         const replyText = {
//             isError: true,
//             text:err
//         }
//         res.send(replyText);
//     }

// });

// ////////////////// Family Info API //////////////////////////////

// app.get("/getFamilyInfo", async (req, res) => {
//     const { citizen_id } = req.body
//     const familyInfo = require("./model/family_info");

//     await familyInfo.find(
//         { citizen_id: citizen_id },
//         (err, docs) => {
//             try {
//                 res.send(docs)
//             }
//             catch(err) {
//                 const replyText = {
//                     isError: true,
//                     text:err
//                 }
//                 res.send(replyText);
//             }
//         }
//     )
// });

// app.post("/createFamilyInfo", async (req, res) => {
//     const payload = req.body
//     const userInfo = require("./model/family_info");

//     let query = { citizen_id: payload.citizen_id };
//     let options = {upsert: true, new: true, setDefaultsOnInsert: false};

//     try {
//         await userInfo.findOneAndUpdate(query, payload, options)
//         res.send(payload)
//     }
//     catch (err) {
//         const replyText = {
//             isError: true,
//             text:err
//         }
//         res.send(replyText);
//     }
// });

// ////////////////// Contact Info API //////////////////////////////

// app.get("/getContactInfo", async (req, res) => {
//     const { citizen_id } = req.body
//     const contactInfo = require("./model/contact_info");

//     await contactInfo.find(
//         { citizen_id: citizen_id },
//         (err, docs) => {
//             try {
//                 res.send(docs)
//             }
//             catch(err) {
//                 const replyText = {
//                     isError: true,
//                     text:err
//                 }
//                 res.send(replyText);
//             }
//         }
//     )
// });

// app.post("/createContactInfo", async (req, res) => {
//     const payload = req.body
//     const userInfo = require("./model/contact_info");

//     let query = { citizen_id: payload.citizen_id };
//     let options = {upsert: true, new: true, setDefaultsOnInsert: false};

//     try {
//         await userInfo.findOneAndUpdate(query, payload, options)
//         res.send(payload)
//     }
//     catch (err) {
//         const replyText = {
//             isError: true,
//             text:err
//         }
//         res.send(replyText);
//     }
// });


module.exports = app;