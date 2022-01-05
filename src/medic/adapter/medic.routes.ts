import {Router} from "express"
import { MedicController } from "./medic.controller";

const router = Router();
const medicController = new MedicController();

router.get("/", medicController.list)
router.get("/:id", medicController.getOne)
router.get("/page/:page", medicController.getPage)
router.post("/", medicController.create)
router.put("/:id", medicController.update)
router.delete("/:id", medicController.delete)

export {router};