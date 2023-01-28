import { generateToken } from "../../middlewares";

class UserServices {
  static async adminLogin(username: string) {
    try {
      let payload = {
        username: username,
        current_time: Date.now(),
        scope: "WRITE"
      };
      let token = await generateToken(payload);
      return token;
    } catch (error) {
      throw new Error(error);
    }
  }
  static async userLogin(username: string) {
    try {
      let payload = {
        username: username,
        current_time: Date.now(),
        scope: "READ"
      };
      let token = await generateToken(payload);
      return token;
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default UserServices;
