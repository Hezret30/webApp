import init_app from './src/app.js'
import env from './config/config.js'
import { check_connection } from './database/db.js'

const app = init_app();

(async () => {
	await check_connection()
})()

app.listen(env.port, env.host, console.log(`http://${env.host}:${env.port}`))
