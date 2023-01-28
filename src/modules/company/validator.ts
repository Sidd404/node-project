import Joi from "joi";
import { handleJoiError, handleCatchError } from "../../middlewares";

const createCompany = async (req: any, res: any, next: any) => {
  try {
    let schema: any = Joi.object({
      name: Joi.string().required().trim(),
      ceo: Joi.string().required().trim(),
      address: Joi.string().optional().trim(),
      inception_date: Joi.date().optional(),
    });

    let { error } = schema.validate(req.body);
    if (error) {
      throw await handleJoiError(error);
    } else {
      next();
    }
  } catch (err) {
    handleCatchError(res, err);
  }
};
const searchCompany = async (req: any, res: any, next: any) => {
  try {
    let schema: any = Joi.object({
      keyword: Joi.string().required().trim(),
    });

    let { error } = schema.validate(req.query);
    if (error) {
      throw await handleJoiError(error);
    } else {
      next();
    }
  } catch (err) {
    handleCatchError(res, err);
  }
};
const companyDetails = async (req: any, res: any, next: any) => {
  try {
    console.log("joi",req.params._id);

    let schema: any = Joi.object({
      _id: Joi.string().guid().required().trim(),
    });

    let { error } = schema.validate(req.params);
    if (error) {
      throw await handleJoiError(error);
    } else {
      next();
    }
  } catch (err) {
    handleCatchError(res, err);
  }
};

const allCompanyTeams = async (req: any, res: any, next: any) => {
  try {
    let schema: any = Joi.object({
      company_id: Joi.string().guid().optional().trim(),
    });

    let { error } = schema.validate(req.query);
    if (error) {
      throw await handleJoiError(error);
    } else {
      next();
    }
  } catch (err) {
    handleCatchError(res, err);
  }
};

export { createCompany, searchCompany, companyDetails, allCompanyTeams };
