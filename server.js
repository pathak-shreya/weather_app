const http=require("http");
const fs=require("fs");
var requests=require("requests");


const homefile=fs.readFileSync("index.html","utf-8");

const server=http.createServer((req,res)=>{
        if(req.url=="/"){
 requests("http://api.openweathermap.org/data/2.5/weather?q=Pune&appid=6da1fca3910e849efa3d69194e85246b")
.on("data",(chunk)=>{
    const objdata=JSON.parse(chunk);
    const arrdata=[objdata];
    console.log(objdata);

}).on("end",(err)=>{
    if(err) return console.log("connection closed",err);
 
     console.log(end);
});
        }
});

server.listen(8000,'127.0.0.1');