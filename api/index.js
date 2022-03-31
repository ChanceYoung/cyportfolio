const bcrypt = require('bcrypt')
const dbservice = require('./services/dbservice')
const { v4 } = require('uuid')
const { app, startServer } = require('./configs/appConfig')
const thirtyMinutes = 1000 * 60 * 30
const { OAuth2Client } = require('google-auth-library')
const client = new OAuth2Client(process.env.CLIENT_ID)

app.use('/secure', async (req, res, next) => {
    console.log('Hit /secure middleware')
    const verificationResult = await dbservice.session.checkSession(
        req.cookies.session
    )
    if (verificationResult != false) next()
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
    try {
        const { token } = req.body
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: process.env.CLIENT_ID,
        })
        const { name, email } = ticket.getPayload()
        res.send({ name, email })
    } catch (error) {
        console.error(error.stack)
        res.sendStatus(500)
    }

    // const exists = await dbservice.user.getUserByName(name)

    //     if (exists != null) {
    //         const sessionID = v4()
    //         var expires = new Date(new Date().valueOf() + thirtyMinutes)
    //         const sessionResult = await dbservice.session.addSessionInfo(
    //             dbresult.user_id,
    //             sessionID,
    //             logininfo.username
    //         )
    //         res.clearCookie('session')
    //         res.cookie(
    //             'session',
    //             { sessionID },
    //             {
    //                 sameSite: 'strict',
    //                 expires,
    //             }
    //         )
    //         res.send(dbresult)
    //     } else {
    //     }
})

app.get('/secure', async (req, res) => {
    const id = req.cookies.session
    const result = await dbservice.user.getUserBySessionId(id)
    if (result === null) res.sendStatus(500)
    else res.send(result)
})

app.get('/logout', async (req, res) => {
    // const sessionRemoved = await dbservice.session.removeSession(
    //     req.cookies.session.userid
    // )
    res.clearCookie('session')
    res.sendStatus(200)
})

startServer()
