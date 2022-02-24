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
module.exports = { addSessionInfo }
