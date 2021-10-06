/*
1.
a. false
b. false
c. true
d. boolean
*/

/*
2.O problema no código é que o resultado de uma prompt é uma string, ou campo de texto.
Entao quando há uma soma de duas strings o programa entende como concatenação, que seria a junção das duas.
Por exemplo, se fosse colocado no primeiro numero 10 e no segundo 5, ficaria 105 e nao 15 como o esperado.
*/

/*
3.
let primeiroNumero = Number(prompt("Digite um numero!"));
let segundoNumero = Number(prompt("Digite outro numero!"));

const soma = primeiroNumero + segundoNumero;

console.log(soma);
*/

/*
1.
let suaIdade = Number(prompt("Qual a sua idade?"));
let amigoIdade = Number(prompt("Qual a idade do seu melhor amigo ou amiga"));
let diferençaIdade = suaIdade - amigoIdade;
let suaIdadeEMaior = diferençaIdade > 0;

console.log("Sua idade é maior que a do seu amigo?", suaIdadeEMaior);
console.log(diferençaIdade);
*/

/*
2.
let numero = Number(prompt("Insira um numero par"));
let restoDivisao = numero % 2;

console.log(restoDivisao);

Quando é colocado numeros pares, o resultado sempre é 0.
Quando é colocado numeros impares, o resultado sempre é 1.
*/

/*
3.
let suaIdade = Number(prompt("Sua idade"));

let idadeMeses = suaIdade * 12;
let idadeDias = suaIdade * 365;
let idadeHoras = idadeDias * 24;

console.log("Sua idade em meses é", idadeMeses);
console.log("Sua idade em dias é", idadeDias);
console.log("Sua idade em horas é", idadeHoras);
*/
/*
4.

let primeiroNumero = Number(prompt("Digite um numero"));
let segundoNumero = Number(prompt("Digite um numero"));

let primeiroNumeroMaior = primeiroNumero > segundoNumero;

let primeiroNumeroIgual = primeiroNumero === segundoNumero;

let primeiroNumeroDivsao = primeiroNumero % segundoNumero;
let primeiroNumeroDivisivel= primeiroNumeroDivsao === 0;

let segundoNumeroDivsao = segundoNumero % primeiroNumero;
let segundoNumeroDivisivel = segundoNumeroDivsao ===0;

console.log(primeiroNumero, segundoNumero);
console.log("O primeiro numero é maior que segundo?", primeiroNumeroMaior);
console.log("O primeiro numero é igual ao segundo?", primeiroNumeroIgual);
console.log("O primeiro numero é divisível pelo segundo?", primeiroNumeroDivisivel);
console.log("O segundo numero é divisível pelo primeiro?", segundoNumeroDivisivel);
*/

let primeiroNumero = 77;
let primeiroNumeroConvertido = (primeiroNumero - 273.15) * 9 / 5 + 32;
console.log("77K convertido", primeiroNumeroConvertido + "ºF");

let segundoNumero = 80; 
let segundoNumeroConvertido = segundoNumero * (9 / 5) + 32; 
console.log("80ºC convertidos", segundoNumeroConvertido + "ºF");

let terceiroNumero = 30;

let terceiroNumeroConvertidoF = terceiroNumero * (9 / 5) + 32;
let terceiroNumeroConvertidok = terceiroNumero +  273.15;

console.log("30ºC convertidos", terceiroNumeroConvertidoF + "ºF");
console.log("30ºC convertidos", terceiroNumeroConvertidok + "K");

let usuarioNumero = Number(prompt("Adicione uma temperatura em ºC"));

let usuarioNumeroConvertidoF = usuarioNumero * (9 / 5) + 32;
let usuarioNumeroConvertidoK = usuarioNumero + 273.15;

console.log(usuarioNumero + "ºC convertido em", usuarioNumeroConvertidoF + "ºF");
console.log(usuarioNumero + "ºC convertido em", usuarioNumeroConvertidoK + "K");