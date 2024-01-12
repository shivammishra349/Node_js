let http=require('http');
let server=http.createServer((req,res)=>{
    let url=req.url
    
    if(url==='/home'){
        return res.end('welcome to home')
    }
    if(url==='/about'){
        return res.end('wlcome to about us page')
    }
    if(url==='/node'){
        return res.end('Welcome to my Node Js project')
    }
    res.end('welcome to my node js project')
})
server.listen(9000,()=>{
    console.log("server is on")
})