/*
1.
a)
Matheus Nachtergaele
Virginia Cavendish
{canal: "Globo", horario: "14h"}
*/

/*
2.
a)
{nome: "Juca", idade: 3, raca: "SRD"}
{nome: "Juba", idade: 3, raca: "SRD"}
{nome: "Jubo", idade: 3, raca: "SRD"}
b)
O "..." são para fazer o espalhamento, ou spread.
É responsável para copiar as informações que nao forem trocadas do objeto.
Ou seja a idade e a raça são copiadas.
*/

/*
3.
a)
false
undefined

b)
A função esta entrando o objeto, pessoa, e a chave, backender, e está devolvendo o valor, false.
Só que a chave altura nao existe no objeto, por isso retorna undefined.
*/

/*
1.
a)
const pessoa = {
  nome: "José Antonio",
  apelidos: ["Zé", "Toninho", "Zezinho"] 
};

function frase(pessoa){
  console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`);
}

frase(pessoa);
*/

/*
b)
const pessoaDois = {...pessoa, apelidos: ["Antonio", "José", "Zé Tonho"]}

frase(pessoaDois);
*/

/*
2
a)
const pessoaUm = {
  nome: "Renan",
  idade: 25,
  profissao: "Estudante"
}
const pessoaDois = {
  ...pessoaUm, 
  nome: "Bruna",
  idade: 23,
  profissao: "Jornalista"
}

b)
function array(pessoa){
  return arrayPessoa = [pessoa.nome, pessoa.nome.length, pessoa.idade, pessoa.profissao, pessoa.profissao.length];
}

array(pessoaUm);
console.log(arrayPessoa);
array(pessoaDois);
console.log(arrayPessoa);
*/

/*
3
let carrinho = [];

const banana = {
  nome: "Banana",
  disponibilidade: true
};
const mamao = {...banana, nome:"mamao"};
const limao = {...banana, nome:"limao"};

function colocaNoCarrinho(fruta) {
  carrinho.push(fruta);
};
colocaNoCarrinho(banana);
colocaNoCarrinho(mamao);
colocaNoCarrinho(limao);

console.log(carrinho);
*/

/*
desafios
1.
const nome = prompt("Qual o seu nome?");
const idade = prompt("Qual a sua idade?");
const profissao = prompt("Qual a sua profissão?");

const pessoa = {
  nome: nome,
  idade: idade,
  profissao: profissao
}

console.log(pessoa);
console.log(typeof(pessoa));
*/

/*
2.
const filmeUm = {
  nome: "Shrek",
  lancamento: 2001
};
const filmeDois = {...filmeUm, nome: "Monstros S.A.",}

function anoDeLancamento (filmeUm,filmeDois) {
  console.log(`O primeiro filme foi lançado antes do segundo? ${filmeUm.lancamento < filmeDois.lancamento}`);
  console.log(`O primeiro filme foi lançado no mesmo ano do segundo?${filmeUm.lancamento === filmeDois.lancamento}`)
}

anoDeLancamento(filmeUm, filmeDois);
*/

/*
3.
let carrinho = [];

const banana = {
  nome: "Banana",
  disponibilidade: true
};
const mamao = {...banana, nome:"mamao"};
const limao = {...banana, nome:"limao"};

function colocaNoCarrinho(fruta) {
  carrinho.push(fruta);
};
colocaNoCarrinho(banana);
colocaNoCarrinho(mamao);
colocaNoCarrinho(limao);

console.log(carrinho);

function disponibilidade(fruta){
  return fruta.disponibilidade = false;
}

disponibilidade(mamao);
console.log(mamao);
*/