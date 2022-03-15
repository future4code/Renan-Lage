import app from "./app"
import signup from "./endpoints/signup"
import login from "./endpoints/login"
import createPost from "./endpoints/createPost"
import getPostsById from "./endpoints/getPostsById"
import getPosts from "./endpoints/getPosts"

app.post('/users/signup', signup)
app.post('/users/login', login)
app.post('/posts/create', createPost)
app.get('/posts/:id', getPostsById)
app.get('/posts', getPosts)
