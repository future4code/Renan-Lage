```
function calculaNota(ex, p1, p2) {
  // Escreva seu código aqui
  let nota = (ex / 6) + ((p1*2)/6) + ((p2*3)/6)
  let conceito = "";
  if(nota >=9){
    conceito = "A"
  } else if(9 > nota && nota >= 7.5){
    conceito = "B"
  }else if(7.5 > nota && nota >= 6){
    conceito = "C"
  }else{
    conceito = "D"
  }
  return conceito
}
```