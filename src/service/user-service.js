import to from "await-to-js";
import { clientError } from "../exception/client-error";
import userRepository from "../repository/user-repository";
import { validateRole } from "../validations/user-validator";
import { hashPassword } from "./user-utils";

export const UserRole = {
  ADMIN: "Admin",
  DEV: "Developer",
};

const findAll = async () => await userRepository.findAll();

const findById = async (id) => {
  const [error, user] = await to(userRepository.findById(id));
  if (error) {
    throw clientError("User not found", 404);
  }
  return user;
};

const saveUser = async (user) => {
  const hashedPassword = await hashPassword(user.password);
  const newUser = {
    ...user,
    password: hashedPassword,
    created: Date.now(),
    updated: Date.now(),
  };
  return userRepository.save(newUser);
};

const updateUser = async (id, user) => {
  validateRole(user.role);
  const savedUser = await findById(id);
  const updateUser = {
    ...savedUser,
    role: user.role,
    updated: Date.now(),
  };
  return await userRepository.update(updateUser);
};

const deleteUser = async (id) => {
  const [_error] = await to(userRepository.deleteById(id));
};

export default { findAll, findById, saveUser, updateUser, deleteUser };
