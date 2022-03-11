import app from "./app"
import editUser from './endpoints/editUser'
import createUser from './endpoints/createUser'
import login from "./endpoints/login"
import { HashManager } from "./services/HashManager"


app.post('/users/signup', createUser)
app.post('/users/login',login)
app.put('/users', editUser)


// const cypherText = new HashManager().createHash("laranja")
// const cypherText1 = new HashManager().createHash("laranja")

// console.log("cypherText", cypherText)
// console.log("cypherText1", cypherText1)

// hashFinal -> $2a$12$E6E.p/fSpfHVIt/bjTtdjOg8wiCQC3qxr43uElYtdBkL1.lflE..S
// string aleatória -> E6E.p/fSpfHVIt/bjTtdjO
// algoritmo -> $2a$
// cost -> 12$
// salt -> $2a$12$E6E.p/fSpfHVIt/bjTtdjO
// codigo encriptado -> g8wiCQC3qxr43uElYtdBkL1.lflE..S

// hashFinal do mesmo valor inicial -> $2a$12$bCb5ZZ4eUZfFMsDH1W6kvu3B1GHoYfu/H8b68NsWPHClF8WBdPpyS

// Comparação
// const passwordIsCorrect = new HashManager().compareHash("acerola", "$2a$12$bCb5ZZ4eUZfFMsDH1W6kvu3B1GHoYfu/H8b68NsWPHClF8WBdPpyS")
// console.log("isTrue", passwordIsCorrect)
