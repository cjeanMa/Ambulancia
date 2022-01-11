import { Router } from "express"
import { mergeParameter } from "../../shared/helpers/parameters.middleware";
import { validatorJoi } from "../../shared/helpers/validator.middleware";
import { driverSchema } from "../application/driver.schemas";
import { DriverController } from "./driver.controller";

const router = Router();

const driverController = new DriverController();

router.get("/", driverController.list)
router.get("/:id",
    mergeParameter(),
    validatorJoi(driverSchema.GET_ONE),
    driverController.getOne)
router.get("/page/:page",
    mergeParameter(),
    validatorJoi(driverSchema.GET_PAGE),
    driverController.getPage)
router.post("/",
    mergeParameter(),
    validatorJoi(driverSchema.INSERT),
    driverController.create)
router.put("/:id",
    mergeParameter(),
    validatorJoi(driverSchema.UPDATE),
    driverController.update)
router.delete("/:id",
    mergeParameter(),
    validatorJoi(driverSchema.DELETE),
    driverController.delete)

export { router }