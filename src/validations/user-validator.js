import { Joi } from "celebrate";
import { UserRole } from "../service/user-service";

export const userSchema = Joi.object().keys({
  username: Joi.string().min(3).max(10).required(),
  password: Joi.string().min(3).required(),
  role: Joi.string().required(),
});

export const validateRole = (role) => {
  if (!Object.values(UserRole).includes(role)) {
    throw clientError("Invalid role", 400);
  }
};
