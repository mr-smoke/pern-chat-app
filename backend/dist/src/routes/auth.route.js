import express from "express";
import { getAuth, login, logout, signup } from "../controllers/auth.controller.js";
import protectRoute from "../middleware/protectRoute.js";
const router = express.Router();
router.get("/getAuth", protectRoute, getAuth);
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
export default router;
