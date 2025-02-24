
// 24/2/25

const http = require("http");
const url=require("url")
const fs = require("fs");
const path=require("path")

console.log(path.join(__dirname,"hii.js"))

const server=http.createServer((req,res)=>{
  fs.mkdir(path.join(__dirname,"one","two"),{recursive:true},()=>{
    res.end("created folder")

  })
 

})
server.listen(3105, () => {
  console.log("Server running on port 3105");
});

