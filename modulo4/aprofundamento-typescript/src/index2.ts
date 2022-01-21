// a) Essa função entra um array de numeros,
// e retorna um objeto com maior, menor e media, todos numeros 

// b) a e b, dentro da função sort são numeros, 
// soma é um numero.



type Numeros = number[]
type Estastisticas = { maior: number, menor: number, media: number }

function obterEstatisticas(numeros: Numeros) {

 const numerosOrdenados: Numeros = numeros.sort(
  (a: number, b: number) => a - b
 )

 let soma: number = 0

 for (let num of numeros) {
  soma += num
 }

 const estatisticas: Estastisticas = {
  maior: numerosOrdenados[numeros.length - 1],
  menor: numerosOrdenados[0],
  media: soma / numeros.length
 }

 return estatisticas
}

type AmostraDeIdades = {
 numeros: number[],
 obterEstatisticas: (numeros: number[]) => {
  maior: number,
  menor: number,
  media: number
 }
}

const amostraDeIdades:AmostraDeIdades = {

 numeros: [21, 18, 65, 44, 15, 18],

 obterEstatisticas: obterEstatisticas
}

console.log(amostraDeIdades.obterEstatisticas(amostraDeIdades.numeros))