

function checaRenovacaoRG(nas: string, emis: string) {
 let newNas: string[] = nas.split("/")
 let newEmis:string[] = nas.split("/")
 let timeNas:number = new Date(Number(newNas[2]),Number(newNas[1]),Number(newNas[0])).getTime()
 let timeEmis:number = new Date(Number(newEmis[2]),Number(newEmis[1]),Number(newEmis[0])).getTime()

 
}

let dataNasc: string = process.argv[2]
let dataEmis: string = process.argv[3]
