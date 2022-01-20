
import { Router } from 'express';
import { ErrorHandler } from '../../shared/helpers/error.handler';
import { RoleController } from './role.controller';
import { validatorJoi } from '../../shared/helpers/validator.middleware';
import { roleSchemas } from '../application/role.schemas';
import { mergeParameter } from '../../shared/helpers/parameters.middleware';

const router = Router();
const roleController = new RoleController();

router.get("/", 
            ErrorHandler.asyncError(roleController.list))
router.get("/:id",
            mergeParameter(),
            validatorJoi(roleSchemas.GET_ONE),
            ErrorHandler.asyncError(roleController.getOne))
router.get("/page/:page", 
            mergeParameter(),
            validatorJoi(roleSchemas.GET_PAGE),
            ErrorHandler.asyncError(roleController.getPage))
router.post("/",
            mergeParameter(),
            validatorJoi(roleSchemas.INSERT),
            ErrorHandler.asyncError(roleController.create))
router.put("/:id",
            mergeParameter(), 
            validatorJoi(roleSchemas.UPDATE),
            ErrorHandler.asyncError(roleController.update))
router.delete("/:id", 
            mergeParameter(), 
            validatorJoi(roleSchemas.DELETE),
            ErrorHandler.asyncError(roleController.delete))


export  { router }; 