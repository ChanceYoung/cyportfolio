const express = require('express')
const app = express()
const port = process.env.PORT || 8080
const Pool = require('pg').Pool
const bcrypt = require('bcrypt')

const pool = new Pool({
    user: process.env.POR_POSTGRES_USER,
    host: process.env.POR_POSTGRES_HOST,
    database: process.env.POR_POSTGRES_DB,
    password: process.env.POR_POSTGRES_PASSWORD,
    port: 5432,
})

app.use(express.json())

app.get('/', (req, res) => {
    res.send('hit the cyportfolio api')
})

app.get('/posts', (req, res) => {
    pool.query('Select * from portfolio.post', (err, resp) => {
        if (err) {
            console.log(err)
        }
        res.send(JSON.stringify(resp.rows))
    })
})

app.post('/login', (req, res) => {
    const logininfo = req.body
    console.log(logininfo)
    res.cookie('Token', 'All your base belong to us', {
        sameSite: 'none',
        httpOnly: true,
    })
    res.sendStatus(200)
    //pull salt and hashed password
    //salt and hash passed in password
    //bcrypt.verify
    //set cookie
})

app.listen(port, () => {
    console.log(`API is now listening on ${port}`)
})
