import { Router } from 'express';

import ItemsController from '../controllers/ItemsController';

const itemsRouter = Router();

itemsRouter.get('/', ItemsController.index);

export default itemsRouter;
