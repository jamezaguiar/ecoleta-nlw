import { Router } from 'express';

import PointsController from '../controllers/PointsController';

const pointsRouter = Router();

pointsRouter.post('/', PointsController.create);

pointsRouter.get('/', PointsController.index);

pointsRouter.get('/:id', PointsController.show);

export default pointsRouter;
