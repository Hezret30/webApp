import { Router } from 'express'
import update_balance from './service.js'

const router = Router()

router.put('/balance/:id/:amount', update_balance)

export default router
