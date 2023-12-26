import userService from "./user-service";
import { passwordEquals } from "./user-utils";
import { clientError } from "../exception/client-error";
import { signToken } from "./authentication-utils";

const validatePassword = async (password, userPassword) => {
  const passwordMatch = await passwordEquals(password, userPassword);
  if (!passwordMatch) {
    throw clientError("Invalid login request", 400);
  }
};

const generateToken = async (username, password) => {
  const user = await userService.findByUsername(username);
  validatePassword(password, user.password);
  return signToken({ userId: user._id, role: user.role });
};

export default generateToken;
