const info = {
  name: "Alejandra",
  age: 22,
  phone: "3168067141",
  city: "Pasto",
  casado: '&#x1F645;&#x200D;&#x2642;&#xFE0F',

};
const { strictEqual } = require("assert");
const http = require("http");
const { stringify } = require("querystring");
const port = 3000;
const host = "localhost";

//CRUD- Create-Read-Update-Delete
//               GET
const server = http.createServer((req, res) => {
  // si se cumple pasa esto
  if (req.method === "GET" && req.url === "/info") {
    res.statusCode = 200; // si esta bien sale 200
    res.setHeader("Content-Type", "text/html");
    const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Alejandra</title>
    <style>
      body,html {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .container {
        //border: solid red;
        border-radius : 10px;
        padding: 50px;
        background: linear-gradient(to right, #ff9999, #66ccff, #99ff99);
        animation: gradientAnimation 10s infinite alternate;
        font-size: 20px;
      }
      @keyframes gradientAnimation{
        0%{
            background-position: 0% 50%;
        }
        100%{
            background-position: 100% 50%;
        }
      }
      h1{
        text.align: center;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h1>${info.name}</h1>
      <p>Edad: ${info.age}</p>
      <p>Phone: ${info.phone}</p>
      <p>City: ${info.city}</p>
      <p>Estado civil: ${info.casado}</p>
    </div>
  </body>
</html>`;
    res.end(html);
  } else if (req.method === "GET" && req.url === "/profile") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end("Yo soy aleja");
  } else {
    //si no se cumple pasa esto
    res.statusCode = 404; //si esta mal sale 404
    res.end(" URL no encontrada");
  }
});

server.listen(port, host, () => {
  //quien lo va a escuchar
  console.log("el servidor arranco adecuadamente");
});
