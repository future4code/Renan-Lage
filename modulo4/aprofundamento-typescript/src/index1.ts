// let minhaString:string = 2
// a) o Typescript indica o erro no nome da variavel,
// dizendo que ela não é uma string.

let meuNumero: number | string = 2
// b) Nesse caso podemos usar o Union Type,
// para mostrar para o typescript que essa variável pode ter dois tipos.

// c)

enum CoresDoArcoiris {
 VERMELHA = "vermelha",
 LARANJA = "laranja",
 AMARELA = "amarela",
 VERDE = "verde",
 AZUL = "azul",
 AZULESCURO = "azul-escuro",
 VIOLETA = "violeta"
}

type Pessoa = {
 nome: string,
 idade: number,
 corFavorita: CoresDoArcoiris
}

const pessoa1: Pessoa =
{
 nome: "Renan",
 idade: 25,
 corFavorita: CoresDoArcoiris.VERMELHA
}

const pessoa2: Pessoa =
{
 nome: "Bruna",
 idade: 20,
 corFavorita: CoresDoArcoiris.AZUL
}

const pessoa3: Pessoa =
{
 nome: "José",
 idade: 35,
 corFavorita: CoresDoArcoiris.VIOLETA
}


