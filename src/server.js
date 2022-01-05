const porta = 3030

const bancoDeDados = require('./database')

const express = require('express')
const app = express()

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

// lista de todos os produtos
app.get('/produtos', (req, res) => {
    res.send(bancoDeDados.getProdutos())
})

// get de um produto especifico
app.get('/produtos/:id', (req, res) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

// adicionar um novo produto
app.post('/produtos', (req, res) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco,
    })
    res.send(produto)
})

// atualizar produto ja existente
app.put('/produtos/:id', (req, res) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco,
        id: req.params.id
    })
    res.send(produto)
})

// deletar produto
app.delete('/produtos/:id', (req, res) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto)
})

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}`)
})
