import pool from '../configs/poolConfig.js'
const getUserPasswd = async username => {
    try {
        const res = await pool.query(
            'Select user_id, hashed_password from portfolio.profile where user_name = $1;',
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

const getUserByName = async username => {
    console.log('getting user by name')
    try {
        const res = await pool.query(
            'Select username from portfolio.profile_user where user_name = $1;',
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

const userService = { getUserPasswd, getUserByName }
export default userService
