/*
1.
a) Aparecerá:
10
50

b) Se retirar a o console.log, não aparecerá nada no console, mas sera executado a função.
*/

/*
2.
a. A função está transformando o texto em minusculo com o toLowerCase(), porém o includes faz retornar apenas true ou false.
Nesse caso a resposta não retorna com o texto minusculo.

b. i. true
  ii. true
 iii. true
*/

/*
1.
a)
function frase(){
  console.log("Eu sou Renan, tenho 25 anos, moro em São Paulo e sou estudante.");
}
*/

/*
b)
function frase(nome,idade,cidade, profissao){
  return `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`;
}
let fraseCompleta = frase("Laís", 23, "São Paulo","instrutora");
console.log(fraseCompleta);
*/

/*
2.
a)
function somarNumeros(x,y){
  return x + y;
}

let somaDosNumeros = somarNumeros(7,5);
console.log(somaDosNumeros);
*/
/*
b)
function verificaPrimeiroNumeroMaior(x,y){
  return x >= y;
}

let xMaiorQueY = verificaPrimeiroNumeroMaior(4,4);
console.log(xMaiorQueY)
*/

/*
c)
function verificaNumeroPar(x){
  return x % 2 === 0;
}

let numeroPar = verificaNumeroPar(11);
console.log(numeroPar);
*/

/*
d)
function fraseMaisculaETamanho(frase){
  console.log(frase.length)
  console.log(frase.toUpperCase())
}
let fraseCompleta = fraseMaisculaETamanho("Ola Mundo");
*/

/*
3
function somaDosNumeros(x,y){
  return x + y;
}

function subtracaoDosNumeros(x,y){
  return x - y;
}

function mutiplicacaoDosNumeros(x,y){
  return x * y;
}

function divisaoDosNumeros(x,y){
  return x / y;
}

let primeiroNumero = Number(prompt("Digite um numero"));
let segundoNumero = Number(prompt("Digite um numero"));

console.log(`Numeros escolhidos: ${primeiroNumero}, ${segundoNumero}`);
console.log(`Soma: ${somaDosNumeros(primeiroNumero,segundoNumero)}`);
console.log(`Diferença: ${subtracaoDosNumeros(primeiroNumero,segundoNumero)}`);
console.log(`Multiplicação: ${mutiplicacaoDosNumeros(primeiroNumero,segundoNumero)}`);
console.log(`Divisão: ${divisaoDosNumeros(primeiroNumero,segundoNumero)}`);
*/

/*
desafios
1.
const imprimir = (x) => {
  return console.log(x);
}
 
const soma = (x,y) => {
  resultado = x + y;
  imprimir(resultado);
}

soma(10,5);
*/

/*
2.
function teoremaDePitagoras(x,y) {
  return Math.sqrt((x*x) + (y*y));
}
console.log(`A hipotenusa é: ${teoremaDePitagoras(3,4)}`);
*/