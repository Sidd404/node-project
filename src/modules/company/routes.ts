import { Router } from "express";
import CompanyController from "./controller";
import { auth } from "../../middlewares";
import {
  createCompany,
  searchCompany,
  companyDetails,
  allCompanyTeams,
} from "./validator";
const router = Router();

router.post("/", auth, createCompany, CompanyController.createCompany);
router.get("/search", auth, searchCompany, CompanyController.searchCompany);
router.get("/", auth, allCompanyTeams, CompanyController.getAllCompanies);
router.get(
  "/details/:_id",
  auth,
  companyDetails,
  CompanyController.getCompanyDetails
);

export default router;
