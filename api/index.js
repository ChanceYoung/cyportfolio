const dbservice = require('./services/dbservice')
const { app, startServer } = require('./configs/appConfig')
const { OAuth2Client } = require('google-auth-library')
const client = new OAuth2Client(process.env.CLIENT_ID)

app.get('/', (req, res) => {
    res.send('hit the cyportfolio api')
})

app.get('/posts', async (req, res) => {
    const results = await dbservice.posts.getPosts()
    res.send(JSON.stringify(results))
})

app.post(
    '/login',
    async (req, res, next) => {
        try {
            console.log('hit middleware')

            const { token } = req.body

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
    },
    async (req, res) => {
        try {
            const { name, email } = res.locals.ticket.getPayload()
            res.send({ name, email })
        } catch (error) {
            console.error(error.stack)
            res.sendStatus(500)
        }
    }
)

app.get(
    '/secure',
    async (req, res, next) => {
        try {
            console.log('hit middleware')
            console.log(req.headers)
            const authHeader = req.headers.Authorization
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
    },
    async (req, res) => {
        const id = req.cookies.session
        const result = await dbservice.user.getUserBySessionId(id)
        if (result === null) res.sendStatus(500)
        else res.send(result)
    }
)

app.get('/logout', async (req, res) => {
    console.log(req.headers)
    const authHeader = req.headers.authorization
    const token = authHeader.split(' ')[1]
    client.revokeToken(token)
    res.sendStatus(200)
})

startServer()
