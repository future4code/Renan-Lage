import express, { Request, Response } from "express";
import { UserType, User, users } from "./data";
import { AddressInfo } from "net";
import cors from "cors"

const app = express();
app.use(cors())
app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
 if (server) {
  const address = server.address() as AddressInfo;
  console.log(`Server is running in http://localhost:${address.port}`);
 } else {
  console.error(`Failure upon starting server.`);
 }
});;

// 1 a) usamos o metodo HTTP get.
// b) usamos /users como entidade.

app.get('/users', (req: Request, res: Response) => {
 res.send({ result: users })
})

// 2 a) Eu usei o type dentro do data.ts, e exportei ela para
// o index.ts, usei o enum para restringir o type do usuario.
// b) Para garantirmos que apenas validos sejam usados, temos
// que tipar a variavel users.

app.get('/user', (req: Request, res: Response) => {
 let errorCode: number = 400;
 try {
  const name: string = req.query.name as string
  const user: User | undefined = users.find((user) => user.name == name)
  if (!user) {
   errorCode = 404
   throw new Error('User not found')
  }
  res.status(200).send({ result: user })
 } catch (error: any) {
  res.status(errorCode).send({ message: error.message })
 }
})

// 3a) nesse caso de pesquisa normalmente é usado o query paramater

app.put('/users', (req: Request, res: Response) => {
 let errorCode: number = 400;
 try {
  let { id, name, email, type, age } = req.body
  switch (type) {
   case 'Normal':
    type = UserType.NORMAL
   case 'Admin':
    type = UserType.ADMIN
  }

  if (!id || !name || !email || !type || !age) {
   errorCode = 404
   throw new Error('Please check the fields')
  }
  const newUser: User = { id, name, email, type, age }
  users.push(newUser)
  res.status(200).send({ message: 'User created sucessefuly', users: users })
 } catch (error: any) {
  res.status(errorCode).send({ message: error.message })
 }
})

// 4 a) Nada
// b) Não, pois mesmo que não mude, como boas práticas para
// adiconar é melhor usar o post, e o put para alterar.

