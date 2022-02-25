const http = require('http')
var fs = require('fs')


const openJson = ()=>{
    return fs.readFileSync("test.json","utf-8",(err)=>{
        console.log(err);
    })
}
const server = http.createServer(async (req,res)=>{
    if(req.url==='/getall' && req.method==='GET'){
        var data = await openJson()
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end((data))
    } else{
        res.writeHead(404, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ message: 'Route not found!' }))
    }
    
})

const PORT = 8000

server.listen(PORT,()=>{
    console.log(`Server listening on ${PORT}!`)
})



