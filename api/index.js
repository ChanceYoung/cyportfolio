const dbservice = require('./services/dbservice')
const { app, startServer } = require('./configs/appConfig')
const { auth } = require('express-oauth2-jwt-bearer')

const checkJWT = auth({
    audience: 'undefined',
    issuerBaseURL: process.env.ISSUER_BASE_URL,
})

app.get('/', (req, res) => {
    res.send('hit the cyportfolio api')
})

app.get('/posts', async (req, res) => {
    const results = await dbservice.posts.getPosts()
    res.send(JSON.stringify(results))
})

app.get('/profile', checkJWT, async (req, res) => {
    console.table(req.params)
    const result = await dbservice.user.getUserInfo(req.params.user)
    if (result === null) res.sendStatus(500)
    else res.send(result)
})

startServer()
