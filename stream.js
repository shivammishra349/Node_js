let fs=require('fs');
let http=require('http');

let server=http.createServer((req,res)=>{
    // fs.readFile("hello.txt",(err,data)=>{
    //     if(err) return console.log(err);
    //     res.end(data.toString())
    // })

        const rstream=fs.createReadStream('hello.txt');
        rstream.on('data',(chunks)=>{
            res.write(chunks)
        })
        rstream.on(end,()=>{
            res.end()
        })
})
server.listen(8000,()=>{
    console.log("server start")
})