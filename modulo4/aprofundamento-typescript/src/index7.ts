enum Historia {
 PREHISTORIA = "pré-história",
 IDADEANTIGA = "Idade Antiga",
 IDADEMEDIA = "Idade Média",
 IDADEMODERNA = "Idade Moderna",
 IDADECOMTEPORANEA = "Idade conteporânea",
 NAOACONTECEU = "Ainda entamos em 2022"
}


const ano: number = Number(process.argv[2])
const sigla: string = process.argv[3]

function descobreEpoca(ano: number, sigla: string) {
 let idade: Historia | undefined
 if (sigla == 'Ac' || sigla == "ac" || sigla == "AC") {
  if (ano > 4000) {
   idade = Historia.PREHISTORIA
  } else {
   idade = Historia.IDADEANTIGA
  }
 } else {
  if (ano <= 476) {
   idade = Historia.IDADEANTIGA
  } else if (476 < ano && ano <= 1453) {
   idade = Historia.IDADEMEDIA
  } else if (1453 < ano && ano <= 1789) {
   idade = Historia.IDADEMODERNA
  } else if (1789 < ano && ano < 2022) {
   idade = Historia.IDADECOMTEPORANEA
  } else if (ano > 2022) {
   idade = Historia.NAOACONTECEU
  }
 }
 return idade
}

console.log(descobreEpoca(ano, sigla))