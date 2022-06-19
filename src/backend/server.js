require('dotenv').config();
const express = require('express')
// const request = require('request');

const app = express();
const controller = require('./controller')

const PORT = process.env.PORT;

app.use(express.static('public'));
app.use(express.json());

// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });



app.listen(PORT, () => {
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

app.use((_, res) => {
    res.status(404)
    res.setHeader('Content-type', 'text/plain')
    res.send('Not Found')
})