import { Router } from "express";
import { UserController } from "../app/Controllers/user.controller";

const router = Router();

router.post("/register", UserController.register.bind(UserController));

export default router;
