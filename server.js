"use strict";
const express = require('express');
const nodemailer = require("nodemailer");
const cors = require('cors');
const path = require('path');
const app = express();
require('dotenv').config();

app.use(express.static(path.join(__dirname, '/frontend/build')));
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 80;

app.post('/send', async (req, res, next) => {
    const { name, email, message } = req.body;
    const userInfo = {
        service: "Gmail",
        auth: {
            user: process.env.GMAIL_USERNAME, 
            pass: process.env.GMAIL_PASSWORD, 
        }
    }
    let transporter = nodemailer.createTransport(userInfo);

    const messageToSend = `
    Name: ${name}
    Email: ${email}
    Date: ${(new Date).toString()}\n
    Message: ${message}
    `;
    const mailOptions = {
        from: `"${name}" <${email}>`,
        to: `${process.env.DEST_EMAIL_ADDRESS}`,
        subject: "Message via web portfolio",
        text: messageToSend,
    };
    try {
        let info = await transporter.sendMail(mailOptions);
        const return_str = `Message sent: ${info.messageId}`;
        res.json({status: return_str});
    }
    catch(err) {
        res.status(err.status || 500);
        res.send({errorMessage: err});
    }
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/frontend/build/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});