function frase(nome: string, data: string) {
 let newData = data.split('/')
return `Olá me chamo ${nome}, nasci no dia ${newData[0]} do mês de ${newData[1]} do ano de ${newData[2]}`
}

let nome:string = process.argv[2]
let data:string = process.argv[3]

console.log(frase(nome,data));
