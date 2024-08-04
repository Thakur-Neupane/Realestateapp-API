import express from "express";
import { signin, signup } from "../controllers/authController.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/signup", signin);

export default router;
