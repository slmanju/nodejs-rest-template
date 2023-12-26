import to from "await-to-js";
import { verifyToken } from "../service/authentication-utils";
import { clientError } from "../exception/client-error";
import { asyncHandler } from "./error-handler";

const SKIPS = ["/login"];

const extractToken = (req) => {
  const tokenHeader = req.header("Authorization");
  if (tokenHeader) {
    const values = tokenHeader.split(" ");
    if (values.length === 2) {
      return values[1];
    }
  }
  return null;
};

const tokenVerifier = async (req, _res, next) => {
  const { originalUrl } = req;

  if (SKIPS.includes(originalUrl)) {
    next();
  } else {
    const token = extractToken(req);
    if (token) {
      next();
    } else {
      throw clientError("Invalid token", 401);
    }
  }
};

export default () => asyncHandler(tokenVerifier);
