
  const http = require("http");
  const url = require("url"); // Required for query parsing
  const server=http.createServer((req,res)=>{
    console.log(req.url)
    const parsedURL=url.parse(req.url,true)
     console.log(parsedURL)
      console.log(parsedURL.pathname)
      const quantity=parsedURL.query.quantity
      //  url.parse(req.url,true)
  
  if (req.method=="GET")
  {
    if(parsedURL.pathname=="/sweets"){
      res.writHead(200,{content-Type:"application/json"})
      res.end(JSON.stringfy({foodtype:"sweets"}))
      
        if(parsedURL.pathname=="/ Kaju Katli"){
          res.writHead(200,{content-Type:"application/json"})
          res.end(JSON.stringfy({foodtype:"sweets",dish:"Kaju Katli",quantityofdish=quantity}))
        }
        else if (parsedURL.pathname=="/gulabjam"){
          res.writHead(200,{"content-Type":"application/json"})
          res.end(JSON.stringfy({foodtype:"sweets",dish:"gulabjam",quantityofdish=quantity}))
        }
        else if (parsedURL.pathname=="/Jalebi"){
          res.writHead(200,{"content-Type":"application/json"})
          res.end(JSON.stringfy({foodtype:"sweets",dish:"Jalebi",quantityofdish=quantity}))
        }
        else if (parsedURL.pathname=="/Ariselu "){
          res.writHead(200,{"content-Type":"application/json"})
          res.end(JSON.stringfy({foodtype:"sweets",dish:"Ariselu ",quantityofdish=quantity}))
        }
        else if (parsedURL.pathname=="/Bobbatlu "){
          res.writHead(200,{"content-Type":"application/json"})
          res.end(JSON.stringfy({foodtype:"sweets",dish:"Bobbatlu ",quantityofdish=quantity}))
        }
        else {
              res.writHead(404, { "Content-Type": "text/plain"});
              res.end(JSON.stringify({ error: "sweet not found"}));
          }
      }
        
    else if(parsedURL.pathname=="/hot"){
       res.writeHead(400,{"content-Type":"application/json"})
      res.end(JSON.stringfy({foodtype:"hot"}))
      {
        if(parsedURL.pathname=./Murukku){
          res.writeHead(400,{"content-Type":"application/json"})
          res.end(json.stringfy({foodtype:"hot",dish:"Murukku",quantityofdish=quantity}))
        }
        else if(parsedURL.pathname=./Murukku){
          res.writeHead(400,{"content-Type":"application/json"})
          res.end(json.stringfy({foodtype:"hot",dish:"Murukku",quantityofdish=quantity}))
        }
        else if(parsedURL.pathname=./Murukku){
          res.writeHead(400,{"content-Type":"application/json"})
          res.end(json.stringfy({foodtype:"hot",dish:"Murukku",quantityofdish=quantity}))
        }
        else if(parsedURL.pathname=./Murukku){
          res.writeHead(400,{"content-Type":"application/json"})
          res.end(json.stringfy({foodtype:"hot",dish:"Murukku",quantityofdish=quantity}))
        }
        else if(parsedURL.pathname=./Murukku){
          res.writeHead(400,{"content-Type":"application/json"})
          res.end(json.stringfy({foodtype:"hot",dish:"Murukku",quantityofdish=quantity}))
        }
        else {
              res.writHead(404, { "Content-Type": "text/plain"});
              res.end(JSON.stringify({ error: "hot not found"}));
          }
      }
    else {
          res.writeHead(405, { "Content-Type": "text/plain" });
          res.end("food not there");
    
      }
  else if (parsedURL.pathname === "POST") {
          res.writeHead(200, { "Content-Type": "text/plain" });
          res.end("POST request received");
      } else if (req.method === "PUT") {
          res.writeHead(200, { "Content-Type": "text/plain" });
          res.end("PUT request received");
      } else if (req.method === "PATCH") {
          res.writeHead(200, { "Content-Type": "text/plain" });
          res.end("PATCH request received");
      } else if (req.method === "DELETE") {
          res.writeHead(200, { "Content-Type": "text/plain" });
          res.end("DELETE request received");
      } else {
          res.end("Method not allowed");
      }
  }
  });
  server.listen(3101, () => {
      console.log("Server running on port 3101");
  });
      
        
      
        
      
      
    }
  }
  