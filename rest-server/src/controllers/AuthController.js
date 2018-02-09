import User from '../../../RDS/models/Users';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS);
const APP_SECRET = process.env.APP_SECRET;

const auth_controller = {
  SignUp: (req, res) => {
    bcrypt.hash(req.body.password, SALT_ROUNDS, (err, password) => {
      let username = req.body.username;
      User.create({
        username,
        password
      })
        .then(()=>{
          console.log('inserted a user');
          res.sendStatus(201);
        })
        .catch((err) => {
          console.log(err);
          res.sendStatus(500);
        })
    });
  },
  Login: (req, res) => {
    let username = req.body.username;
    let plaintext = req.body.password;
    User.findOne({where: {username}})
      .then((data) => {
        if(!data){
          res.sendStatus(404);
        } else {
          let password = data.password;
          bcrypt.compare(plaintext, password, (err, success) => {
            console.log(err, success);
            if(err){
              res.sendStatus(500);
            } else if (success) {
              jwt.sign({ username }, APP_SECRET, { expiresIn: 5 * 60 }, function(err, token) {
                if(err){
                  res.sendStatus(500);
                } else {
                  res.send(token);
                }
              });
              
            } else {
              res.sendStatus(403);
            }
          });
        }
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(500);
      })
  },
  List: (req, res) => {
    User.findAll()
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(500);
      })
  }
}

export default auth_controller;