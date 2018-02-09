import db from '../db';
import Sequelize from 'sequelize';

const User = db.define('user', {
  username: Sequelize.STRING,
  password: Sequelize.STRING
});

export default User;
