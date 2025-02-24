// ---------------------------------------16-2-25----------------------------------------------------

// https://one0k-node-js.onrender.com/
// http://localhost:3101/

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

// ---------------------------------------17-2-25----------------------------------------------------

// js rivison
// ---------------------------------------18-2-25----------------------------------------------------

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


// const http = require("http");
// const url = require("url"); // Required for query parsing

// const server = http.createServer((req, res) => {
//   const parsedURL = url.parse(req.url, true);

//   console.log(parsedURL);
//   const tickets = parsedURL.query.tickets;

//   if (req.method === "GET") {
//     if (parsedURL.pathname === "/CHAVVA") {
//       res.writeHead(200, { "Content-Type": "application/json" });
//       res.write(
//         JSON.stringify({
//           MOVIE: "CHAVVA",
//           SCREEN: "ONE",
//           numberoftickets: tickets,
//         })
//       );
//       res.end();
//     } else if (parsedURL.pathname === "/THANDEL") {
//       res.writeHead(200, { "Content-Type": "application/json" });
//       res.write(
//         JSON.stringify({
//           MOVIE: "THANDEL",
//           SCREEN: "TWO",
//           numberoftickets: tickets,
//         })
//       );
//       res.end();
//     } else if (parsedURL.pathname === "/SKYFORCE") {
//       res.writeHead(200, { "Content-Type": "application/json" });
//       res.write(
//         JSON.stringify({
//           MOVIE: "SKYFORCE",
//           SCREEN: "THREE",
//           numberoftickets: tickets,
//         })
//       );
//       res.end();
//     } else {
//       res.writeHead(404, { "Content-Type": "application/json" });
//       res.write(
//         JSON.stringify({ error: "Movie not found", numberoftickets: tickets })
//       );
//       res.end();
//     }
//   } else if (parsedURL.pathname === "POST") {
//     res.end();
//   } else if (req.method === "PUT") {
//     res.end();
//   } else if (req.method === "PATCH") {
//     res.end();
//   } else if (req.method === "DELETE") {
//     res.end();
//   } else {
//     res.end();
//   }
// });

// server.listen(3101, () => {
//   console.log("Server running on port 3101");
// });

// function demo(a) {}
// demo(5);


// ---------------------------------------19-2-25----------------------------------------------------

// /we have to paste  http://localhost:3101/ this to get o.p in postman

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

// /const http = require("http");
// const url = require("url"); // Required for query parsing

// const server = http.createServer((req, res) => {
//   const parsedURL = url.parse(req.url, true);

//   console.log(parsedURL);
//   const tickets = parsedURL.query.tickets;

// //   console.log("write or slect the dish sweet or hot in website")
//   if (req.method === "GET") {
//     if (parsedURL.pathname === "/CHAVVA") {
//       res.writeHead(200, { "Content-Type": "application/json" });
//       res.write(
//         JSON.stringify({
//           MOVIE: "CHAVVA",
//           SCREEN: "ONE",
//           numberoftickets: tickets,
//         })
//       );
//       res.end();
//     } else if (parsedURL.pathname === "/THANDEL") {
//       res.writeHead(200, { "Content-Type": "application/json" });
//       res.write(
//         JSON.stringify({
//           MOVIE: "THANDEL",
//           SCREEN: "TWO",
//           numberoftickets: tickets,
//         })
//       );
//       res.end();
//     } else if (parsedURL.pathname === "/SKYFORCE") {
//       res.writeHead(200, { "Content-Type": "application/json" });
//       res.write(
//         JSON.stringify({
//           MOVIE: "SKYFORCE",
//           SCREEN: "THREE",
//           numberoftickets: tickets,
//         })
//       );
//       res.end();
//     } else {
//       res.writeHead(404, { "Content-Type": "application/json" });
//       res.write(
//         JSON.stringify({ error: "Movie not found", numberoftickets: tickets })
//       );
//       res.end();
//     }
//   } else if (parsedURL.pathname === "POST") {
//     res.end();
//   } else if (req.method === "PUT") {
//     res.end();
//   } else if (req.method === "PATCH") {
//     res.end();
//   } else if (req.method === "DELETE") {
//     res.end();
//   } else {
//     res.end();
//   }
// });

