import expres from 'express'
import authRoute from './auth-router.js'

const router = expres.Router();

router.use('/auth', authRoute)

export default router;