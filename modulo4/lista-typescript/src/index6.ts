type Cliente = {
 cliente: string,
 saldoTotal: number,
 debitos: number[]
}

let clientes: Cliente[] = [
 { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
 { cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
 { cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
 { cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
 { cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
 { cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

function pegaCaloteiros(array: Cliente[]) {
 let newArray: Cliente[] = []
 array.map((cliente: Cliente) => {
  let saldoDb: number
  cliente.debitos.length > 0 ?
   saldoDb = cliente.debitos.reduce((a: number, b: number) => { return a + b })
   :
   saldoDb = 0

  if (saldoDb > cliente.saldoTotal) {
   newArray = [...newArray, cliente]
  }
 })
 return newArray
}

console.log(pegaCaloteiros(clientes));