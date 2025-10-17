const pool = require('../config/db.js');

const MostrarCategorias = async (_, res) => {
    try {
        const category = await pool.query('SELECT * FROM categories')
        res.status(200).json(category.rows)
    } catch (err) {
        console.error('Falha em exibir as categorias',err)
        res.status(500).json({ error: 'Não foi possivel visualizar as categorias' })
    }
}

const CriarCategorias = async (req, res) => {
    const { id, name } = req.body;
    try {
        const registrar = await pool.query('INSERT INTO categories (id, name) VALUES ($1, $2) RETURNING *',
            [id, name])

         if (!isNaN(parseInt(name))) {
         return res.status(400).json({ message: 'Por favor, digite a categoria somente utilizando letras.' });
    }
         res.status(200).json(registrar.rows)
    } catch (err) {
        console.error('Problema ao criar a categoria no banco',err)
        res.status(500).json({ error: 'Falha na criação da categoria' })
    }
}

const ApagarCategorias = async (req,res) => {
    const { id } = req.body
    try {
         const refresh = await pool.query('DELETE * FROM categories WHERE id = $1 RETURNING *', [id])
        res.status(200).json(refresh.rows)
    } catch(err) {
        console.error('Falha em apagar a categoria',err)
        res.status(500).json({ error: 'Não foi possivel excluir a categoria' })
    }
}

module.exports = {MostrarCategorias,CriarCategorias,ApagarCategorias}
