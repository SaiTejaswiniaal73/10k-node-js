const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  console.log(req.url);
  const parsedURL = url.parse(req.url, true);
  console.log(parsedURL);
  console.log(parsedURL.pathname);
  const quantity = parsedURL.query.quantity;

  if (req.method === "GET") {
    if (parsedURL.pathname === "/sweets") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ foodtype: "sweets" }));

      if (parsedURL.pathname === "/KajuKatli") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ foodtype: "sweets", dish: "Kaju Katli", quantityofdish: quantity }));
      } else if (parsedURL.pathname === "/gulabjam") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ foodtype: "sweets", dish: "Gulab Jamun", quantityofdish: quantity }));
      } else if (parsedURL.pathname === "/Jalebi") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ foodtype: "sweets", dish: "Jalebi", quantityofdish: quantity }));
      } else if (parsedURL.pathname === "/Ariselu") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ foodtype: "sweets", dish: "Ariselu", quantityofdish: quantity }));
      } else if (parsedURL.pathname === "/Bobbatlu") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ foodtype: "sweets", dish: "Bobbatlu", quantityofdish: quantity }));
      } else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Sweet not found" }));
      }
    } else if (parsedURL.pathname === "/hot") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ foodtype: "hot" }));

      if (parsedURL.pathname === "/Murukku") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ foodtype: "hot", dish: "Murukku", quantityofdish: quantity }));
      } else if (parsedURL.pathname === "/Pakoda") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ foodtype: "hot", dish: "Pakoda", quantityofdish: quantity }));
      } else if (parsedURL.pathname === "/Samosa") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ foodtype: "hot", dish: "Samosa", quantityofdish: quantity }));
      } else if (parsedURL.pathname === "/Vada") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ foodtype: "hot", dish: "Vada", quantityofdish: quantity }));
      } else if (parsedURL.pathname === "/ChilliBajji") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ foodtype: "hot", dish: "Chilli Bajji", quantityofdish: quantity }));
      } else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Hot dish not found" }));
      }
    } else {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(
          JSON.stringify({
            error: "Invalid food category. Use /sweets or /hot",
            available_options: {
              sweets: ["Kaju Katli", "Gulab Jamun", "Jalebi", "Ariselu", "Bobbatlu"],
              hot: ["Murukku", "Pakoda", "Samosa", "Vada", "Chilli Bajji"]
            }
          })
        );
      }
      
  } else if (req.method === "POST") {
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
    res.writeHead(405, { "Content-Type": "text/plain" });
    res.end("Method not allowed");
  }
});

server.listen(3101, () => {
  console.log("Server running on port  of task1.js 3101");
});
