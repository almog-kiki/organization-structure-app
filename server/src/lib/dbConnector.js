const Sequelize = require("sequelize");
const db_config = require('../config/config.json')

establishDBConnection = async() => {
  env = process.env.NODE_ENV
  env_conf = db_config[env]
  
  const sequelize = new Sequelize(
   env_conf.database,
   env_conf.username,
   env_conf.password,
    {
      host: env_conf.host,
      dialect: env_conf.dialect
    }
  );


  try {
    await sequelize.authenticate();
    mainModule.utils.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

module.exports = {
  establishDBConnection: establishDBConnection
};