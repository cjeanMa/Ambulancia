import { Router } from 'express';
import { ErrorHandler } from '../../shared/helpers/error.handler';
import { UserController } from './user.controller';
import { validatorJoi } from '../../shared/helpers/validator.middleware';
import { userSchemas } from '../application/user.schemas';
import { mergeParameter } from '../../shared/helpers/parameters.middleware';
import { AutheticationGuard } from '../../shared/guards/authentication.guard';
import { AuthorizationGuard } from '../../shared/guards/authorization.guard';
import { UploadMiddleware } from '../../shared/middlewares/upload.middleware';

const router = Router();
const userController = new UserController();

router.get("/", 
            AutheticationGuard.canActivate,
            AuthorizationGuard.rolAuthorization("ADMIN"),
            ErrorHandler.asyncError(userController.list))
router.get("/:id",
            mergeParameter(),
            validatorJoi(userSchemas.GET_ONE),
            ErrorHandler.asyncError(userController.getOne))
router.get("/page/:page", 
            mergeParameter(),
            validatorJoi(userSchemas.GET_PAGE),
            ErrorHandler.asyncError(userController.getPage))
router.post("/",
            UploadMiddleware.S3("photo",["image/gif", "image/png", "image/jpeg", "image/jpg"]),
            mergeParameter(),
            validatorJoi(userSchemas.INSERT),
            userController.create)
router.put("/:id",
            mergeParameter(), 
            validatorJoi(userSchemas.UPDATE),
            ErrorHandler.asyncError(userController.update))
router.delete("/:id", 
            mergeParameter(), 
            validatorJoi(userSchemas.DELETE),
            ErrorHandler.asyncError(userController.delete))


export  { router }; 