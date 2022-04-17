import { Router } from 'express'
import postService from '../services/postService.js'
const router = new Router()

router.get('/', (req, res) => {
    res.send('hit the cyportfolio api')
})

router.get('/posts', async (req, res) => {
    console.log('getting all posts...')
    const results = await postService.getAllPosts()
    res.send(JSON.stringify(results))
})

export default router
