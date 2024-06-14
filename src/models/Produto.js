
import { DataTypes, Sequelize } from 'sequelize';
import sequelize from '../config/database.js'

const Produto = sequelize.define('produtos', {
  produtoId:{
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
},
  codigo: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  descricao: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  preco: {
    type: Sequelize.FLOAT,
    allowNull: false,
    validate: {
      isFloat: true,
      min: 0,
    },
  },
},

 {
  sequelize, // Passa a instância do Sequelize
  modelName: 'Produto', // Nome do modelo na base de dados
  tableName: 'produtos' // Nome da tabela na base de dados
},

{
  timestamps: false,
});

//await Produto.sync({ force: true });
//console.log('The table for the User model was just (re)created!');

export default Produto
