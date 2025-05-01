import { Router } from "express";
import AuthController from "../app/Controllers/auth.controller.js";
import {
  RegisterRequest,
  LoginRequest,
} from "../app/Validators/Auth/auth.requests.js";

const router = Router();

router.post("/register", RegisterRequest.middleware(), AuthController.register);
router.post("/login", LoginRequest.middleware(), AuthController.login);

export default router;
