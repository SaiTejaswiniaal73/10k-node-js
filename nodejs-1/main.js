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

const server = http.createServer((req, res) => {
  if (req.method == "POST") {
    let ipData = "10k coders";
    fs.appendFile("./sample.txt", ipData, (err) => {
      if (err) {
        console.log(err)
        res.end(err);
      } else {
        // res.write("data inserted");
        res.end("data appended");
      }
    });
   
  }
});
server.listen(3105, () => {
  console.log("Server running on port 3105");
});
