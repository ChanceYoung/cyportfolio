import express, { Router } from 'express'
import { auth } from 'express-oauth2-jwt-bearer'
import upload from '../configs/MulterConfig.js'
import userService from '../services/userService.js'
import dotenv from 'dotenv'
dotenv.config()

const router = new Router()

router.use(
    auth({
        issuerBaseURL: process.env.ISSUER_BASE_URL,
        audience: process.env.AUDIENCE,
    })
)
router.use('/upload', express.static('../assets'))

router.post('/upload', upload, (req, res) => {
    console.log('uploading photo....')
    console.table(req.file)
    const filename = 'image/' + req.file.filename
    res.send({ filename })
    //update users profile picture in the database
    //send the uploaded file back with a 200 response
})
router.get('/profile', async (req, res) => {
    console.log('getting profile....')
    console.table(req.params)
    const result = await userService.getUserInfo(req.params.user)
    if (result === null) res.sendStatus(500)
    else res.send(result)
})

export default router
