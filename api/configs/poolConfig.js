import pkg from 'pg'
const { Pool } = pkg

const pool = new Pool({
    user: process.env.POR_POSTGRES_USER,
    host: process.env.POR_POSTGRES_HOST,
    database: process.env.POR_POSTGRES_DB,
    password: process.env.POR_POSTGRES_PASSWORD,
    port: 5432,
})

export default pool
