import { User } from '../types/types'
import { connection } from "../index";

export const findUser = async (idUser: number) => {
 try {
  let user: User
  if (!idUser) {
   throw new Error("Checar id")
  }
  const info = await connection.raw(`
  SELECT * FROM labecommerce_users WHERE id = ${idUser};
  `);
  user = {
   id: info[0][0].id,
   name: info[0][0].name,
   email: info[0][0].email,
   password: info[0][0].password
  }
  return user

 } catch (error: any) {
  console.log("Erro no serviço getAddressInfo:", error)
  return null
 }
}
