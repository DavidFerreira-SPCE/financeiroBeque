const pool = require('../config/db.js');

const ViewAllUsers = async (req,res) => {
    try {
        const show = await pool.query('SELECT * FROM users')
        res.status(200).json(show.rows)
    } catch (err) {
        console.error('Falha na requisição', err)
        res.status(500).json({ error: 'Não foi possivel listar os usuários' })
    }
}

const ViewUserByID = async (req,res) => {
    const { id } = req.params
        if (!id || isNaN(parseInt(id))) {
        return res.status(400).json({ error: 'ID de usuário inválido.' });
    }
    try {
        const show = await pool.query('SELECT * FROM users WHERE id = $1',[id])
        res.status(200).json(show.rows)
    } catch (err) {
        console.error('Falha na requisição', err)
        res.status(500).json({ error: 'Não foi possivel listar o usuário' })
    }
}

const CreateNewUser = async (req,res) => {
    const [username, usermail, userpassword] = req.body
    try {
        const adicionar = await pool.query('INSERT INTO users (username, usermail, userpassword) VALUES ($1, $2, $3) RETURNING *'
            [username,usermail,userpassword])
        res.status(200).json(adicionar.rows)
    } catch (err) {
        console.error('Falha na requisição', err)
        res.status(500).json({ error: 'Não foi possivel listar o usuário' })
    }
}

const UpdateUser = async (req, res) => {
    const { id } = req.params;
    const { username, usermail } = req.body;
    try {
        const requistion = await pool.query(
            `UPDATE users SET name = $1, mail = $2 WHERE id = $3 RETURNING *`,
            [username, usermail, id]
        );
        res.status(200).json(requistion.rows[0]);
    } catch (err) {
        console.error('Failed to change user informations', err);
        res.status(500).json({ error: 'Failed to update the data about user' });
    }
}

const DeleteUser = async(req,res) => {
    const {id} = req.body
    try {
        const apagar = await pool.query('DELETE * FROM users WHERE id = $1 RETURNING *', [id])
        res.status(200).json(apagar.rows)
    } catch (err) {
        console.error('Falha na requisição', err)
        res.status(500).json({ error: 'Não foi possivel excluir o usuário' })
    }
}

module.exports= {ViewAllUsers,ViewUserByID,CreateNewUser,UpdateUser,DeleteUser}