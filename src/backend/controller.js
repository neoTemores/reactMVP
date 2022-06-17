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
module.exports = {
    getAllPosts,
    getPostById,
    getAllUsers
}