// server.listen(3101, () => {
//   console.log("Server running on port 3101");
// });

// function demo(a) {}
// demo(5);

// const http = require("http");
// const url = require("url");

// const server = http.createServer((req, res) => {
//   const parsedurl = url.parse(req.url, true);
//   console.log(parsedurl);

//   if (req.method === "GET") {
//     if (parsedurl.pathname === "/menu/veg") {
//       res.writeHead(200, { "Content-Type": "application/json" });
//       res.end(JSON.stringify({ category: "veg", message: "tq for order" }));
//       return;
//     } else if (parsedurl.pathname === "/menu/nonveg") {
//       res.writeHead(200, { "Content-Type": "application/json" });
//       res.end(JSON.stringify({ category: "nonveg", message: "tq for order" }));
//       return;
//     } else {
//       res.writeHead(404, { "Content-Type": "application/json" });
//       res.end(JSON.stringify({ error: "Not Found" }));
//       return;
//     }
//   }

//   res.writeHead(405, { "Content-Type": "application/json" });
//   res.end(JSON.stringify({ error: "Method Not Allowed" }));
// });

// server.listen(3104, () => {
//   console.log("Server running on port 3104");
// });


// ---------------------------------------20-2-25/19/2/25 up onee----------------------------------------------------

// ---------------------------------------21-2-25----------------------------------------------------
const http = require("http");
const url = require("url");
const fs = require("fs");
// const { console } = require("inspector");

// const server=http.createServer((req,res)=>{
//   if(req.method=="POST"){
//     req.on("data",(x)=>{
//       console.log(x);
//       res.end()
//     })
//   }
// })
// server.listen(3101, () => {
//   console.log("Server running on port 3101");
// });
// // by using above data we will get juyst buffer data to get corcr data we need to write below
// // so to cut binary pieces in small it is calles as chunk

// const http = require("http");
// const url = require("url");

// const server = http.createServer((req, res) => {
//   if (req.method == "POST") {
//     let body = "";
//     req.on("data", (chunk) => {
//       body += chunk.toString();
//       console.log(body);
//       res.end();
//     });
//     req.on("error", (err) => {
//       console.log(err);
//       res.write("err");
//     });
//     req.on("end", () => {
//       res.end("data receied");
//     });
//   }
// });
// server.listen(3101, () => {
//   console.log("Server running on port 3101");
// });

// // the above codes used to get data from binary to text

// const server = http.createServer((req, res) => {
//   if (req.method == "GET") {

//     fs.readFile("./sample.txt","utf8",(err,data)=>{
//       if(err){
//         console.log(err)
//         res.write(err)
//         res.end();
//       }
//       else{
//         console.log(data)
//         res.write(data)
//         res.end();

//       }
//     })
//     fs.readFile("./info.txt","utf8",(err,data)=>{
//       if(err){
//         console.log(err)
//         res.write(err)
//         res.end()
//       }
//       else{
//         console.log(data)
//         res.write(data)
//         res.end()

//       }
//     })

//   }
// });
// server.listen(3105, () => {
//   console.log("Server running on port 3101");
// });
// // the above code is related to asyncrhonus way

// const server = http.createServer((req, res) => {
//   if (req.method == "GET") {
//     let sample_data=fs.readFileSync("./sample.txt","utf8")
//      console.log(sample_data)

//     let infro_data=fs.readFileSync("./info.txt","utf8")
//     console.log(infro_data)
//      res.end(sample_data + "\n" + infro_data);

//   }
// });
// server.listen(3105, () => {
//   console.log("Server running on port 3105");
// });

// // the above code is synchrons

// // to add the dat to the file

// const server = http.createServer((req, res) => {
//   if (req.method == "POST") {
//     let ipData = "10k coders";
//     let sample_data = fs.writeFile("./sample.txt", ipData, (err) => {
//       if (err) {
//         res.end(err);
//       } else {
//         res.write("data inserted");
//         res.end();
//       }
//     });
//     console.log(sample_data);

