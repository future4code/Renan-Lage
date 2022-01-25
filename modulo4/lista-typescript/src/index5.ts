enum USERS {
 USER = "user",
 ADMIN = "admin",
}

type User = {
 name: string,
 email: string,
 role: USERS
}

const users: User[] = [
 { name: "Rogério", email: "roger@email.com", role: USERS.USER },
 { name: "Ademir", email: "ademir@email.com", role: USERS.ADMIN },
 { name: "Aline", email: "aline@email.com", role: USERS.USER },
 { name: "Jéssica", email: "jessica@email.com", role: USERS.USER },
 { name: "Adilson", email: "adilson@email.com", role: USERS.USER },
 { name: "Carina", email: "carina@email.com", role: USERS.ADMIN }
]

function pegaEmail(array: User[]) {
 let newArray: string[] = []
 array.filter((user:User)=>{
  if(user.role == USERS.ADMIN){
   newArray = [...newArray, user.email]
  }
 })
 return newArray
}

console.log(pegaEmail(users));
