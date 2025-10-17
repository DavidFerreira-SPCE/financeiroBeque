const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

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
  apis: ['./routes/*.js', './controllers/*.js']
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = { swaggerUi, swaggerSpec };