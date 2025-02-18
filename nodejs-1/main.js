// const obj=require("./module1")
// console.log(obj.fun1())
// console.log(obj.x)
// const{fun1,x}=require("./module1")
// const{cal}=require("./module2")
// console.log("i am main module")
// console.log(fun1())
// let a=5
// let b=3
// console.log(cal(a,b))
// console.log(x)
// use strict
// a=45
// console.log(a)
// const data=require("./data.json")
// console.log(data)


// 18-2-25

const http=require("http")
const server=http.createServer((req,res)=>{
    res.write("welcome to node js this is my 1st server @tejasiwni")
    res.end("response provided thank you")
})
server.listen("3101",()=>{
    console.log("server loading this is my 1st server welcome")
})
// http://localhost:3101/
//192.168.1.3-this is your ip address
// Import the HTTP module
// const http = require("http");

// // Create a server
// const server = http.createServer((req, res) => {
//     res.write("Welcome to Node.js");
//     res.end(" Response provided");
// });

// // Start the server on Port 3101 and IP 192.168.1.3
// server.listen(3101, "192.168.1.3", () => {
//     console.log("Server loading at http://192.168.1.3:3101");
// });
//https://github.com/SaiTejaswiniaal73/10k-node-js