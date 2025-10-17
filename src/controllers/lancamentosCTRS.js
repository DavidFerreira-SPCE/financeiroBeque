const pool = require('../config/db.js');

const viewLancamentos = async (req,res) => {
    try {
        const show =  await pool.query('SELECT * FROM lancamentos')
        res.status(200).json(show.rows)
    } catch (err) {
        console.error('Falha na requisição', err)
        res.status(500).json({ error: 'Não foi possivel listar os lançamentos' })
    }
}

const viewLancamentosByCategory =  async (req,res) => {
    const { categoria_name } = req.query
    try {
        const show =  await pool.query('SELECT * FROM lancamentos WHERE categoria_name = $1', [categoria_name])
        res.status(200).json(show.rows)
    }catch (err) {
        console.error('Falha na requisição:', err);
        res.status(500).json({ error: 'Não foi possível listar os lançamentos' });
    }
}

const viewLancamentosByMonth = async(req,res) => {
    const {nome_mes} = req.query
    try {
        const search = await pool.query('SELECT * FROM lancamentos WHERE nome_mes = $1', [nome_mes])
        res.status(200).json(search.rows)
    } catch(err) {
         console.error('Falha na requisição:', err);
        res.status(500).json({ error: 'Não foi possível listar os lançamentos' });
    }
}

const AdicionarLancamento = async (req,res) => {
    const { registro_nome, categoria_name, descricao, nome_mes, valor,  data_lancamento } = req.body;
    if (!registro_nome ||!categoria_name || !descricao || !nome_mes || !valor || !data_lancamento) {
                return res.status(404).json({ error: 'Todos os campos são obrigatórios, Verifique os campos em branco' })
            }
    try {
        const novo = await pool.query(`INSERT INTO lancamentos (registro_nome, categoria_name, descricao, 
                          nome_mes, valor,  data_lancamento) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *`,
                        [registro_nome,categoria_name, descricao, nome_mes, valor, data_lancamento])
        res.status(200).json(novo.rows)
    } catch (err) {
        console.error('Erro na solicitação',err)
        res.status(500).json({error: 'Falha ao registrar o lançamento, verifique as informações e tente novamente'})
    }
}

const AtualizarLancamento = async (req, res) => {
    const { registro_nome, categoria_name, descricao, nome_mes, valor,  data_lancamento } = req.body;
    
        try { 
        const novo = await pool.query(`UPDATE lancamentos SET registro_nome = $1, categoria_name = $2, descricao = $3, nome_mes = $4,
             valor = $5, data_lancamento = $6 WHERE id = $7 RETURNING *`, [registro_nome, categoria_name, descricao, nome_mes, valor,
            data_lancamento, id]);
        res.status(200).json(novo.rows) 
    } catch (err) {
        console.error('Erro na requisição',err)
        res.status(500).json({error: 'Falha em adicionar novo lançamento'})
    }
}
module.exports = {viewLancamentos,viewLancamentosByCategory,viewLancamentosByMonth,AdicionarLancamento,AtualizarLancamento}