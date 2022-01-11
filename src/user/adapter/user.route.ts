import { Router } from 'express';
import { ErrorHandler } from '../../shared/helpers/error.handler';
import { UserController } from './user.controller';
import { validatorJoi } from '../../shared/helpers/validator.middleware';
import { userSchemas } from '../application/user.schemas';

const router = Router();
const userController = new UserController();

router.get("/", ErrorHandler.asyncError(userController.list))
router.get("/:id",validatorJoi(userSchemas.GET_ONE),ErrorHandler.asyncError(userController.getOne))
router.get("/page/:page", ErrorHandler.asyncError(userController.getPage))
router.post("/", ErrorHandler.asyncError(userController.create))
router.put("/:id", ErrorHandler.asyncError(userController.update))
router.delete("/:id", ErrorHandler.asyncError(userController.delete))


export  { router }; 