import express from 'express';
import public_router from './public';
import private_router from './private';
import jwtVerify from '../middleware/jwtVerify';

const router = express.Router();

// router.use('/protected')
router.use('/public', public_router)
router.use('/private', jwtVerify, private_router)
export default router;