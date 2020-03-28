const express = require('express'); 

const cors = require('cors')
// Colocando as funcionalidades do express dentro da variavel express
const routes = require('./routes')

const app = express();

app.use(cors())

app.use(express.json());
app.use(routes);

app.listen(3333); // localhost:333 acessa a appiclacao
