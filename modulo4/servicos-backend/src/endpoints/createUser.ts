import { getAddressInfo } from "../services/getAddressInfo"
import { Request, Response } from "express";
import knex from "knex";

export const connection = knex({
 client: "mysql",
 connection: {
  host: process.env.DB_HOST,
  port: 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
 }
});

export const createUser = async (req: Request, res: Response) => {
 try {
  const { cep, numero, complemento } = req.body

  const address = await getAddressInfo(cep)

  if (!address) {
   throw new Error("Deu ruim no serviço getAddressInfo")
  }

  const info = await connection.raw(`
  INSERT INTO user_endereco (cep,logradouro,
   numero,
   complemento,
   bairro,
   cidade,
   estado
   ) VALUES (
   "${numero}",
   "${complemento}",
   "${address.bairro}",
   "${address.cidade}",
   "${address.estado}"
   );
   `);
console.log(address.bairro)
  res.send({ info, message: "Cadastro realizado com sucesso" })

 } catch (error) {
  if (error instanceof Error) {
   res.send({ error, message: error.message })
  } else {
   res.send({ message: "Erro inesperado" })
  }
 }
}