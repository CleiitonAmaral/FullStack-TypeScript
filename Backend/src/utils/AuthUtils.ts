import bcrypt from "bcrypt";
import { JWT_PASSWORD, SALTS_ROUNDS } from "../../confing"; 
import jwt from "jsonwebtoken";

interface User {
  user_id: number;
  user_name: string;
  email: string;
}

const hashPassword = async (password: string): Promise<string> => {
  return await bcrypt.hash(password, SALTS_ROUNDS);
};

const comparePassword = async (
  plainPassword: string,
  hashedPassword: string
): Promise<boolean> => {
  try {
    return await bcrypt.compare(plainPassword, hashedPassword);
  } catch (error: any) {
    throw new Error(`Error comparing passwords: ${error.message}`);
  }
};

const createToken = (user: User): string => {
  try {
    return jwt.sign({ id: user.user_id }, JWT_PASSWORD, { expiresIn: "24h" });
  } catch (error: any) {
    throw new Error(`Error generating token: ${error.message}`);
  }
};

export { hashPassword, comparePassword, createToken };
