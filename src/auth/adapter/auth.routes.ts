
import { Router } from 'express';
import { ErrorHandler } from '../../shared/helpers/error.handler';
import { AuthController } from './auth.controller';

const router = Router();
const authController = new AuthController();

router.post("/", ErrorHandler.asyncError(authController.login))
router.post("/refreshToken", ErrorHandler.asyncError(authController.getNewAccessToken))

export {router};