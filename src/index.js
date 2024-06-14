import express from 'express'
import Produto from './models/Produto.js';

import 'dotenv/config'

const app = express();

//winston logs
// const {combine, timestamp, label, printf } = winston.format

// const myFormat = printf(({level, message, label, timestamp})=> {
//     return `${timestamp} [${label}] ${level}: ${message}`
// })

// global.logger = winston.createLogger({
//     level: 'silly',
//     transports: [
//         new(winston.transports.Console)(),
//         new (winston.transports.File)({filename: 'logs/logs.log' })
//     ],
//     format: combine(
//         label({label: 'produtos-api'}),
//         timestamp(),
//         myFormat
//     )
// })


app.use(express.json());



// app.get('/', (req, res) => {
//     res.send('teste')
// })

// Create
app.post('/produtos', async (req, res) => {
    try {
      const produto = await Produto.create(req.body);
      res.status(201).json(produto);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  
  // Read all
  app.get('/produtos', async (req, res) => {
    try {
      const produtos = await Produto.findAll();
      res.status(200).json(produtos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Read one
  app.get('/produtos/:id', async (req, res) => {
    try {
      const produto = await Produto.findByPk(req.params.id);
      if (produto) {
        res.status(200).json(produto);
      } else {
        res.status(404).json({ error: 'Produto não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Update
  app.put('/produtos/:id', async (req, res) => {
    try {
      const produto = await Produto.findByPk(req.params.id);
      if (produto) {
        await produto.update(req.body);
        res.status(200).json(produto);
      } else {
        res.status(404).json({ error: 'Produto não encontrado' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  
  // Delete
  app.delete('/produtos/:id', async (req, res) => {
    try {
      const produto = await Produto.findByPk(req.params.id);
      if (produto) {
        await produto.destroy();
        res.status(204).end();
      } else {
        res.status(404).json({ error: 'Produto não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });



  const server = async () => {
    try {
      await sequelize.sync();
      const server = app.listen(process.env.PORT, () => {
        console.log(`Servidor rodando na porta ${process.env.PORT}`);
      });
      return server;
    } catch (error) {
      console.error('Erro ao conectar com o banco de dados:', error);
      throw error; // Rejeita a promessa para que o erro possa ser capturado ao importar
    }
  };
  

//  sequelize.sync().then(() => {
//    app.listen(process.env.PORT, () => {
//      console.log(`Servidor rodando na porta ${process.env.PORT}`);
   
//    });
//  }).catch(error => {
//    console.error('Erro ao conectar com o banco de dados:', error);
//  });

//   const server = app.listen(process.env.PORT, () => {
//       console.log(`Servidor rodando na porta ${process.env.PORT}`);    
//     });

  export  {app, server} 

