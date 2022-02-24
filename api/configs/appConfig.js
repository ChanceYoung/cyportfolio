const express = require('express')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 8080

const { v4: uuidv4 } = require('uuid')
const cookieAge = 30 * 60 * 1000

app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use(
    session({
        genid: (req) => uuidv4(),
        secret: 'thisissecretyesyes',
        saveUninitialized: true,
        cookie: { maxAge: cookieAge },
        resave: false,
    })
)

const startServer = () => {
    app.listen(port, () => {
        console.log(`API is now listening on ${port}`)
    })
}

module.exports = { app, startServer }
