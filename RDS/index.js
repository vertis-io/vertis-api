import db from './db'
import User from './models/Users.js';

db.authenticate()
  .then(()=>{
    console.log('Successfully connected to Vertis RDS');
    User.sync({force: true})
      .then(() => {
        console.log("Users table sync'd")
      })
      .catch((err)=> {
        console.log(err);
      })
  })

export default db;
