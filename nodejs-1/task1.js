const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  console.log(req.url);
  const parsedURL = url.parse(req.url, true);
  const quantity = parsedURL.query.quantity;

  if (req.method === "GET") {
    // Check if the path is for sweets
    if (parsedURL.pathname === "/sweets") {
      // Respond with the list of available sweets
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({
        foodtype: "sweets",
        available_sweets: ["Kaju Katli", "Gulab Jamun", "Jalebi", "Ariselu", "Bobbatlu"],
      }));
    } else if (parsedURL.pathname.startsWith("/sweets/")) {
      const dish = parsedURL.pathname.slice(8).toLowerCase(); // Extract dish name and convert to lowercase

      const sweets = {
        kajukatli: "Kaju Katli",
        gulabjam: "Gulab Jamun",
        jalebi: "Jalebi",
        ariselu: "Ariselu",
        bobbatlu: "Bobbatlu",
      };

      // Check for case-insensitive match
      const matchedDish = Object.keys(sweets).find(key => key.toLowerCase() === dish);

      if (matchedDish) {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ foodtype: "sweets", dish: sweets[matchedDish], quantityofdish: quantity }));
      } else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Dish not found in the sweets category" }));
      }
    } 
    // Check if the path is for hot dishes
    else if (parsedURL.pathname === "/hot") {
      // Respond with the list of available hot dishes
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({
        foodtype: "hot",
        available_hot_dishes: ["Murukku", "Pakoda", "Samosa", "Vada", "Chilli Bajji"],
      }));
    } else if (parsedURL.pathname.startsWith("/hot/")) {
      const dish = parsedURL.pathname.slice(5).toLowerCase(); // Extract dish name and convert to lowercase

      const hot = {
        murukku: "Murukku",
        pakoda: "Pakoda",
        samosa: "Samosa",
        vada: "Vada",
        chillibajji: "Chilli Bajji",
      };

      // Check for case-insensitive match
      const matchedDish = Object.keys(hot).find(key => key.toLowerCase() === dish);

      if (matchedDish) {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ foodtype: "hot", dish: hot[matchedDish], quantityofdish: quantity }));
      } else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Dish not found in the hot category" }));
      }
    } 
    // Handle invalid paths
    else {
      res.writeHead(400, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({
          error: "go through the list to choose your snacks",
          available_options: {
            sweets: ["Kaju Katli", "Gulab Jamun", "Jalebi", "Ariselu", "Bobbatlu"],
            hot: ["Murukku", "Pakoda", "Samosa", "Vada", "Chilli Bajji"],
          },
        })
      );
    }
  } else {
    res.writeHead(405, { "Content-Type": "text/plain" });
    res.end("Method not allowed");
  }
});

server.listen(3101, () => {
  console.log("Server running on port of task1.js  3101");
});