//     let infro_data = fs.readFileSync("./info.txt", "utf8");
//     console.log(infro_data);
//   }
// });
// server.listen(3105, () => {
//   console.log("Server running on port 3105");
// });
// // the belwo code is for write in this also we have 2 fs.writeFile()  and fs,writeflrsync() it will remove the data whihc is there and repalce wirh aboev data

// const server = http.createServer((req, res) => {
//   if (req.method == "POST") {
//     let ipData = "10k coders";
//     fs.appendFile("./sample.txt", ipData, (err) => {
//       if (err) {
//         console.log(err)
//         res.end(err);
//       } else {
//         // res.write("data inserted");
//         res.end("data appended");
//       }
//     });
   
//   }
// });
// server.listen(3105, () => {
//   console.log("Server running on port 3105");
// });

// ---------------------------------------22-2-25----------------------------------------------------

// 23/2/25

//the code is used to write data in the file

// const http = require("http");
// const url = require("url");
// const fs = require("fs");

// const server = http.createServer((req, res) => {
//   if (req.method == "POST") {
//     let ipData=""

 
//     req.on("data",(chunk)=>{
//       ipData+=chunk.toString()

//     })
//     req.on("end",()=>{
//       fs.writeFile("./info.txt",ipData,(err)=>{
//         if(err){
//           res.write(error)
//           res.end()
//         }
//         else{
//           res.write("data inserted")
//           res.end()
//         }

//       })

//     })
   

   
//   }
// });
// server.listen(3105, () => {
//   console.log("Server running on port 3105");
// });
// the above willl take data and insetr in file
//the baove code is homework of 22/2/25

// {
//     "name":"Tejaswini",
//     "age":"24",
//     "place":"hyd"
// }

//
// 23/2/25

const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {

  if(req.method=="GET"){
    fs.readFile("./data.json","utf8",(err,data)=>{
      if(err){
        res.write(err)
        res.end()
      }
      else{
        res.writeHead(200,"ok",{"content-type":"application/json"})
        console.log(JSON.parse(data))
        console.log(typeof JSON.parse(data))
        console.log(typeof data)
        res.write(data)
        res.end()
      }
      

    })
  }
});
server.listen(3105, () => {
  console.log("Server running on port 3105");
});

//will make chnage in files of tex
//to see chaegs in the arry we can use below to add existing dad

// 23/2/25

// const http = require("http");
// const fs = require("fs");
// const server = http.createServer((req, res) => {

//   if(req.method=="GET"){
//     fs.readFile("./data.json","utf8",(err,data)=>{
//       if(err){
//         res.write(err)
//         res.end()
//       }
//       else{
//         res.writeHead(200,"ok",{"content-type":"application/json"})
//         // console.log(JSON.parse(data))
//         // console.log(typeof JSON.parse(data))
//         // console.log(typeof data)
//         // res.write(data)
//         // res.end()
//         let existingData=JSON.parse(data)
//         existingData.push(6)
//         console.log(existingData)
//         fs.writeFile("./data.json",JSON.stringify(existingData),(err)=>{
//           if(err){
//             res.write(err)
//             res.end()
//           }
//           else{
//             res.write("updated")
//             res.end()
//           }

//         })
//       }


      

//     })
//   }
// });
// server.listen(3105, () => {
//   console.log("Server running on port 3105");
// });



// // 23/2/25

// const http = require("http");
// const fs = require("fs");
// const server = http.createServer((req, res) => {

//   if(req.method=="GET"){
//     fs.readFile("./data.json","utf8",(err,data)=>{
//       if(err){
//         res.write(err)
//         res.end()
//       }
//       else{
//         res.writeHead(200,"ok",{"content-type":"application/json"})
//         // console.log(JSON.parse(data))
//         // console.log(typeof JSON.parse(data))
//         // console.log(typeof data)
//         // res.write(data)
//         // res.end()
//         let existingData=JSON.parse(data)
//         existingData.push(6)
//         console.log(existingData)
//         fs.writeFile("./data.json",JSON.stringify(existingData),(err)=>{
//           if(err){
//             res.write(err)
//             res.end()
//           }
//           else{
//             res.write("updated")
//             res.end()
//           }

