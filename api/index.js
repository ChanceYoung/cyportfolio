const express = require('express')
const nodemailer = require('nodemailer')
const socketPost = require('./Data/socket/socketpostfile')
const Post = require('./Models/Post')
const app = express()
const port = 8080
require('dotenv').config()

app.use(express.json())

app.get('/posts', (req, res) => {
    res.send([socketPost])
})

app.post('/email', (req, res) => {
    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.NODEMAILER_EMAIL,
            pass: process.env.NODEMAILER_PASS,
        },
    })
    const mailOptions = {
        from: process.env.NODEMAILER_EMAIL,
        to: process.env.NODEMAILER_EMAIL,
        subject: `from: ${req.body.sender_name}`,
        text: req.body.message,
    }

    transport.sendMail(mailOptions, (err, res) => {
        if (err) {
            console.log('failed to send email')
        } else {
            console.log('email sent')
        }
    })
    res.sendStatus(200)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
