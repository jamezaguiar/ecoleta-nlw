import express from 'express';
import { resolve } from 'path';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

app.use('/uploads', express.static(resolve(__dirname, '..', 'uploads')));

app.listen(3333, () => {
  console.log('🚀 Server started on port 3333!');
});
