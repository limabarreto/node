const express = require('express');
const sequelize = require('./database');
const handlebars = require('express-handlebars');

app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', handlebars)


require('./models/User');
require('./models/Note');

const app = express();
app.use(express.json());

sequelize.sync({ alter: true }) // mantém dados, ajusta tabelas
  .then(() => console.log('Tabelas sincronizadas!'))
  .catch(err => console.error(err));

app.listen(3000, () => console.log('API rodando na porta 3000'));
