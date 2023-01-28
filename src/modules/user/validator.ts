import Joi from "joi";
import { handleJoiError, handleCatchError } from "../../middlewares";

const login = async (req: any, res: any, next: any) => {
  try {
    let schema: any = Joi.object({
      username: Joi.string().optional().trim()
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

export { login };