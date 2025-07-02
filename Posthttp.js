// const http =require('http');
// const server = http.createServer((req,res)=>{
//     if(req.method == 'POST' && req.url === '/submit'){
//     let body ="";

//     req.on('data',(chunk)=>{
//         body +=chunk.toString()
//     })
//     req.on('end',()=>{
//         res.writeHead(200,{'content-type':'application/json'})
//         res.end(JSON.stringify({message:'Data recived',data:body}))
//     })
// }
// else{
//     res.writeHead(404,{'content-type':'text/plain'})
//     res.end('route nout found')
// }
// const port=3000;
// server.listen(port,()=>{
//     console.log(`server is running on &{port}`);
// })
// })



const http = require('http');

const server = http.createServer((req, res) => {
    if (req.method === 'POST' && req.url === '/submit') {
        let body = "";

        req.on('data', (chunk) => {
            body += chunk.toString(); // Convert buffer to string
        });

        req.on('end', () => {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Data received', data: body }));
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Route not found');
    }
});

const port = 3001;
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
