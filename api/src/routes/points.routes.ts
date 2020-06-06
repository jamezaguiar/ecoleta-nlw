import { Router } from 'express';

import multer from 'multer';
import multerConfig from '../config/multer';

import PointsController from '../controllers/PointsController';

const pointsRouter = Router();
const upload = multer(multerConfig);

pointsRouter.post('/', upload.single('image'), PointsController.create);

pointsRouter.get('/', PointsController.index);

pointsRouter.get('/:id', PointsController.show);

export default pointsRouter;
