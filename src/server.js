const express = require('express');
const app = express();
const categoriesRoutes = require('./routes/categoriesRoutes.js')
const lancamentosRoutes = require('./routes/lancamentosRoutes.js')
const registerRoutes = require('./routes/registerRoutes.js')
const usersRoutes = require('./routes/usersRoutes.js')
const swaggerUi = require('swagger-ui-express'); 
const swaggerSpec = require('./config/swagger.js');
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
// Suas rotas normais:
app.use('/categorias', categoriesRoutes);
app.use('/lancamentos', lancamentosRoutes);
app.use('/register', registerRoutes);
app.use('/users', usersRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  console.log(`Swagger disponível em http://localhost:${PORT}/api-docs`);
});

module.exports = app;