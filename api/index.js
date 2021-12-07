const express = require('express')
const nodemailer = require('nodemailer')
const app = express()
const port = 8080
const Pool = require('pg').Pool

const dotenv = require('dotenv')
const result = dotenv.config({ path: './api.env' })

if (result.error) {
    console.log(result.error)
}


const pool = new Pool({
    user: process.env.POSTGRES_USER,
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    port: 5432,
})

app.use(express.json())

app.get('/api/posts', (req, res) => {
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

app.post('/api/email', (req, res) => {
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
    console.log(`API is now listening at http://localhost:${port}`)
})
