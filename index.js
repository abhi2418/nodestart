const http = require('http');
const server = http.createServer((req,res)=>{
    console.log(req);
    res.write('Welcome thanos');
    // res.write(req);
    res.end();

})

server.listen(8080)