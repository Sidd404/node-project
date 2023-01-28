import { Router } from "express";
import UserController from "./controller";
import { login } from "./validator";
const router = Router();

router.post("/admin/login", login, UserController.adminLogin);
router.post("/user/login", login, UserController.userLogin);

export default router;
