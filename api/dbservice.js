const Pool = require('pg').Pool

const pool = new Pool({
    user: process.env.POR_POSTGRES_USER,
    host: process.env.POR_POSTGRES_HOST,
    database: process.env.POR_POSTGRES_DB,
    password: process.env.POR_POSTGRES_PASSWORD,
    port: 5432,
})

const getPosts = () => {
    try {
        const res = await pool.query('Select * from portfolio.post')
        return res.rows
    } catch (err) {
        return err.stack
    }
}

const getUserPasswd = (username) => {
    try {
        const res = await pool.query(
            'Select hashed_password from portfolio.session_user where username = ?',
            [username]
        )
        return res.rows[0]
    } catch (err) {
        return err.stack
    }
}

module.exports = { getPosts, getUserPasswd }
