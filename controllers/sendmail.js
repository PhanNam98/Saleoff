const nodemailer = require('nodemailer');
var dotenv=require("dotenv");
dotenv.config();
const defaultMailingList = "16110162@student.hcmute.edu.vn";
const senderEmail =process.env.EmailApp;
const senderPassword = process.env.PassApp; // gmail app password
module.exports = {
    sendMail: async (subject, text, to = defaultMailingList) => {
        try {
            const transporter = nodemailer.createTransport({
                service: 'Gmail',
                auth: {
                    user: senderEmail,
                    pass: senderPassword,
                },
            });

            const message = {
                from: `Master <${senderEmail}>`,
                to,
                subject,
                text: subject,
                html: text,
            };

            transporter.sendMail(message, () => { });
        } catch (e) {
            // handle errors here
        }
    },
};