import express from "express";
import { createListing } from "../controllers/listingController.js";
const router = express.Router();
router.post("/create", createListing);

export default router;
