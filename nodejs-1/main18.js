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
