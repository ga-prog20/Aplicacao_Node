import express from 'express';
const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.send("Está funcionando 3");
});

app.listen(port, function(){
    console.log(`O Express está rodando na porta ${port}`);
 });