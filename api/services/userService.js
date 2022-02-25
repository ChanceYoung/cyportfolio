const { pool } = require('../configs/poolConfig.js')
const getUserPasswd = async (username) => {
    console.log('hit user passwd')
    console.log(username)
    try {
        const res = await pool.query(
            'Select user_id, hashed_password from portfolio.session_user where username = $1;',
            [username]
        )
        if (res.rowCount > 0) {
            return res.rows[0]
        } else {
            return null
        }
    } catch (err) {
        return err.stack
    }
}

const getUserById = async (userid) => {
    console.log('getting user by id')
    try {
        const res = await pool.query(
            'Select username from portfolio.session_user where user_id = $1;',
            [userid]
        )
        if (res.rowCount > 0) {
            return res.rows[0]
        } else {
            return null
        }
    } catch (err) {
        return err.stack
    }
}

module.exports = { getUserPasswd, getUserById }
