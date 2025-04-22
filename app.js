import express from 'express'

import usuariosRoutes from './routes/usuarios.js'

import fornecedoresRoutes from "./routes/fornecedores.js"

const app = express()
const port = 3000

//permitir ler JSON no corpo da requisição
app.use(express.json())
// Adicionar o roteador de usuarios
app.use("/usuarios",usuariosRoutes);
app.use("/fornecedores", fornecedoresRoutes)
//rota de inicio
app.get("/", (req, res) => {
  res.send('Bem vindo a minha API!')
})
//
app.listen(port, ()=>{
  console.log(`App escutando na  porta ${port}`)
})
