import * as Models from "../../models";
import DAO from "../../DAO";

class TeamServices {
  static async createTeam(company_id: string, team_lead_name: string) {
    try {
      let doc = {
        company_id: company_id,
        team_lead_name: team_lead_name,
      };
      const result = await DAO.saveDocument(Models.Team, doc);
      return result;
    } catch (error) {
      throw new Error(error);
    }
  }

  static async isTeamExists(team_lead_name: string) {
    try {
      let query = {
        team_lead_name: team_lead_name,
      };
      let result: any = await DAO.getData(Models.Team, query, {}, {});
      return result.length ? true : false;
    } catch (error) {
      throw new Error(error);
    }
  }
  static async isCompanyExists(_id: string) {
    try {
      let query = {
        _id: _id,
      };
      let checkExistingCompany: any = await DAO.getData(
        Models.Company,
        query,
        {},
        {}
      );
      console.log("checkExistingCompany", checkExistingCompany);
      return checkExistingCompany.length ? true : false;
    } catch (error) {
      throw Error(error);
    }
  }
}

export default TeamServices;
