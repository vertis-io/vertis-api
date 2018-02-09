import express from 'express';
import parser from 'body-parser';
import router from './routes';
import db from '../../RDS';

const app = express();
const PORT = process.env.PORT;
app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
app.use('/api', router);
app.listen(PORT, ()=> {
  console.log('Vertis-Rest is listening on PORT', PORT);
})