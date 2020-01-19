const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');

const routes = require('./routes');
const { setupWebsocket } = require('./websocket');

const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect('mongodb+srv://lucasdavisan:WostwYHNJECxACn6@cluster0-wkrat.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(cors());
app.use(express.json());
app.use(routes);

// Métodos HTTP: GET, POST, PUT e DELETE

// Tipos de parâmetros:
// Query params: req.query (Filtros, ordenação, paginação, ...), 
// Route Params:req.params (Identinficar um recurso na alteração ou remoção),
// Body: req.body (Dados para a criação ou alteração de um registro).

server.listen(3333);