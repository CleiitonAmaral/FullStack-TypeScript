import dotenv from "dotenv";
dotenv.config();

export const SALTS_ROUNDS = Number(process.env.SALTS_ROUNDS) || 10;
export const JWT_PASSWORD =
  process.env.JWT_SECRET || "mi_clave_secretea_super_seceret@afjoij90djoiascj";
