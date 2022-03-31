const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 8080

app.use(cors({ origin: true, credentials: true }))
app.use(cookieParser())
app.use(express.json())
app.use(experss.urlencoded())

const startServer = () => {
    app.listen(port, () => {
        console.log(`API is now listening on ${port}`)
    })
}

module.exports = { app, startServer }
