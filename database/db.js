import pg from 'pg'
import env from '../config/config.js'

const db = new pg.Pool({
    host: env.db_host,
    port: env.db_port,
    user: env.db_user,
    password: env.db_password,
    database: env.db_database,
})

export async function check_connection() {
    try {
        await db.query('SELECT 1')
    } catch (error) {
        console.log(`DB connection error: ${error}`)
        process.exit(1)
    }
}

export default db
