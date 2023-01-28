import { Request, Response } from "express";
import { handleCatchError, handleSuccess } from "../../middlewares";
import CompanyServices from "./services";

class CompanyController {
  static async createCompany(req: Request, res: Response) {
    try {
      const { name, ceo, address, inception_date } = req.body;
      let checkExistingCompany = CompanyServices.isCompanyExists(name);
      if (!checkExistingCompany) {
        throw new Error("Company with same name already exist.");
      }
      const result = await CompanyServices.createCompany(
        name,
        ceo,
        address,
        inception_date
      );
      const message = "Congratulations, comapny created successfully.";
      handleSuccess(res, message, result, null);
    } catch (error) {
      handleCatchError(res, error);
    }
  }
  static async getCompanyDetails(req: any, res: Response) {
    try {
      let { _id: company_id } = req.params;
      console.log("company_id", company_id);

      const result = await CompanyServices.getCompanyDetails(company_id);
      let message = "Data fetched.";
      handleSuccess(res, message, result, null);
    } catch (error) {
      handleCatchError(res, error);
    }
  }
  static async searchCompany(req: any, res: Response) {
    try {
      let { keyword } = req.query;
      const result: any = await CompanyServices.searchCompany(keyword);
      let message = "search results!!!";
      handleSuccess(res, message, result, result.length);
    } catch (error) {
      handleCatchError(res, error);
    }
  }
  static async getAllCompanies(req: Request, res: Response) {
    try {
      let { company_id = undefined } = req.query;
      const result: any = await CompanyServices.getAllCompanies(company_id);
      let message = "All companies.";
      handleSuccess(res, message, result, result.length);
    } catch (error) {
      handleCatchError(res, error);
    }
  }
}
export default CompanyController;
