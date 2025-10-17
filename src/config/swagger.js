const swaggerJsdoc = require('swagger-jsdoc');
const path = require('path'); // ADICIONE ESTA LINHA

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Gerenciamento Financeiro',
      version: '1.0.0',
      description: 'API para gerenciamento de lançamentos financeiros, categorias, registros e usuários',
      contact: {
        name: 'Suporte API',
        email: 'suporte@exemplo.com'
      }
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Servidor de Desenvolvimento'
      }
    ],
    tags: [
      {
        name: 'Categorias',
        description: 'Gerenciamento de categorias'
      },
      {
        name: 'Lançamentos',
        description: 'Gerenciamento de lançamentos financeiros'
      },
      {
        name: 'Registros',
        description: 'Gerenciamento de registros'
      },
      {
        name: 'Usuários',
        description: 'Gerenciamento de usuários'
      }
    ]
  },
  // CORRIJA ESTE CAMINHO:
  apis: [path.join(__dirname, '../routes/*.js')] // Use caminho absoluto
};

const swaggerSpec = swaggerJsdoc(options);
module.exports = swaggerSpec