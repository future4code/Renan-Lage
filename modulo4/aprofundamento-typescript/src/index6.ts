type Consulta = { nome: string, idade: number, dataDaConsulta: string }

const consultas: Consulta[] = [
 { nome: "João", idade: 23, dataDaConsulta: "01/10/2021" },
 { nome: "Pedro", idade: 31, dataDaConsulta: "02/07/2021" },
 { nome: "Paula", idade: 26, dataDaConsulta: "03/11/2021" },
 { nome: "Márcia", idade: 45, dataDaConsulta: "04/05/2021" }
]

function ordenaConsulta(consultas: Consulta[]) {
 const consultasOrdenadas: Consulta[] = consultas.sort(
  (a: Consulta, b: Consulta) => a.nome.toLowerCase().localeCompare(b.nome.toLowerCase())
 )
return consultasOrdenadas
}
console.table(ordenaConsulta(consultas))
