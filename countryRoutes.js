import { Router } from "express";
import CountryController from "../controllers/CountryController.js";

const router = Router();

router.get("/", CountryController.getAll);
router.get("/:id", CountryController.getOne);
router.post("/", CountryController.create);
router.put("/:id", CountryController.update);
router.delete("/:id", CountryController.delete);

export default router;
