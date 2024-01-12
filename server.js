let http=require('http');
let fs=require('fs');
let server=http.createServer((req,res)=>{
    let url=req.url
    const method=req.method;
    if(url==='/'){
        let exitsmsg=fs.readFileSync('dummy.txt','utf8')
        res.write('<html>')
        res.write('<head><title>Enter massage</title></head>')
       res.write(`<p>${exitsmsg}</p>`)
        res.write('<body><form action="/massage" method="POST"><input type="text" name="massege"><button type="submit">send</button></form></body>')
        res.write('</html>');
        
        return res.end()
    }
    if(url ==='/massage' && method === 'POST'){
        const body=[]
        req.on('data',(chunk)=>{
            body.push(chunk)
            //console.log(chunk)
        })
        req.on('end',()=>{
            const parsebody=Buffer.concat(body).toString();
            const massage=parsebody.split('=')[1]
            fs.writeFileSync('dummy.txt',massage);
            
           
            
        })
        
        res.statusCode = 302;
        res.setHeader('location','/')
        return res.end()
    }

})
server.listen(9000,()=>{
    console.log("server is on")
})