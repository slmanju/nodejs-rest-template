import jwt from "jsonwebtoken";
import { clientError } from "../exception/client-error";

const SECRET = "special-secret";

export const signToken = async (payload) => {
  return jwt.sign(payload, SECRET, {
    expiresIn: "1h",
  });
};

export const verifyToken = async (token) => {
  try {
    return jwt.verify(token, SECRET);
  } catch (error) {
    throw clientError("Invalid token", 401);
  }
};
