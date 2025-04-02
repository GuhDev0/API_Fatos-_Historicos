    const express = require('express');
    const app = express();

    let retornaMensagem = require('./retornaMensagem');

    app.get('/', (req, res)=>{
        let anoPostam = req.query.ano
        let fatoDoAno = retornaMensagem.frasesFiltradaPeloAno(anoPostam)
        let fatoDoAnojson = {FATO : fatoDoAno}
        res.json(fatoDoAnojson)
        
    })
    app.listen(8088, () =>{
        console.log("Servidor aberto")
    })