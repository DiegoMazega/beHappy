import express from 'express';
import './database/connection';

const app = express();

//informa pro express que vamos usar Json
app.use(express.json());

//Rota = conjunto
//Recurso = users

//Métodos HTTP
//Parâmetros

/**
 * Parâmetros:
 * 
 * Query(que vem junto com a url da requisição): http://localhost:(a porta usada na sua aplicação/users?search=(valor do parametro na url)
 * no primeiro parametro do Query a gente usa o "?" após o fim da rota, para assim iniciar os parâmetros, após o primeiro precisamos usar o "&" para indicar que virá um novo parâmetro e assim até acabar os parâmetros.
 * 
 * Route(usado para indentificar um recurso pela url): http://localhost:(a porta usada na sua aplicação/1 -> indica que a informação que queremos será encontra com a rota '/1', geralmente indicando o ID do recurso.
 * 
 * body(não vão na url da requisição, e sim como um anexo a ela em seu corpo)
 */

app.get('/users', (request, response)=>{
    return response.json({message: "Hello World"})
});

app.listen(3333);