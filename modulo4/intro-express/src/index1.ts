import express from "express";

import { AddressInfo } from "net";

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
 if (server) {
  const address = server.address() as AddressInfo;
  console.log(`Server is running in http://localhost:${address.port}`);
 } else {
  console.error(`Failure upon starting server.`);
 }
});;

app.get("/", (req, res) => {
 res.send("Hello from Express")
})

type User = {
 id: number,
 name: string,
 phone: string,
 email: string,
 website: string
}

let users: User[] = [
 {
  id: 1,
  name: "Renan",
  phone: "(11) 97501-8191",
  email: "renan@gmail.com",
  website: "renan.com.br"
 },
 {
  id: 2,
  name: "Bruna",
  phone: "(11) 98504-8491",
  email: "bruna@gmail.com",
  website: "bruna.com.br"
 },
 {
  id: 3,
  name: "José",
  phone: "(11) 87501-7499",
  email: "jose@gmail.com",
  website: "jose.com.br"
 },
 {
  id: 4,
  name: "Fernanda",
  phone: "(11) 97785-9741",
  email: "fernanda@gmail.com",
  website: "fernanda.com.br"
 }
]

type Post = {
 id: number,
 title: string,
 body: string,
 userId: number
}

let posts: Post[] = [
 {
  id: 1,
  title: "titulo 1",
  body: "conteudo 1",
  userId: 1
 },
 {
  id: 2,
  title: "titulo 2",
  body: "conteudo 2",
  userId: 2
 },
 {
  id: 3,
  title: "titulo 3",
  body: "conteudo 3",
  userId: 3
 },
 {
  id: 4,
  title: "titulo 4",
  body: "conteudo 4",
  userId: 4
 },
 {
  id: 5,
  title: "titulo 5",
  body: "conteudo 5",
  userId: 1
 },
 {
  id: 6,
  title: "titulo 6",
  body: "conteudo 6",
  userId: 2
 }
]
// 6) Acho que é melhor criar o array de posts fora do array
//  de Usuarios, pois ficaria mais facil para conseguir 
// usar cada array.

app.get('/users', (req, res) => {
 res.send(users)
})

app.get('/posts', (req, res) => {
 res.send(posts)
})

app.get(`/user/:userId/posts`, (req, res) => {
 let newArray: Post[] = []
 newArray = posts.filter((post) => {
  return post.userId == Number(req.params.userId)
 })
 res.send(newArray)
})