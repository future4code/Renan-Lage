// b1) tsc && node build/index4.js

// b2) tsc && node ./build/index4.js
// a unica diferença seria o ./ antes de build.

//  c) Com o comando tsc direto na pasta que está o package.json
// podemos tranpilar todos os arquivos de uma vez


type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}