//         })
//       }


      

//     })
//   }
// });
// server.listen(3105, () => {
//   console.log("Server running on port 3105");
// });




// ---------------------------------------23-2-25----------------------------------------------------

//we can use apend only for text content not for json fomrate data


// 24/2/25

// const http = require("http");
// const fs = require("fs");
// const server = http.createServer((req, res) => {

//   if(req.method=="GET"){
//     fs.readFile("./users.json","utf8",(err,data)=>{
//       if(err){
//         res.write(err)
//         res.end()
//       }
//       else{
//         res.writeHead(200,"ok",{"content-type":"application/json"})
//         console.log(JSON.parse(data))
//         console.log(data)
//         res.write(data)
//         res.end()
//         // let existingData=JSON.parse(data)
//         // existingData.push(6)
//         // console.log(existingData)
//         fs.writeFile("./data.json",JSON.stringify(existingData),(err)=>{
//           if(err){
//             res.write(err)
//             res.end()
//           }
//           else{
//             res.write("updated")
//             res.end()
//           }

//         })
//       } 
//     })
//   }
// });
// server.listen(3105, () => {
//   console.log("Server running on port 3105");
// });



// // 24/2/25

//CREAT THE FOILE AND INSERT TJE DATA AND ARRAY INSERTION
// const http = require("http");
// const fs = require("fs");

// // const server = http.createServer((req, res) => {

// //   if(req.method=="POST"){
// //     // let ipData={"id":3,"name":"ram","age":"one"}
// //     let ipData="";
// //     req.on("data",(chunk)=>{
// //       ipData+=chunk.toString();
  
// //     });
    
// //     req.on("end",()=>{
// //       console.log(ipData)
// //       fs.readFile("./users.json","utf8",(err,data)=>{
// //         if(err){
// //           // res.sendDate(err)
// //           res.end(err)
// //         }
// //         else{
          
// //           let existingData=JSON.parse(data)
// //           existingData.push(JSON.parse(ipData))
// //           // console.log(existingData)
// //           let updatedData=existingData;
// //           fs.writeFile("./users.json",JSON.stringify(updatedData),(err)=>{
// //             if(err){
// //               // res.write(err)
// //               res.end(err)
// //             }
// //             else{
// //               res.write(" data updated")
// //               res.end()
// //             }
  
// //           })
// //         } 
// //       })
      

// //     })
    
// //   }
// // });
// const server=http.createServer((req,res)=>{
//   // fs.unlink("./sample1/demo.text")
//   fs.writeFile("./hello.txt","hi",(err)=>{
//     if(err){
//       res.end(err)
//     }
//     else{
//       res.end("created")
//     }
//   })
// })
// server.listen(3105, () => {
//   console.log("Server running on port 3105");
// });

//assecig and gettign file name and files loactaion

// console.log("directory: ",__dirname)//it will give directpry path name
// console.log("file: ",__filename)//it will giev whole path
// console.log(path.basename(__dirname))//it will give basae
// console.log(path.basename(__filename))//to get just file name
// console.log(path.extname(__filename))
// console.log(path.parse(__dirname))
// console.log(path.parse(__filename))//parse will giev enter thing totally
//path module os ued to save out file in the various path
//predefien methos this are path,http,fs,url and os ther ae predefined modules
//import export are used defined modeules

// console.log(path)
// console.log(path.join("sample","demo","index.js"))
// console.log(path.join(__dirname,"hii.js"))
//it wil print the path of the folder in which we are using(__dirname)


// ---------------------------------------24-2-25----------------------------------------------------
// ---------------------------------------25-2-25----------------------------------------------------
// ---------------------------------------26-2-25----------------------------------------------------
// ---------------------------------------27-2-25----------------------------------------------------
// ---------------------------------------28-2-25----------------------------------------------------