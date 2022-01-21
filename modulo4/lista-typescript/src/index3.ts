
enum GENERO {
 ACAO = "ação",
 DRAMA = "drama",
 COMEDIA = "comédia",
 ROMANCE = "romance",
 TERROR = "terror"
}

type Filme = {
 nome: string,
 data: number,
 genero: GENERO,
 pontuacao?: number
}

function criaObjeto(nome: string, data: number, genero: GENERO, pontuacao?: number) {
 let filme: Filme
pontuacao ?
  filme = {
  nome: nome,
  data: data,
  genero: genero,
  pontuacao: pontuacao
 } :
 filme = {
  nome: nome,
  data: data,
  genero: genero
 }
 return filme
}

console.log(criaObjeto("Duna", 2021, GENERO.ACAO));


