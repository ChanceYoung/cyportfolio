const express = require('express')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const app = express()
const port = process.env.PORT || 8080
const bcrypt = require('bcrypt')
const dbservice = require('./dbservice')

app.use(cookieParser())
app.use(session({ secret: 'somesecret' }))
app.use(express.json())

app.get('/', (req, res) => {
    res.send('hit the cyportfolio api')
})

app.get('/posts', async (req, res) => {
    const results = await dbservice.getPosts()
    res.send(JSON.stringify(results))
})

app.post('/login', async (req, res) => {
    const logininfo = req.body
    //pull salt and hashed password
    const dbresult = await dbservice.getUserPasswd(logininfo.username)
    const isVerified = bcrypt.compare(
        logininfo.password,
        dbresult.hashed_password
    )
    if (isVerified) {
        const sessionResult = await dbservice.addSessionInfo(
            dbresult.user_id,
            req.sessionID,
            logininfo.username
        )
        req.session.cookie.maxAge = 15 * 60 * 1000
        res.sendStatus(200)
    } else {
        res.sendStatus(403)
    }
})
app.get('/secure', (req, res) => {
    console.log(req.cookies.connect.sid)
})
app.get('/logout', (req, res) => {
    //remove user and session id from the database table
    res.clearCookie('')
})

app.listen(port, () => {
    console.log(`API is now listening on ${port}`)
})

process.on('SIGINT', function () {
    db.stop(function (err) {
        process.exit(err ? 1 : 0)
    })
})
