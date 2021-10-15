/*
1.
o código é um loop de somas, valor + i, e i vai aumentando até 4. Ordem das somas
valor + i = "novo valor"
0 + 0 = 0
0 + 1 = 1
1 + 2 = 3
3 + 3 = 6
6 + 4 = 10
10 resultado final que aparece no console.
*/ 

/*
2.
a)
 19
 21
 23
 25
 27
 30
b)
Sim, pode ser feito um outro for.. of.. para retornar o os valores.

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista){
  if (numero <= 18){
  console.log(numero > 18);
  }
}
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero > 18);
	}
}
*/

/*
3.
*
**
***
****
O esperado seria isso, pois o codigo faz um while para criar a linha e um for para colocar o * igual ao numero digitado.
*/
/*
1.
let quantidadePets = Number(prompt("Quantos animais você tem?"));
let bichinhos = []

if (quantidadePets == 0){
  console.log("Que pena! Você pode adotar um pet!");
}
if (quantidadePets > 0) {
  for(let i=0; i < quantidadePets; i ++){
    bichinhos.push(prompt("Qual o nome de cada um?"));
  }
  console.log(bichinhos);
}
*/
/*
2.

let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
a
let i = 0;

while(i < arrayOriginal.length){
  console.log(arrayOriginal[i]);
  i++
}

b
let arrayDivisaoDez = [];
for(let i=0; i < arrayOriginal.length; i++) {
  arrayDivisaoDez.push(arrayOriginal[i] / 10);
  console.log(arrayDivisaoDez[i])
}

c
let arrayPar = [];
for(let numero of arrayOriginal){
  if((numero % 2) == 0){
    arrayPar.push(numero);
    console.log(numero)
  }
}
console.log(arrayPar)

d
let arrayString = [];

for(let i=0; i < arrayOriginal.length; i++){
  arrayString.push(`O elemento do índex ${i} é: ${arrayOriginal[i]}`)
  console.log(arrayString[i]);
}
console.log(arrayString);

e
let maiorNumero = 0;
for(let i=0; i < arrayOriginal.length; i++){
  if (arrayOriginal[i] > maiorNumero){
    maiorNumero = arrayOriginal[i];
  }else{
   maiorNumero;
  }
}
console.log(maiorNumero);

let menorNumero = 800;
for(let i=0; i < arrayOriginal.length; i++){
  if (arrayOriginal[i] < menorNumero){
    menorNumero = arrayOriginal[i];
  }else{
    menorNumero ;
  }
}
console.log(menorNumero);
*/

/*
desafios
1.
const numeroEscolhido = Number(prompt("Escolha um numero"));
let numeroChutado = [];


// funçoes

function comparaMaior(numeroChutado,numeroEscolhido){
  if(numeroChutado > numeroEscolhido){
    console.log("O número chutado foi: ", numeroChutado);
    console.log("Errrrrrrrou, é menor");
  }
  if(numeroChutado < numeroEscolhido){
    console.log("O número chutado foi: ", numeroChutado);
    console.log("Errrrrrrrou, é maior");
  }
}
function chutarNumero(){
  numero = Number(prompt("Chute um numero"));
  numeroChutado.push(numero);
}


// programa começa aqui!
console.log("Vamos jogar!");
chutarNumero();
for (let i=0; i < numeroChutado.length; i++){
  if(numeroChutado[i] != numeroEscolhido){
    comparaMaior(numeroChutado[i],numeroEscolhido);    
    chutarNumero();
  }
  if(numeroChutado[i] == numeroEscolhido){
    console.log("Acertou!!");
    console.log("O número de tentativas foi: ", numeroChutado.length);
  }
}
*/

/*
2
const numeroEscolhido = Math.floor(Math.random() * 100);
let numeroChutado = [];


// funçoes

function comparaMaior(numeroChutado,numeroEscolhido){
  if(numeroChutado > numeroEscolhido){
    console.log("O número chutado foi: ", numeroChutado);
    console.log("Errrrrrrrou, é menor");
  }
  if(numeroChutado < numeroEscolhido){
    console.log("O número chutado foi: ", numeroChutado);
    console.log("Errrrrrrrou, é maior");
  }
}
function chutarNumero(){
  numero = Number(prompt("Chute um numero"));
  numeroChutado.push(numero);
}


// programa começa aqui!
console.log("Vamos jogar!");
chutarNumero();
for (let i=0; i < numeroChutado.length; i++){
  if(numeroChutado[i] != numeroEscolhido){
    comparaMaior(numeroChutado[i],numeroEscolhido);    
    chutarNumero();
  }
  if(numeroChutado[i] == numeroEscolhido){
    console.log(numeroEscolhido);
    console.log("Acertou!!");
    console.log("O número de tentativas foi: ", numeroChutado.length);
  }
}

Foi bem facil mudar esse código para o numero ser aleatório. Eu procurei no google como sortear um numero js.
http://devfuria.com.br/javascript/numeros-aleatorios/
Achei essa página, e eles falam sobre math.random, e que esse comando sortea numero entre 0 a 1.
Usando junto com math.floor, ele teria as casa decimais, mas para isso ele fala para multiplicar por 10, para sortear entre 0 a 9.
Eu tive a ideia de pultiplicar por 100 para ele sortear de 0 a 99. Não achei uma solução que possa adicionar o 100 ainda, preciso pensar mais.
*/