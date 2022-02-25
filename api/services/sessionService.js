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

const checkSession = async (session) => {
    console.log('verifying session info...')
    const sessionid = session.sessionID
    const userid = session.userid
    try {
        const res = await pool.query(
            'select express_session_id from portfolio.session_info where user_id = $1;',
            [userid]
        )
        console.table(res.rows)
        if (res.rowCount > 0) {
            if (res.rows[0].express_session_id === sessionid) return true
            else return false
        } else {
            return false
        }
    } catch (err) {
        return err.stack
    }
}
module.exports = { addSessionInfo, removeSession, checkSession }
