import { handleCatchError, handleSuccess } from "../../middlewares";
import UserServices from "./services";
import { Request, Response } from "express";

class UserController {
  static async adminLogin(req: Request, res: Response) {
    try {
      let { username } = req.body;
      const result: any = await UserServices.adminLogin(username);
      let message = "Admin login successful.";
      handleSuccess(res, result, message, null);
    } catch (error) {
      handleCatchError(res, error);
    }
  }
  static async userLogin(req: Request, res: Response) {
    try {
      let { username } = req.body;
      const result: any = await UserServices.userLogin(username);
      let message = "User login successful.";
      handleSuccess(res, result, message, null);
    } catch (error) {
      handleCatchError(res, error);
    }
  }
}
export default UserController;
