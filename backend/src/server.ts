import express from 'express';
import path from 'path';
import cors from 'cors';
import 'express-async-errors';
import routes from './routes';
import './database/connection';
import errorhandler from './errors/hanlder';

const app = express();
/*Utilização do Cors, podemos passar valores de origem para mostar quais rotas serão de livre acesso pelo frontend */
app.use(cors());
//informa pro express que vamos usar Json
app.use(express.json());
app.use(routes);
// Para poder acessar a url das imagens de cada orfanato
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
//tratamento de erro, trocamos a mensagem por uma mais amigavel para o usuário
app.use(errorhandler);

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


app.listen(3333);