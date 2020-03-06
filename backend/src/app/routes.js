import { Router } from 'express';

import formController from '../controllers/formController';

const routes = new Router();

routes.get('/form', formController.getAll);
routes.get('/form/:id', formController.getById);
routes.post('/form', formController.create);
routes.put('/form/:id',formController.update);
routes.delete('/form/:id',formController.delete);

export default routes;