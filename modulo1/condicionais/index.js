/*
1.
a)
O código recebe um numero do usuário, e faz uma divisão desse numero por dois.
E retorna a sobra dessa divisão, se ela for zero, caso seja um numero par, ele passará no teste.
Se essa sobra for um, caso seja ímpar, ela não passará no teste. 

b)
Para os numero pares.

c)
Para os numeros ímpares.

*/

/*
2.
a)
O código serve para receber uma fruta, tipo string, do usuário, e confere a partr de algumas frutas do sistema.
E o sistema retora a fruta com seu preço, se não tiver no sitema ele retorna com o valor 5.

b)
O preço da fruta Maça é 2.25

c)
O preço da fruta  Pêra  é  R$  5.5
*/

/*
3.
a)
A primeira linha está pedindo para usuário digitar um numero e está convertendo ele para tipo Number.

b)
Se colocarmos 10, no console vai mostrar:
Esse número passou no teste
uncaught error

se colocarmos -10, no console vai mostrar:
uncaught error

c)
Vai dar no console.log(mensagens), pois não irá encontrar mensagens, pois foi definida dentro da scopo da função,
e não na global.

E vai dar erro no -10, pois o js não indentifica o - na frente do numero como negativo.

*/
/*
1.
let idade = Number(prompt("Qual a sua idade?"));

if (idade >= 18){
  console.log("Você pode dirigir!");
}else{
  console.log("Você não pode dirigir!");
}
*/

/*
2.
let turno = prompt("Quak o seu turno? M, V ou N").toUpperCase();
console.log(turno);

if(turno === "M") {
  console.log("Bom dia");
}
if(turno === "V") {
  console.log("Boa tarde");
}
if(turno === "N") {
  console.log("Boa Noite");
}else{
  console.log("Digito errado");
}
*/

/*
3.
let turno = prompt("Quak o seu turno? M, V ou N").toUpperCase();
let saudacoes
console.log(turno);

switch(turno) {
  case "M":
   saudacoes = "Bom dia"
   break;
  case "V":
    saudacoes = "Boa tarde"
    break;
  case "N":
    saudacoes = "Boa Noite"
   break;
  default:
  saudacoes = "Digito errado."
}
console.log(saudacoes);
*/

/*
4.
const generoDoFilme = prompt("Qual o genero do Filme?").toUpperCase();
const valorDoIngresso = Number(prompt("Qual o valor do ingresso?"));

console.log(generoDoFilme);
console.log(valorDoIngresso);

if(generoDoFilme === "FANTASIA" && valorDoIngresso <= 15){
  console.log("Bom filme!");
}else{
  console.log("Escolha outro filme :C");
}
*/

/*
Desafios
1.
const generoDoFilme = prompt("Qual o genero do Filme?").toUpperCase();
const valorDoIngresso = Number(prompt("Qual o valor do ingresso?"));

console.log(generoDoFilme);
console.log(valorDoIngresso);

if(generoDoFilme === "FANTASIA" && valorDoIngresso <= 15){
  lanche = prompt("Qual lanche vai levar para o filme?")
  console.log("Bom filme!");
  console.log(`Aproveite seu ${lanche}`);
}else{
  console.log("Escolha outro filme :C");
}
*/

/*
2.
const nomeSobrenome = prompt("Qual o seu nome completo?");
const tipoDoJogo = prompt("Qual o tipo do jogo? IN indica internacional; e DO indica doméstico").toUpperCase();
const etapaDoJogo = prompt("Qual a etapa do jogo? SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final").toUpperCase();
const categoria = Number(prompt("Qual a etapa? 1 a 4"));
const quantidadeDeJogos = Number(prompt("Quantos ingressos?"));

let tipoDoJogoCompleto = "";
let etapaDoJogoCompleto = "";
let valorDoIngresso = 0; 
let totalDoValor = 0;

console.log(nomeSobrenome);
console.log(tipoDoJogo);
console.log(etapaDoJogo);
console.log(categoria);
console.log(quantidadeDeJogos);
// tipo de jogo
if(tipoDoJogo === "DO"){
  tipoDoJogoCompleto = "Nacional";
}
if(tipoDoJogo === "IN"){
  tipoDoJogoCompleto = "Internacional";
}
// etapa de jogo
if(etapaDoJogo === "SF"){
 etapaDoJogoCompleto = "Semi final";
}
if(etapaDoJogo === "DT"){
 etapaDoJogoCompleto = "Disputa de 3º colocação";
}
if(etapaDoJogo === "FI"){
  etapaDoJogoCompleto = "Final";
}
// semi final
if(etapaDoJogo === "SF" && categoria === 1){
 valorDoIngresso ="1320";
}
if(etapaDoJogo === "SF" && categoria === 2){
 valorDoIngresso ="880";
}
if(etapaDoJogo === "SF" && categoria === 3){
 valorDoIngresso ="550";
}
if(etapaDoJogo === "SF" && categoria === 4){
 valorDoIngresso ="220";
}
// 3 lugar
if(etapaDoJogo === "DT" && categoria === 1){
 valorDoIngresso ="660";
}
if(etapaDoJogo === "DT" && categoria === 2){
 valorDoIngresso ="440";
}
if(etapaDoJogo === "DT" && categoria === 3){
 valorDoIngresso ="330";
}
if(etapaDoJogo === "DT" && categoria === 4){
 valorDoIngresso ="170";
}
// final
if(etapaDoJogo === "FI" && categoria === 1){
 valorDoIngresso ="1980";
}
if(etapaDoJogo === "FI" && categoria === 2){
 valorDoIngresso ="1320";
}
if(etapaDoJogo === "FI" && categoria === 3){
 valorDoIngresso ="880";
}
if(etapaDoJogo === "FI" && categoria === 4){
 valorDoIngresso ="330";
}
// jogos intercionais
if(tipoDoJogo === "DO"){
 valorDoIngresso
}
if(tipoDoJogo === "IN"){
 valorDoIngresso * 4.1;
}else{
  console.log("Algo deu errado!/reveja os dados")
  valorDoIngresso = undefined
}

// // algo deu errado
// if((tipoDoJogo !== "DO" || "FI") || (etapaDoJogo !== "SF" || "DT" || "FI") || (1 < categoria > 4)) {
// console.log("Algo de errado!");

// }
console.log(valorDoIngresso);

totalDoValor = valorDoIngresso*quantidadeDeJogos;

function fazANota(nomeSobrenome,tipoDoJogoCompleto,etapaDoJogoCompleto,categoria,quantidadeDeJogos,valorDoIngresso,totalDoValor){
  console.log(`
  ---Dados da compra--- 
Nome do cliente:  ${nomeSobrenome} 
Tipo do jogo:  ${tipoDoJogoCompleto}
Etapa do jogo:  ${etapaDoJogoCompleto}
Categoria:  ${categoria}
Quantidade de Ingressos:  ${quantidadeDeJogos} ingressos 
---Valores--- 
Valor do ingresso: ${valorDoIngresso}
Valor total:  R$ ${totalDoValor},00

  `)
}
fazANota(nomeSobrenome,tipoDoJogoCompleto,etapaDoJogoCompleto,categoria,quantidadeDeJogos,valorDoIngresso,totalDoValor);  
*/