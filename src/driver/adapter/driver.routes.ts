import { Router } from "express"
import { DriverController } from "./driver.controller";

const router = Router();

const driverController = new DriverController();

router.get("/", driverController.list)
router.get("/:id", driverController.getOne)
router.get("/page/:page", driverController.getPage)
router.post("/", driverController.create)
router.put("/:id", driverController.update)
router.delete("/:id", driverController.delete)

export {router}