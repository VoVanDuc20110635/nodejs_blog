const http = require('http');
const server = http.createServer((req, res)=>{
    console.log('run request ...');
    res.setHeader('Content-Type', 'text/html');
    res.write('<h3>Hello world</h3>');
    res.write('<h2>from Eric & HOi dan IT</h2>')
    res.end();
})

server.listen(3030, 'localhost', () =>{
    console.log('Node.js server is running on port: 3030');
})