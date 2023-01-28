import { Router } from "express";
import { auth } from "../../middlewares";
import TeamController from "./controller";
import { createTeam } from "./validator";
const router = Router();

router.post("/:company_id/team", auth, createTeam, TeamController.createTeam);

export default router;