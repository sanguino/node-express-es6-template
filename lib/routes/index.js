import { Router } from 'express';
import validate from 'express-validation';
import ExampleController from '../controllers/ExampleController';
import { checkBody, checkId } from '../validators/validateRequest';

function getRoutes() {
  const routes = Router();
  routes.get('/', ExampleController.getAll);
  routes.get('/:id', validate(checkId), ExampleController.getSingleThing);
  routes.post('/:id', [validate(checkId), validate(checkBody)], ExampleController.postThing);
  return routes;
}

export default getRoutes();
