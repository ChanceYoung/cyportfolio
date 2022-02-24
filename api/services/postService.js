const { pool } = require('../configs/poolConfig.js')
const getPosts = async () => {
    try {
        const res = await pool.query('Select * from portfolio.post;')
        return res.rows
    } catch (err) {
        return err.stack
    }
}
module.exports = { getPosts }
