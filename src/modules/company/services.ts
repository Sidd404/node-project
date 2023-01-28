import * as Models from "../../models";
import DAO from "../../DAO";

class CompanyServices {
  static async createCompany(
    name: string,
    ceo: string,
    address: string,
    inception_date: Date
  ) {
    try {
      let body = {
        name: name,
        ceo: ceo,
        address: address,
        inception_date: inception_date,
      };
      let result = await DAO.saveDocument(Models.Company, body);
      return result;
    } catch (error) {
      throw new Error(error);
    }
  }
  static async isCompanyExists(name: string) {
    try {
      let query = {
        name: name,
      };
      let checkExistingCompany: any = DAO.getData(
        Models.Company,
        query,
        {},
        {}
      );
      return checkExistingCompany.length ? true : false;
    } catch (error) {
      throw Error(error);
    }
  }
  static async getCompanyDetails(company_id: string) {
    try {
      let query = {
        _id: company_id,
      };
      let projection = {
        __v: 0,
        updatedAt: 0,
      };
      let options = {
        lean: true,
      };
      let company_details: any = await DAO.getData(
        Models.Company,
        query,
        projection,
        options
      );
      if (!company_details.length) {
        throw new Error("No data found.");
      }
      return company_details;
    } catch (error) {
      throw new Error(error);
    }
  }

  static async searchCompany(keyword: string) {
    try {
      let query = {
        name: { $regex: keyword, $options: "i" },
      };
      let projections = {
        __V: 0,
      };
      let options = {
        lean: true,
      };
      let result = await DAO.getData(
        Models.Company,
        query,
        projections,
        options
      );
      return result;
    } catch (error) {
      throw new Error(error);
    }
  }

  static async getAllCompanies(company_id: any) {
    try {
      let query = {};
      if (company_id) {
        query = {
          _id: company_id,
        };
      }

      let pipeline = [
        {
          $match: query,
        },
        {
          $lookup: {
            from: "teams",
            localField: "_id",
            foreignField: "company_id",
            as: "teams",
          },
        },
      ];
      let result = await DAO.aggregate(Models.Company, pipeline);
      return result;
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default CompanyServices;
