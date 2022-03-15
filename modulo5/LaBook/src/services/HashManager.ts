import * as bcrypt from 'bcryptjs';
import dotenv from "dotenv"

dotenv.config()

export class HashManager {

 createHash = (
  plainText: string
 ): string => {
  const rounds: number = Number(process.env.COST)
  const salt: string = bcrypt.genSaltSync(rounds)
  const cypherText: string = bcrypt.hashSync(plainText, salt)

  return cypherText
 }

 compareHash = (
  plainText: string,
  hash: string
 ): boolean => {
  return bcrypt.compareSync(plainText, hash)
 }
}