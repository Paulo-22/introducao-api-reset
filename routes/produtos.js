import express from "express";

const routes = express.Router();

const produtos = [
    { id: 1, nome: "Monitor", preco: 2.399 },
    { id: 2, nome: "Placa de video", preco: 4.800 },
    { id: 3, nome: "Memória RAM", preco: 300.00 }
];

routes.get("/produtos", (req, res) => {
    res.status(200).json(produtos);
});

routes.post("/produtos", (req, res) => {
    const { nome, preco } = req.body;
    const novoProduto = {
        id: produtos.length > 0 ? produtos[produtos.length - 1].id + 1 : 1,
        nome: nome,
        preco: preco
    };
    produtos.push(novoProduto);
    res.status(201).json(produtos);
});
routes.get("/produtos/:id", (req, res) => {
    const { id } = req.params;
    
    const produto = produtos.find((produto) => produto.id == parseInt(id));
    
    if (!produto) {
        return res.status(404).json({ mensagem: "Produto não encontrado!" });
    }
    
    res.status(200).json(produto);})

routes.put("/produtos/:id", (req, res) => {
    const { id } = req.params;
    const { novoNome, novoPreco } = req.body;

    const indice = produtos.findIndex((produto) => {
        return produto.id == id;
    });

    if (indice === -1) {
        return res.status(404).json({ mensagem: "Produto não encontrado!" });
    }

    produtos[indice].nome = novoNome;
    produtos[indice].preco = novoPreco;

    res.status(200).json(produtos);
});

routes.delete("/produtos/:id", (req, res) => {
    const { id } = req.params;

    const index = produtos.findIndex((produto) => {
        return produto.id == parseInt(id);
    });
    
    if (index === -1) {
        return res.status(404).json({ mensagem: "Produto não encontrado!" });
    }
    
    produtos.splice(index, 1);
    res.status(200).json(produtos);
});

export default routes;