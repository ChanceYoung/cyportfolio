const express = require('express')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 8080
const bcrypt = require('bcrypt')
const dbservice = require('./services/dbservice')
const { v4: uuidv4 } = require('uuid');

app.use(cors())
app.use(cookieParser())
app.use(
    session({
        genid: (req) => uuidv4(),
        secret: 'thisissecretyesyes',
        saveUninitialized: true,
        cookie: { maxAge: oneDay },
        resave: false,
    })
)
app.use(express.json())

app.use('/secure', (req, res) => {
    
})

app.get('/', (req, res) => {
    res.send('hit the cyportfolio api')
})

app.get('/posts', async (req, res) => {
    const results = await dbservice.posts.getPosts()
    res.send(JSON.stringify(results))
})

app.post('/login', async (req, res) => {
    const logininfo = req.body
    const dbresult = await dbservice.user.getUserPasswd(logininfo.username)
    if (dbresult === null) {
        res.sendStatus(403)
    }
    const isVerified = await bcrypt.compare(
        logininfo.password,
        dbresult.hashed_password
    )
    console.log(req.sessionID)
    if (isVerified) {
        req.session.regenerate()
        console.log(req.sessionID)
        const sessionResult = await dbservice.session.addSessionInfo(
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
    res.sendStatus(200)
})
app.get('/logout', async (req, res) => {
    res.clearCookie('connect.sid')
    req.session.destroy()
    const sessionRemoved = await dbservice.session.removeSession(req.cookies['connect.sid'])
    if(sessionRemoved.OK)
})

app.listen(port, () => {
    console.log(`API is now listening on ${port}`)
})

process.on('SIGINT', function () {
    process.exit(err ? 1 : 0)
})
