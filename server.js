require('dotenv').config();
const express = require('express')

const app = express();
const controller = require('./src/backend/controller')
const path = require('path')
const PORT = process.env.PORT || 8000;

app.use(express.json());

if (process.env.NODE_ENV === "production") {

    app.use(express.static('build'));

    app.get('*', (req, res) => {
        req.sendFile(path.resolve(__dirname, 'build', 'index.html'))
    })
}

app.listen(PORT, (err) => {
    if (err) return console.log(err);
    console.log(`Listening on port: ${PORT}`)
})

app.get('/api/posts', controller.getAllPosts);

app.get('/api/posts/:id', controller.getPostsById);

app.get('/api/users', controller.getAllUsers);

app.post('/api/users/create', controller.createNewUser);

app.post('/api/posts/create', controller.createNewPost);

app.delete('/api/posts/:id', controller.deletePostById);

app.get('/api/singlepost/:id', controller.getSinglePostById)

app.patch('/api/posts/:id', controller.updatePostById);

app.patch('/api/users/update', controller.updateUserData);

app.delete('/api/users/delete/:id', controller.deleteUserById)

app.delete('/api/delete/allPosts/user/:id', controller.deleteAllUserPosts)

app.patch('/api/user/themesetting', controller.updateThemeSetting)


app.use((_, res) => {
    res.status(404)
    res.setHeader('Content-type', 'text/plain')
    res.send('Not Found')
})