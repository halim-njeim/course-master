import { Router } from "express";
import UserController from "../app/Controllers/user.controller.js";

const router = Router();

router.post("/register", UserController.register);

export default router;
