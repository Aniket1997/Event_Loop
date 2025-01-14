const http = require('http');

const PORT = 9000;
const server = http.createServer((req,res)=>{
    res.write("Hello");
    res.end();
});

server.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`)
})