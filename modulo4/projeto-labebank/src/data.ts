export type User = {
 id: number,
 name: string,
 CPF: string,
 birthDate: string,
 balance: number,
 extract: ExtractBank[]
}

export type ExtractBank = {
 value: number,
 date: string,
 descripton: string
}

export let users: User[] = [
 {
  id: 1,
  name: "Renan",
  CPF: "123.456.789-10",
  birthDate: "30/03/1996",
  balance: 1000,
  extract: [
   {
    value: -15,
    date: "15/01/2022",
    descripton: "padaria do seu zé"
   },
   {
    value: -75,
    date: "23/12/2021",
    descripton: "transferência para lucas"
   },
   {
    value: 30,
    date: "17/11/2021",
    descripton: "transferência de José"
   }
  ]
 },
 {
  id: 2,
  name: "José",
  CPF: "142.758.523-14",
  birthDate: "04/12/1998",
  balance: 200,
  extract: [
   {
    value: -400,
    date: "02/01/2022",
    descripton: "Centauro"
   },
   {
    value: 75,
    date: "10/12/2021",
    descripton: "transferência de Maria"
   },
   {
    value: -30,
    date: "17/11/2021",
    descripton: "transferência para Renan"
   }
  ]
 },
 {
  id: 3,
  name: "Lucas",
  CPF: "452.784.868-42",
  birthDate: "04/12/1998",
  balance: 20,
  extract: [
   {
    value: 75,
    date: "23/12/2021",
    descripton: "transferência de Renan"
   },
   {
    value: 800,
    date: "22/11/2021",
    descripton: "Americanas"
   }
  ]
 },
 {
  id: 4,
  name: "Maria",
  CPF: "785.256.951-13",
  birthDate: "01/05/1980",
  balance: 7000,
  extract: [
   {
    value: -75,
    date: "10/12/2021",
    descripton: "Trancerência para José"
   }
  ]
 }
]