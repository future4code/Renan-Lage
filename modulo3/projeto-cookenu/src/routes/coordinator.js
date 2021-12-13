export default function goToLogin(history) {
 history.push('/login')
}

export default function goToSignUp(history) {
 history.push('/cadastro')
}

export default function goToRecipesList(history) {
 history.push('/')
}

export default function goToAddRecipe(history) {
 history.push('/adicionar-receita')
}

export default function goToRecipeDetails(history) {
 history.push(`/detalhe/${id}`)
}
