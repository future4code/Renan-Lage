import { User } from "../model/User";
import { UserDatabase } from "../data/UserDataBase";

export class UserBusiness {
 constructor(
  private userDatabase: UserDatabase
 ) {
 }
 protected tableName: string = "User_Arq";

 public async getUserById(id: string): Promise<User | undefined> {
  try {

   const user = await this.userDatabase.getUserById(id);
   if (!user) {
    throw new Error("User not found");
   }

   const newUser: any = {
    id: user.getId(),
    name: user.getName(),
    email: user.getEmail(),
    role: user.getRole(),
   };

   return newUser;

  } catch (error: any) {
   throw new Error(error.sqlMessage || error.message)
  }
 }
}