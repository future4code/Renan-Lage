import express, { Express, Request, Response } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";

dotenv.config();

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

const app: Express = express();
app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3003, () => {
 if (server) {
  const address = server.address() as AddressInfo;
  console.log(`Server is running in http://localhost: ${address.port}`);
 } else {
  console.error(`Failure upon starting server.`);
 }
});

const createUser = async (
 id: string,
 name: string,
 nickname: string,
 email: string
): Promise<void> => {
 await connection
  .insert({
   id,
   name,
   nickname,
   email,
  })
  .into("TodoListUser");
};

const getUser = async (id: string): Promise<any> => {
 const result = await connection.raw(`
   SELECT * FROM TodoListUser WHERE id = "${id}"
 `)
 return result
}

app.post('/user', async (req: Request, res: Response) => {
 try {
  await createUser(
   req.body.id,
   req.body.name,
   req.body.nickname,
   req.body.email
  );
  res.status(200).send();
 } catch (error: any) {
  res.status(400).send({ message: error.message })
 }
})

app.get('/user/:id', async (req: Request, res: Response) => {
 try {
  const id = req.params.id;
  const user = await getUser(id)

  res.status(200).send(user[0][0])
 } catch (error: any) {
  res.status(400).send({
   message: error.message
  });
 }
})