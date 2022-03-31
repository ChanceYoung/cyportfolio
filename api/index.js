const dbservice = require('./services/dbservice')
const { app, startServer } = require('./configs/appConfig')
const { OAuth2Client } = require('google-auth-library')
const client = new OAuth2Client(process.env.CLIENT_ID)

const securityMiddleware = async (req, res, next) => {
    try {
        console.log('hit middleware')
        const authHeader = req.headers.authorization
        const token = authHeader.split(' ')[1]
        console.log(token)
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: process.env.CLIENT_ID,
        })
        res.locals.ticket = ticket
        next()
    } catch (err) {
        console.error(err.stack)
        res.sendStatus(401)
    }
}

app.get('/', (req, res) => {
    res.send('hit the cyportfolio api')
})

app.get('/posts', async (req, res) => {
    const results = await dbservice.posts.getPosts()
    res.send(JSON.stringify(results))
})

app.post('/login', securityMiddleware, async (req, res) => {
    try {
        const { name, email } = res.locals.ticket.getPayload()
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

app.get('/secure', securityMiddleware, async (req, res) => {
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
