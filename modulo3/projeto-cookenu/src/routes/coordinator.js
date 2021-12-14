export function goToLogin(history) {
 history('/login')
}

export function goToSignUp(history) {
 history('/cadastro')
}

export function goToRecipesList(history) {
 history('/')
}

export function goToAddRecipe(history) {
 history('/adicionar-receita')
}

export function goToRecipeDetails(history, id) {
 history(`/detalhe/${id}`)
}
