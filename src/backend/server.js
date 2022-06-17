require('dotenv').config();
const express = require('express')
const app = express();
const controller = require('./controller')

const PORT = process.env.PORT;

app.use(express.static('public'));
app.use(express.json())

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})

app.get('/api/posts', controller.getAllPosts);

app.get('/api/posts/:id', controller.getPostById);

app.get('/api/users', controller.getAllUsers)

app.use((_, res) => {
    res.status(404)
    res.setHeader('Content-type', 'text/plain')
    res.send('Not Found')
})