import { Request, Response } from "express";
import { handleCatchError, handleSuccess } from "../../middlewares";
import TeamServices from "./services";
import CompanyServices from "../company/services";
class TeamController {
  static async createTeam(req: Request, res: Response) {
    try {
      let { company_id } = req.params,
        { team_lead_name } = req.body;
      console.log("company_id", company_id);
      let isCompanyExists = await TeamServices.isCompanyExists(company_id);
      console.log("isCompanyExists", isCompanyExists);
      if (!isCompanyExists) {
        throw new Error("Please enter valid company id");
      }
      let isTeamExists = await TeamServices.isTeamExists(team_lead_name);
      if (isTeamExists) {
        throw new Error("Team already exists");
      }
      let result: any = await TeamServices.createTeam(
        company_id,
        team_lead_name
      );
      let message = "Team created successfully.";
      handleSuccess(res, result, message, null);
    } catch (error) {
      handleCatchError(res, error);
    }
  }
}
export default TeamController;
