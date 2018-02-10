import  jwt from 'jsonwebtoken';
import User from '../../../RDS/models/Users';

const APP_SECRET = process.env.APP_SECRET;

const jwtVerifyMiddleware = (req, res, next) => {
  let token = req.headers.authorization;
  let username = req.username
  if(token) {
    jwt.verify(token, APP_SECRET, (err, decoded) => {
      if(err) {
        res.sendStatus(403);
      } else {
        User.find({where: { username }})
          .then((data) => {
            if(data){
              req.user = data;
                console.log(next);
                next()
            } else {
              res.sendStatus(404);
            }
          })
          .catch((err)=> {
            console.log(err);
            res.sendStatus(500);
          })
      }
    })
  } else {
    res.sendStatus(403);
  }
}

const jwtVerify = (req, res) => {
  let token = req.headers.authorization;
  let username = req.username
  if(token) {
    jwt.verify(token, APP_SECRET, (err, decoded) => {
      if(err) {
        res.sendStatus(403);
      } else {
        User.find({where: { username }})
          .then((data) => {
              res.send(200);
            })
          .catch((err)=> {
            console.log(err);
            res.sendStatus(500);
          })
      }
    })
  } else {
    res.sendStatus(403);
  }
}

export { jwtVerify, jwtVerifyMiddleware};