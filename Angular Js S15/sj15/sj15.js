const http =require('http')

const hostname='127.0.0.1';
const port = 3000;

const server= http.createServer((req,res)=>{
    res.end('Shirley Katheryne Ayala Chilon')
})

server.listen(port,hostname,() => {
    console.log(`Servidor ejecutandose en http://${hostname}:${port}/`);

});