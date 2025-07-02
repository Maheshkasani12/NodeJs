//create basic server

const http =require('http');
const { text } = require('stream/consumers');
const server=http.createServer((req,res)=>{
    if(req.method ==='GET' && req.url === '/'){
        res.writeHead(200,{'content-type':'text/plain'})
        res.end('welcome to the home page')
    }
    else{
        res.writeHead(404,{'content-type':'text/plain'})
        res.end('page not found');
    }


})

const port =3000;
server.listen(port,()=>{
    console.log(`server is runnong on http port number is : ${port}`);
})