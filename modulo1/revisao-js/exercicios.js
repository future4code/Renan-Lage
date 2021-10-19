// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
// return arrayInvertido = array.reverse();
 let arrayInvertido = [];
 for(i=1; i<= array.length; i++){
   arrayInvertido.push(array[array.length - i])
 }
 return arrayInvertido
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  return arrayOrdenado = array.sort(function(a,b){
    return a - b;
  });
}
// EXERCÍCIO 04
function retornaNumerosPares(array) {
  let novaArray= [];
  for(let numeros of array){
    if(numeros % 2 == 0){
      novaArray.push(numeros);
    }
  }
  return novaArray;
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  let novaArray= [];
  for(let numeros of array){
    if(numeros % 2 == 0){
      novaArray.push(numeros * numeros);
    }
  }
  return novaArray;
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let numero = -Infinity;
  for(let i=0;i<array.length;i++){
    if(array[i] > numero){
      numero = array[i]
    }
  }
  return numero
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
  const objeto = {};
  let maiorNumero
  let menorNumero
  let maiorDivisivelPorMenor = false
  let diferenca

  if(num1 >= num2){
    maiorNumero = num1
    menorNumero = num2
  } else if(num2 > num1){
    maiorNumero = num2
    menorNumero = num1
  }

  if(maiorNumero % menorNumero === 0){
    maiorDivisivelPorMenor = true
  }else{
    maiorDivisivelPorMenor = false
  }

  if (maiorNumero - menorNumero === null){
    diferenca = 0
  } else{
    diferenca = maiorNumero - menorNumero
  }

  objeto.maiorNumero = maiorNumero
  objeto.maiorDivisivelPorMenor = maiorDivisivelPorMenor
  objeto.diferenca = diferenca
  return objeto
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
  let arrayPares =[]
  for(i=0; i <n; i++){
    arrayPares.push(2 * i)
  }
   return arrayPares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
  let triangulo
  if(ladoA == ladoB && ladoB == ladoC && ladoA == ladoC){
    triangulo = "Equilátero"
  } else if(ladoA != ladoB && ladoB != ladoC && ladoA != ladoC){
    triangulo = "Escaleno"
  } else{
    triangulo = "Isósceles"
  }
  return triangulo
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  array.sort((a,b) => a-b)
  novaArray = [array[array.length-2],array[1]]
  return novaArray
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
  let atoresDoFilme = []
   for(i=0;i<filme.atores.length;i++){
      atoresDoFilme[i] = " " + filme.atores[i] 
   }

   return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${atoresDoFilme}.`

 }
// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   let objetoAnonimo = {...pessoa, nome: "ANÔNIMO"}
   return objetoAnonimo
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
  let pessoasAutorizadas = []
  for(i=0;i< pessoas.length; i++){
     if((pessoas[i].altura >= 1.5 ) && pessoas[i].idade < 60 && pessoas[i].idade > 14){
       pessoasAutorizadas.push(pessoas[i])
     }
   }
   return pessoasAutorizadas
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  let pessoasNaoAutorizadas = []
  for(i=0;i<pessoas.length;i++){
    if(pessoas[i].altura < 1.5 || pessoas[i].idade >= 60 || pessoas[i].idade <= 14){
      pessoasNaoAutorizadas.push(pessoas[i])
    }
  }
  return pessoasNaoAutorizadas
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
  totalDeCompras = [];
  function somaNumeros(numeros) {
    let soma = 0;
    for(let i = 0 ; i < numeros.length ; i++) {
      soma += numeros[i]
     } return soma
  }
  for(i=0;i<contas.length;i++){
    totalDeCompras.push(somaNumeros(contas[i].compras))
  }
  for(i=0;i<contas.length;i++){
    contas[i].saldoTotal -= totalDeCompras[i];
    contas[i].compras = []
  }
  return contas
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  return consultas.sort(function(objA,objB) {
    a = objA.nome.toLowerCase().replace(/[àáâãäå]/,"a").replace(/[èéêë]/,"e").replace(/[ìíîï]/,"i").replace(/[òóôõö]/,"o").replace(/[ùúûü]/,"u").replace(/[ç]/,"c").replace(/[^a-z0-9]/gi,'')
    b = objB.nome.toLowerCase().replace(/[àáâãäå]/,"a").replace(/[èéêë]/,"e").replace(/[ìíîï]/,"i").replace(/[òóôõö]/,"o").replace(/[ùúûü]/,"u").replace(/[ç]/,"c").replace(/[^a-z0-9]/gi,'')
    return a < b ? -1 : a > b ? 1 : 0;
  })
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
 for(i=0;i<consultas.length;i++){
  consultas[i].dataDaConsulta.split('/', 2)
 }
 return consultas
}