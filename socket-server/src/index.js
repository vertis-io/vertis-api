import express from 'express';
const PORT = process.env.PORT;
const app = express();

app.listen(PORT, ()=> {
  console.log('Vertis-Socket is listening on PORT:', PORT);
})