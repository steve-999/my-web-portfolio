"use strict";
const express = require('express');
const nodemailer = require("nodemailer");
const {google} = require('googleapis')
const cors = require('cors');
const path = require('path');
const app = express();
require('dotenv').config();

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET; 
const REDIRECT_URI = process.env.REDIRECT_URI;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI)
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN})

app.use(express.static(path.join(__dirname, '/frontend/build')));
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 80;


async function sendMail(name, email, message) {

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
        text: messageToSend
    };

    try {
        const accessToken = await oAuth2Client.getAccessToken;

        const transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: process.env.GMAIL_USERNAME,
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: accessToken
            }
        });
        const result = await transport.sendMail(mailOptions);
        return result;
    }
    catch (error) {
        return error;
    }
}


app.post('/send', (req, res, next) => {
    const { name, email, message } = req.body;

    sendMail(name, email, message)
        .then(result => {
            const return_str = `Message sent: ${result.messageId}`;
            console.log(return_str)
            res.json({status: return_str});
        })
        .catch(err => {
            res.status(err.status || 500);
            res.send({errorMessage: err});
        });
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/frontend/build/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});