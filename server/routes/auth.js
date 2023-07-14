import express from 'express'

import { authController } from '../controllers/authController.js'

const router = express.Router()

router.get('/refresh',authController.requestRefreshToken)
router.get('/logout',authController.logoutUser)
router.post('/register',authController.registerUser)
router.post('/login',authController.loginUser)

export default router