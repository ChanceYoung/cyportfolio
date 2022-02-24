const bcrypt = require('bcrypt')
const dbservice = require('./services/dbservice')
const { app, startServer } = require('./configs/appConfig')

app.use('/secure', (req, res) => {})

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
    const sessionRemoved = await dbservice.session.removeSession(
        req.cookies['connect.sid']
    )
})

startServer()
