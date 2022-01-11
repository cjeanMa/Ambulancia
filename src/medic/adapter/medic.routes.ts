import { Router } from "express"
import { mergeParameter } from "../../shared/helpers/parameters.middleware";
import { medicSchema } from "../application/medic.schemas";
import { MedicController } from "./medic.controller";
import { validatorJoi } from "../../shared/helpers/validator.middleware";

const router = Router();
const medicController = new MedicController();

router.get("/", medicController.list)
router.get("/:id",
    mergeParameter(),
    validatorJoi(medicSchema.GET_ONE),
    medicController.getOne)
router.get("/page/:page",
    mergeParameter(),
    validatorJoi(medicSchema.GET_PAGE),
    medicController.getPage)
router.post("/",
    mergeParameter(),
    validatorJoi(medicSchema.INSERT),
    medicController.create)
router.put("/:id",
    mergeParameter(),
    validatorJoi(medicSchema.UPDATE),
    medicController.update)
router.delete("/:id",
    mergeParameter(),
    validatorJoi(medicSchema.DELETE),
    medicController.delete)

export { router };