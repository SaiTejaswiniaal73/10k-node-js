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

// const http=require("http")
// const server=http.createServer((req,res)=>{
//     res.write("welcome to node js this is my 1st server @tejasiwni")
//     res.end("response provided thank you")
// })
// server.listen("3101",()=>{
//     console.log("server loading this is my 1st server welcome")
// })

// https://one0k-node-js.onrender.com/
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



// 19/2/25

//we have to paste  http://localhost:3101/ this to get o.p in postman

//  Create a server
// const http=require("http")
// let obj={name:"teja",city:"hyd"}
// const server = http.createServer((req, res) => {
//     res.writeHead(201,"Welcome to tejaswimi",{
//         "content-type":"application/json"
//     });
//     res.write(JSON.stringify(obj))
//     res.end("");
// });

// server.listen("3101",()=>{
//     console.log("server loading this is my 1st server welcome")
// })

// const http=require("http")
// let obj={name:"teja",city:"hyd"}
// const server = http.createServer((req, res) => {
//     if(req=="GET"){
//         if(req.url="/home"){
//             res.writeHead(201,"Welcome to ./homepage",{"content-type":"application/json"});
//             res.write("welcoem to home page")
//             res.end("");

//         }
//         else if {res.writeHead(201,"Welcome to tejaswimi",{"content-type":"application/json"});
//         res.write(JSON.stringify(obj))
//         res.end("");
//     }

//     }
//     else{
//         res.end("invalid request")
//     }
// });

// server.listen("3101",()=>{
//     console.log("server loading this is my 1st server welcome")
// })

// const http = require("http");

// let obj = { name: "teja", city: "hyd" };

// const server = http.createServer((req, res) => {
//     if (req.method === "GET") {  // Corrected method check
//         if (req.url === "/home") {  // Fixed URL comparison
//             res.writeHead(200, { "Content-Type": "text/plain" });
//             res.end("Welcome to home page");
//         } else {
//             res.writeHead(200, { "Content-Type": "application/json" });
//             res.end("welcoem to a about");
//         }
//     } else {
//         res.writeHead(400, { "Content-Type": "text/plain" });
//         res.end("Invalid request");
//     }
// });

// server.listen(3101, () => {
//     console.log("Server running on port 3101");
// });


// const http = require("http");
// const url = require("url"); // Required for query parsing

// const server = http.createServer((req, res) => {
//     const parsedURL=url.parse(req.url,true)
    
//     console.log(parsedURL)
//     const tickets=parsedURL.query.tickets
    

//     if (req.method === "GET") {
//         if (parsedURL.pathname === "/CHAVVA") {
//             res.writeHead(200, { "Content-Type": "application/json" });
//             res.write(JSON.stringify({ MOVIE: "CHAVVA", SCREEN: "ONE" ,numberoftickets:tickets}));
//             res.end()
//         } else if (parsedURL.pathname=== "/THANDEL") {
//             res.writeHead(200, { "Content-Type": "application/json" });
//             res.write(JSON.stringify({ MOVIE: "THANDEL", SCREEN: "TWO",numberoftickets:tickets }));
//             res.end()
//         } else if (parsedURL.pathname === "/SKYFORCE") {
//             res.writeHead(200, { "Content-Type": "application/json" });
//             res.write(JSON.stringify({ MOVIE: "SKYFORCE", SCREEN: "THREE",numberoftickets:tickets }));
//             res.end()

//         } else {
//             res.writeHead(404, { "Content-Type": "application/json" });
//             res.write(JSON.stringify({ error: "Movie not found",numberoftickets:tickets }));
//             res.end()
//         }
//     } else if (parsedURL.pathname === "POST") {
//         res.writeHead(200, { "Content-Type": "text/plain" });
//         res.write("POST request received");
//     } else if (req.method === "PUT") {
//         res.writeHead(200, { "Content-Type": "text/plain" });
//         res.write("PUT request received");
//     } else if (req.method === "PATCH") {
//         res.writeHead(200, { "Content-Type": "text/plain" });
//         res.write("PATCH request received");
//     } else if (req.method === "DELETE") {
//         res.writeHead(200, { "Content-Type": "text/plain" });
//         res.write("DELETE request received");
//     } else {
//         res.writeHead(405, { "Content-Type": "text/plain" });
//         res.write("Method not allowed");
//     }
// });

// server.listen(3101, () => {
//     console.log("Server running on port 3101");
// });

// function demo(a){

// }
// demo(5)
   
// perfect right


// const { Console } = require("console");