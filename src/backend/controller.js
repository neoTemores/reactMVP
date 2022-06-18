const pool = require('./connection');

const getAllPosts = async (_, res) => {
    try {
        let client = await pool.connect();
        let data = await client.query('SELECT * FROM posts');
        res.json(data.rows)
        client.release();

    } catch (error) {
        console.log(error)
        res.send(error)
    }
}

const getPostById = async (req, res) => {
    let id = req.params.id
    try {

        let client = await pool.connect();
        let data = await client.query(`SELECT * FROM posts where post_id = $1`, [id]);
        res.json(data.rows);
        client.release();

    } catch (error) {
        console.log(error)
        res.send(error)
    }
}

const getAllUsers = async (_, res) => {
    try {
        let client = await pool.connect();
        let data = await client.query('SELECT * FROM users')
        res.json(data.rows)
        client.release()

    } catch (error) {
        console.log(error)
        res.send(error)
    }
}

//! figure out cors issues
const createNewUser = async (req, res) => {
    let firstName = req.body.First_Name
    let lastName = req.body.Last_Name
    let userName = req.body.userName
    let email = req.body.email
    let password = req.body.password

    try {
        let client = await pool.connect();
        let data = await client.query('INSERT INTO users (first_name, last_name, user_name, email, password, darktheme) VALUES($1, $2, $3, $4, $5, $6);', [firstName, lastName, userName, email, password, false])
        res.json(req.body)
        client.release()
    } catch (error) {
        console.error(error);
        res.send(error)
    }
}

module.exports = {
    getAllPosts,
    getPostById,
    getAllUsers,
    createNewUser
}