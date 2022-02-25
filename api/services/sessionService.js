const { pool } = require('../configs/poolConfig.js')

const addSessionInfo = async (userid, sessionid, username) => {
    console.log('adding session info...')
    try {
        const res = await pool.query(
            'insert into portfolio.session_info(user_id, username, express_session_id) values($1,$2,$3);',
            [userid, username, sessionid]
        )
        return res.rows
    } catch (err) {
        return err.stack
    }
}

const removeSession = async (sessionid) => {
    console.log('removing session info...')
    try {
        const res = await pool.query(
            'delete from portfolio.session_info where express_session_id = $1;',
            [sessionid]
        )
        return res.rows
    } catch (err) {
        return err.stack
    }
}

const checkSession = async (sessionid) => {
    console.log('verifying session info...')
    try {
        const res = await pool.query(
            'select * from portfolio.session_info where express_session_id = $1;',
            [sessionid]
        )
        console.table(res)
        if (res.rowCount > 0) {
            return res.rows[0]
        } else {
            return null
        }
    } catch (err) {
        return err.stack
    }
}
module.exports = { addSessionInfo, removeSession, checkSession }
