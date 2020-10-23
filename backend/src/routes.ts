import { Router } from 'express';
import OrphanageController from './controllers/OrphanageController'; 

const routes = Router();

/*Padrão MVC

Model - entidades
View - visualização 
Controllers - regras de negocio, tais como validações
*/

routes.get('/orphanages', OrphanageController.index);
routes.get('/orphanages/:id', OrphanageController.show);
routes.post('/orphanages', OrphanageController.create);

export default routes; 