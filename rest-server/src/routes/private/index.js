import express from 'express'

const private_router = express.Router();

private_router.get('/', (req, res) => {
  res.send(200);
})


export default private_router;