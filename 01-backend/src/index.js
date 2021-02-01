// Para visualiza um HELLO WORLD em tela
// Importando as variaves dentro doEXPRESS
const express = require('express');

const app = express();

//O  Primeiro parametro é project(rota do caminho) 2 é uma função que recebe dois parametros.
// A 1 é a requisão e a 2 é a resposta. E ela precisa retornar alguma coisa:
// Todo metodo da Rota GET ela precisa retornar RESPONSE pq é ele que vai dar a resposta para o FRONTEND
app.get('/projects', (request, response) => {
  return response.json({ message: 'Hello Elizabete' });
});

// Como acessar a aplicação pelo navegador? Precisa ouvir uma porta no navegador.
// Pelo localhost:3333 app é a variavel declarada (3333)É a porta.
app.listen(3333);
