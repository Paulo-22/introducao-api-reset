

const express = require('express')
const app = express()
const port = 3000

//permitir ler JSON no corpo da requisição
app.use(express.json())

//Banco de dados Fake (Em memória)

const usuarios = [
  {id: 1, nome: 'Pedro', email: "Pedro@gmail.com"},
  {id: 2, nome: 'Caio', email: "Caio@gmail.com"}
]


app.get("/", (req, res) => {
  res.send('Bem vindo a minha API!')
})

app.get("/usuarios", (req, res) => {
  res.send(usuarios);
})

app.post("/criarUsuario", (req, res) => {
  const {nome, sobrenome } = req.body;
  res.send(`nome: ${nome} | Sobrenome: ${sobrenome}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})