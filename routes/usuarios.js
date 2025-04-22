import express from 'express'

const router = express.Router();
//Banco de dados Fake (Em memória)
const usuarios = [
    {id: 1, nome: 'Pedro', email: "Pedro@gmail.com"},
    {id: 2, nome: 'Caio', email: "Caio@gmail.com"}
  ]
//rota criar usuario
router.get("/usuarios", (req, res) => {
    res.send(usuarios);
    })
//
router.post("/criarUsuario", (req, res) => {
    const { nome, email } = req.body;
  
    const novoUsuario = {
        id: usuarios[usuarios.length-1].id + 1,
        nome: nome,
        email: email
    }
  
    usuarios.push(novoUsuario)
  
    res.send(usuarios)})
//
  router.put("/usuario/:id", (req, res)=>{
    const { id } = req.params
    const {novoNome, novoEmail} = req.body
  
    const indice = usuarios.findIndex((usuario)=>{
        return usuario.id == id
  })
   //
  if(indice === -1){
   return res.status(404).json(
    {mensagem:"Usuario não encontrado!"})
  }
    usuarios[indice].nome = novoNome
    usuarios[indice].email = novoEmail
  
    res.send(usuarios)
  
    })
router.delete("/usuarios/:id", (req, res)=>{
    //const id = req.params.id
    const { id } = req.params
  
    const index = usuarios.findIndex((usuario)=>{
        return usuario.id == parseInt(id)
    })
  
    if (index === -1) {
        res.status(404).json({mensagem:"Usuário não encontrado!"})
    }else{
        usuarios.splice(index, 1)
        res.send(usuarios)
    }

    })

export default router