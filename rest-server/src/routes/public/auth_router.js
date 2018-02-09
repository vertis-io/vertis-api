import express from 'express';
import auth_controller from '../../controllers/AuthController';
const auth_router = express.Router();

auth_router.route('/signup')
  .post(auth_controller.SignUp);

auth_router.route('/query')
  .get(auth_controller.List);

auth_router.route('/login')
  .post(auth_controller.Login);
  
export default auth_router;