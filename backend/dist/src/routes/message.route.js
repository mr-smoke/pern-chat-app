import express from 'express';
import protectRoute from '../middleware/protectRoute.js';
import { getConversations, getMessages, sendMessage } from '../controllers/message.controller.js';
const router = express.Router();
router.post("/send/:id", protectRoute, sendMessage);
router.get("/conversations", protectRoute, getConversations);
router.get("/:id", protectRoute, getMessages);
export default router;
