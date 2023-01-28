import Joi from "joi";
import { handleJoiError, handleCatchError } from "../../middlewares";

const createTeam = async (req: any, res: any, next: any) => {
  try {
    let body_schema: any = Joi.object({
      team_lead_name: Joi.string().required().trim(),
    });
    let path_schema: any = Joi.object({
      company_id: Joi.string().guid().required().trim(),
    });
    let { error: body_error } = body_schema.validate(req.body);
    let { error: path_error } = path_schema.validate(req.params);

    if (path_error) {
      throw await handleJoiError(path_error);
    } else if (body_error) {
      throw await handleJoiError(body_error);
    } else {
      next();
    }
  } catch (err) {
    handleCatchError(res, err);
  }
};
export { createTeam };
