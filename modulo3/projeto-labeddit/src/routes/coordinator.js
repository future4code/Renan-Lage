export const goToLogin = (history) => {
 history("/login")
}

export const goToSignUp = (history) => {
 history("/cadastro")
}

export const goToPost = (history, id) => {
 history(`/post/${id}`)
}

export const goToFeed = (history) => {
 history("/")
}