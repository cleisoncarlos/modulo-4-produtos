import Sequelize from 'sequelize';

import dotenv from 'dotenv';
dotenv.config();


// const sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USERNAME, process.env.DATABASE_PASSWORD, {
//   host: process.env.DATABASE_HOST,
//   dialect: 'postgres',
// });


// Converter os valores para string explicitamente
const databaseName = String(process.env.DATABASE_NAME);
const databaseUsername = String(process.env.DATABASE_USERNAME);
const databasePassword = String(process.env.DATABASE_PASSWORD);
const databaseHost = String(process.env.DATABASE_HOST);

const sequelize = new Sequelize(databaseName, databaseUsername, databasePassword, {
  host: databaseHost,
  dialect: 'postgres',
 /// port: databasePort,
});


// Test connection and log errors
// sequelize.authenticate()
//   .then(() => {
//     console.log('Conexão realizada com sucesso.');
//   })
//   .catch(err => {
//     console.error(`Erro ao conectar com o banco de dados: ${err.message}`);
//     });

export default sequelize
