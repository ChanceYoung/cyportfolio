import pool from '../configs/poolConfig.js'
import { postQueries } from '../configs/queries.js'
const getAllPosts = async () => {
    try {
        const res = await pool.query(postQueries.selectAll)
        return res.rows
    } catch (err) {
        return err.stack
    }
}
const postService = { getAllPosts }
export default postService
