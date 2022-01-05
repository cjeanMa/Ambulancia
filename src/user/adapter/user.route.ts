import { Request, Response, Router } from 'express';
import { ErrorHandler } from '../../shared/helpers/error.handler';
import { UserController } from './user.controller';

const router = Router();
const userController = new UserController();

router.get("/", ErrorHandler.asyncError(userController.list))
router.get("/:id", ErrorHandler.asyncError(userController.getOne))
router.get("/page/:page", ErrorHandler.asyncError(userController.getPage))
router.post("/", ErrorHandler.asyncError(userController.create))
router.put("/:id", ErrorHandler.asyncError(userController.update))
router.delete("/:id", ErrorHandler.asyncError(userController.delete))


export  { router };