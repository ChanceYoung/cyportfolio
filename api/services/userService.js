import pool from '../configs/poolConfig.js'
import { profileQueries } from '../configs/queries.js'

const getUserByName = async username => {
    console.log('getting user by name')
    try {
        const res = await pool.query(profileQueries.getProfile, [username])
        if (res.rowCount > 0) {
            return res.rows[0]
        } else {
            return null
        }
    } catch (err) {
        return err.stack
    }
}

const userService = { getUserByName }
export default userService
