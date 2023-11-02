import express from 'express'
import cors from 'cors'
import router from './api/controller.js'

export default function init_app() {
    const app = express()

    app.use(cors())
    app.use(express.json())

    app.use(router)

    return app
}
