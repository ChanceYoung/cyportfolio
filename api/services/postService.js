import pool from '../configs/poolConfig.js'
const getPosts = async () => {
    try {
        const res = await pool.query('Select * from portfolio.post;')
        return res.rows
    } catch (err) {
        return err.stack
    }
}
const postService = { getPosts }
export default postService
