const express = require('express')
const router = express.Router();
const {ViewAllUsers,ViewUserByID,CreateNewUser,UpdateUser,DeleteUser} = require('./../controllers/usersCTRS')

router.get('/',ViewAllUsers)
router.get('/',ViewUserByID)
router.post('/',CreateNewUser)
router.put('/',UpdateUser)
router.delete('/',DeleteUser)


/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - username
 *         - usermail
 *         - userpassword
 *       properties:
 *         id:
 *           type: integer
 *           description: ID do usuário
 *         username:
 *           type: string
 *           description: Nome do usuário
 *         usermail:
 *           type: string
 *           format: email
 *           description: Email do usuário
 *         userpassword:
 *           type: string
 *           format: password
 *           description: Senha do usuário
 *       example:
 *         username: João Silva
 *         usermail: joao@exemplo.com
 *         userpassword: senha123
 */

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Lista todos os usuários
 *     tags: [Usuários]
 *     responses:
 *       200:
 *         description: Lista de usuários retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *       500:
 *         description: Erro ao listar os usuários
 */
router.get('/', ViewAllUsers)

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Busca um usuário por ID
 *     tags: [Usuários]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do usuário
 *     responses:
 *       200:
 *         description: Usuário encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         description: ID inválido
 *       500:
 *         description: Erro ao buscar o usuário
 */
router.get('/:id', ViewUserByID)

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Cria um novo usuário
 *     tags: [Usuários]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: Usuário criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       500:
 *         description: Erro ao criar o usuário
 */
router.post('/', CreateNewUser)

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Atualiza um usuário existente
 *     tags: [Usuários]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do usuário a ser atualizado
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               usermail:
 *                 type: string
 *                 format: email
 *     responses:
 *       200:
 *         description: Usuário atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       500:
 *         description: Erro ao atualizar o usuário
 */
router.put('/:id', UpdateUser)

/**
 * @swagger
 * /users:
 *   delete:
 *     summary: Deleta um usuário
 *     tags: [Usuários]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id
 *             properties:
 *               id:
 *                 type: integer
 *                 description: ID do usuário a ser excluído
 *             example:
 *               id: 1
 *     responses:
 *       200:
 *         description: Usuário excluído com sucesso
 *       500:
 *         description: Erro ao excluir o usuário
 */
router.delete('/', DeleteUser)

module.exports = router