const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

function sendEmail(req, res) {
    const transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: true,
    auth: {
    user: process.env.MY_EMAIL,
    pass: process.env.APP_PASSWORD,
    },
});

const data = req.body;
const email = data.email;
const OTP = data.otp;

const mailOptions = {
    from: process.env.MY_EMAIL,
    to: email,
    subject: 'PASSWORD RESET',
    html: `<html>
                <body>
                    <h2>Password Recovery</h2>
                    <p>Use this OTP to reset your password. OTP is valid for 1 minute</p>
                    <h3>${OTP}</h3>
                </body>
            </html>`,
};

transporter.sendMail(mailOptions, (error, info) => {
if (error) {
        console.log(error);
        res.status(500).send({ message: "An error occurred while sending the email" });
    } else {
        console.log('Email sent: ' + info.response);
        res.status(200).send({ message: "Email sent successfully" , info: info.response,success:true});
    }
    });
}

module.exports = {
    sendEmail
}
