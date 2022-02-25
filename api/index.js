const bcrypt = require('bcrypt')
const dbservice = require('./services/dbservice')
const { v4 } = require('uuid')
const { app, startServer } = require('./configs/appConfig')

app.use('/secure', async (req, res, next) => {
    const sessionID = req.cookies.session.sessionID
    console.log(sessionID)
    const verificationResult = await dbservice.session.checkSession(sessionID)
    if (verificationResult.length > 0) next()
    else res.sendStatus(403)
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
    console.log(dbresult)
    console.log(dbresult === null)
    if (dbresult === null) {
        res.sendStatus(403)
    }
    const isVerified = await bcrypt.compare(
        logininfo.password,
        dbresult.hashed_password
    )
    console.log(isVerified)
    if (isVerified) {
        const sessionID = v4()
        console.log(sessionID)
        const sessionResult = await dbservice.session.addSessionInfo(
            dbresult.user_id,
            sessionID,
            logininfo.username
        )
        res.cookie(
            'session',
            { sessionID, userid: dbresult.user_id },
            {
                httpOnly: true,
                sameSite: 'strict',
                expires: new Date.now() + 30 * 60 * 1000,
            }
        )
        res.send(dbresult)
    } else {
        res.sendStatus(403)
    }
})
app.get('/secure', async (req, res) => {
    const id = req.cookies.session.userid
    const result = await dbservice.user.getUserById(id)
    if (result === null) res.sendStatus(500)
    else res.send(result)
})

app.get('/logout', async (req, res) => {
    const sessionRemoved = await dbservice.session.removeSession(
        req.cookies.session.sessionID
    )
    res.clearCookie('sessionID')
})

startServer()
