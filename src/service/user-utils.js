import bcrypt from "bcrypt";

const SALT_ROUNDS = 10;

export const hashPassword = async (password) => await bcrypt.hash(password, SALT_ROUNDS);

export const passwordEquals = async (password, hashPassword) => await bcrypt.compare(password, hashPassword);
