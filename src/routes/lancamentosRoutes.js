const express = require('express')
const router = express.Router();
const {viewLancamentos,viewLancamentosByCategory,viewLancamentosByMonth,AdicionarLancamento,AtualizarLancamento} = require('./../controllers/lancamentosCTRS');

router.get('/',viewLancamentos)
router.get('/',viewLancamentosByCategory)
router.get('/',viewLancamentosByMonth)
router.post('/',AdicionarLancamento)
router.put('/',AtualizarLancamento)


/**
 * @swagger
 * components:
 *   schemas:
 *     Lancamento:
 *       type: object
 *       required:
 *         - registro_nome
 *         - categoria_name
 *         - descricao
 *         - nome_mes
 *         - valor
 *         - data_lancamento
 *       properties:
 *         id:
 *           type: integer
 *           description: ID do lançamento
 *         registro_nome:
 *           type: string
 *           description: Nome do registro
 *         categoria_name:
 *           type: string
 *           description: Nome da categoria
 *         descricao:
 *           type: string
 *           description: Descrição do lançamento
 *         nome_mes:
 *           type: string
 *           description: Nome do mês
 *         valor:
 *           type: number
 *           description: Valor do lançamento
 *         data_lancamento:
 *           type: string
 *           format: date
 *           description: Data do lançamento
 *       example:
 *         registro_nome: Compra Supermercado
 *         categoria_name: Alimentação
 *         descricao: Compras mensais
 *         nome_mes: Janeiro
 *         valor: 450.50
 *         data_lancamento: 2025-01-15
 */

/**
 * @swagger
 * /lancamentos:
 *   get:
 *     summary: Lista todos os lançamentos
 *     tags: [Lançamentos]
 *     responses:
 *       200:
 *         description: Lista de lançamentos retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Lancamento'
 *       500:
 *         description: Erro ao listar os lançamentos
 */
router.get('/', viewLancamentos)

/**
 * @swagger
 * /lancamentos/categoria:
 *   get:
 *     summary: Lista lançamentos por categoria
 *     tags: [Lançamentos]
 *     parameters:
 *       - in: query
 *         name: categoria_name
 *         schema:
 *           type: string
 *         required: true
 *         description: Nome da categoria para filtrar
 *     responses:
 *       200:
 *         description: Lançamentos da categoria retornados com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Lancamento'
 *       500:
 *         description: Erro ao listar os lançamentos
 */
router.get('/categoria', viewLancamentosByCategory)

/**
 * @swagger
 * /lancamentos/mes:
 *   get:
 *     summary: Lista lançamentos por mês
 *     tags: [Lançamentos]
 *     parameters:
 *       - in: query
 *         name: nome_mes
 *         schema:
 *           type: string
 *         required: true
 *         description: Nome do mês para filtrar
 *     responses:
 *       200:
 *         description: Lançamentos do mês retornados com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Lancamento'
 *       500:
 *         description: Erro ao listar os lançamentos
 */
router.get('/mes', viewLancamentosByMonth)

/**
 * @swagger
 * /lancamentos:
 *   post:
 *     summary: Adiciona um novo lançamento
 *     tags: [Lançamentos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Lancamento'
 *     responses:
 *       200:
 *         description: Lançamento criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Lancamento'
 *       404:
 *         description: Campos obrigatórios não preenchidos
 *       500:
 *         description: Erro ao registrar o lançamento
 */
router.post('/', AdicionarLancamento)

/**
 * @swagger
 * /lancamentos/{id}:
 *   put:
 *     summary: Atualiza um lançamento existente
 *     tags: [Lançamentos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do lançamento a ser atualizado
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Lancamento'
 *     responses:
 *       200:
 *         description: Lançamento atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Lancamento'
 *       500:
 *         description: Erro ao atualizar o lançamento
 */
router.put('/:id', AtualizarLancamento)


module.exports = router
