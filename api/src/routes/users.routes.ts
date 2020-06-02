import { Router } from 'express';

const usersRouter = Router();

usersRouter.get('/', (request, response) => {
  return response.json({ message: 'Users route in construction' });
});

export default usersRouter;
