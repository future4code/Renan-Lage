```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  // Escreva seu código aqui
  let arrayOcorrencias = []
  let resposta = ""
  for(let i=0; i < arrayDeNumeros.length; i++){
    if(arrayDeNumeros[i] == numeroEscolhido){
      arrayOcorrencias.push(arrayDeNumeros[i])
    }
  }
  
  if(arrayOcorrencias.length > 0){
    resposta = `O número ${numeroEscolhido} aparece ${arrayOcorrencias.length}x`
  }else{
    resposta = "Número não encontrado"
  }
  return resposta
}
```