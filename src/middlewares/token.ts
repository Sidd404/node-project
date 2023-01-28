import jwt from "jsonwebtoken";
import { handleCatchError } from "./index";
require("dotenv").config();

const generateToken = (data: any) => {
  return new Promise((resolve, reject) => {
    try {
      let secret_key = process.env.JWT_SECRET_KEY;
      const token = jwt.sign(data, secret_key, { expiresIn: "1h" });
      return resolve(token);
    } catch (error) {
      throw reject(error);
    }
  });
};

const decodeToken = (token: any) => {
  return new Promise((resolve, reject) => {
    try {
      let secret_key = process.env.JWT_SECRET_KEY;
      jwt.verify(token, secret_key, (err: any, decoded: any) => {
        if (decoded == undefined) {
          return reject("You are not authorized to perform this action.");
        } else {
          return resolve(decoded);
        }
      });
    } catch (error) {
      throw reject(error);
    }
  });
};

export { generateToken, decodeToken };
