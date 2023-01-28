import express from "express";
import { handleCatchError, decodeToken } from "./index";

const auth = async (
  req: any,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    let authorization = req.headers.authorization,
      method = req.method;

    console.log("request method - ", method);
    let decoded_token: any = await decodeToken(authorization);
    if (decoded_token.scope == "READ" && method != "GET") {
      throw new Error("You are not authorized to perform this action.");
    }
    req.user = decoded_token;
    next();
  } catch (error) {
    handleCatchError(res, error);
  }
};

export { auth };
