const express = require('express')
const nodemailer = require('nodemailer')
const socketPost = require('./Data/socket/socketpostfile')
const Post = require('./Models/Post')
const app = express()
const port = 8080
const Pool = require('pg').Pool
const pool = new Pool({
    user: 'chance',
    host: 'db',
    database: 'chance',
    password: 'chancetest',
    port: 5432,
})
// const dotenv = require('dotenv')
// const result = dotenv.config({ path: '../.env' })

// if (result.error) {
//     console.log(result.error)
// }

app.use(express.json())

app.get('/posts', (req, res) => {
    pool.query('Select * from post', (err, resp) => {
        if (err) {
            console.log(err)
        }
        res.send(JSON.stringify(resp.rows))
    })
})

app.get('/tags', (req, res) => {
    pool.query('Select * from skill', (err, resp) => {
        if (err) {
            console.log(err)
        }
        console.log(resp.rows)
        res.sendStatus(200)
    })
})

app.get('/assoc', (req, res) => {
    pool.query('Select * from post_skill_assoc', (err, resp) => {
        if (err) {
            console.log(err)
        }
        console.log(resp.rows)
        res.sendStatus(200)
    })
})

// app.post('/email', (req, res) => {
//     const transport = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//             user: process.env.NODEMAILER_EMAIL,
//             pass: process.env.NODEMAILER_PASS,
//         },
//     })
//     const mailOptions = {
//         from: process.env.NODEMAILER_EMAIL,
//         to: process.env.NODEMAILER_EMAIL,
//         subject: `from: ${req.body.sender_name}`,
//         text: req.body.message,
//     }

//     transport.sendMail(mailOptions, (err, res) => {
//         if (err) {
//             console.log('failed to send email')
//         } else {
//             console.log('email sent')
//         }
//     })
//     res.sendStatus(200)
// })

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
