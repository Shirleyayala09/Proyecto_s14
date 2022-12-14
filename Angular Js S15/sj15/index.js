const express =require('express')

const app = express();
const port = 3000;

app.get ('/',(req,res)=>{
    res.setHeader('Content-type','text/plain');
    res.send('Hello word');
})

app.listen(port, ()=>{
    console.log(`Servidor ejecutandose en http://localhost:${port}`);
    console.log('5+8='+ (5+8));
})