import request from 'supertest';
import { app } from '../index.js';

describe('Testes das Rotas da API', () => {
    // afterAll(async () => {
    //     await server.close();
    // });

    // Teste para POST /produtos
    test('Deve criar um novo produto', async () => {
        const novoProduto = {
            nome: 'Produto Teste',
            preco: 19.99,
            descricao: 'Descrição do produto de teste'
        };

        const response = await request(app)
            .post('/produtos')
            .send(novoProduto);

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('id');
        expect(response.body.nome).toBe(novoProduto.nome);
    });

    // Teste para GET /produtos
    test('Deve listar todos os produtos', async () => {
        const response = await request(app).get('/produtos');

        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });

    // Teste para GET /produtos/:id
    test('Deve obter um produto específico', async () => {
        // Supondo que o ID 1 exista no banco de dados
        const produtoId = 1;

        const response = await request(app).get(`/produtos/${produtoId}`);

        expect(response.status).toBe(200);
        expect(response.body.produtoId).toBe(produtoId);
    });

    // Teste para PUT /produtos/:id
    test('Deve atualizar um produto existente', async () => {
        // Supondo que o ID 1 exista no banco de dados e vamos atualizar o nome
        const produtoId = 1;
        const novoNome = 'Novo Nome do Produto';

        const response = await request(app)
            .put(`/produtos/${produtoId}`)
            .send({ nome: novoNome });

        expect(response.status).toBe(200);
        expect(response.body.nome).toBe(novoNome);
    });

    // Teste para DELETE /produtos/:id
    test('Deve excluir um produto existente', async () => {
        // Supondo que o ID 1 exista no banco de dados
        const produtoId = 1;

        const response = await request(app).delete(`/produtos/${produtoId}`);

        expect(response.status).toBe(204);
    });
});
