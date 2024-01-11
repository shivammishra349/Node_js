let http=require("http");
let server=http.createServer((req,res)=>{
    res.end("shivam")
})

server.listen(4000);
