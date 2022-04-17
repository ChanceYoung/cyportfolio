import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

//import middlewares
import cookieParser from 'cookie-parser'
import cors from 'cors'

//import router
import main from '../routes/mainRouter.js'
import profile from '../routes/secureRouter.js'

const startServer = () => {
    const app = express()
    const port = process.env.PORT || 8080

    app.use(cors({ origin: true, credentials: true }))
    app.use(cookieParser())
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))
    app.use(main)
    app.use('/secure', profile)

    app.listen(port, () => {
        console.log(`API is now listening on ${port}`)
    })
}

export default startServer
