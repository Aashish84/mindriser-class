const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/api/products" && req.method === "GET") {
    //
    // reading from file - gives data in form of buffer
    let buffer_data = fs.readFileSync("./data.json");

    // parsing buffer data to json format
    let data = JSON.parse(buffer_data);

    res.write(JSON.stringify(data));
    res.end();
  } else if (req.url === "/api/products" && req.method === "POST") {
    req.on("data", (chunk) => {
      //
      // reading from file
      let products = fs.readFileSync("./data.json");
      let obj = JSON.parse(products);

      // adding req body into file obj
      obj.products.push(JSON.parse(chunk));

      // over-writing in file
      fs.writeFileSync("./data.json", JSON.stringify(obj));
      res.writeHead(201).write({ msg: "sucessfully added" });
      res.end();
    });
  } else if (req.url === "/api/products" && req.method === "PUT") {
    req.on("data", (chunk) => {
      let req_data = JSON.parse(chunk);
      if (req_data.hasOwnProperty("id") && req_data.hasOwnProperty("name")) {
        let buffer_data = fs.readFileSync("./data.json");
        let data = JSON.parse(buffer_data);

        let products = data.products;
        console.log(products);
        return;
        const new_products = products.map((elem) => {
          if (elem.id === req_data.id) {
            elem.name = req_data.name;
          }
          return elem;
        });
        fs.writeFileSync("./data.json", JSON.stringify(new_products));
        res.writeHead(201).write({ msg: "successful updated" });
        return res.end();
      }
      res.end("invalid json body");
    });
  } else {
    res.writeHead(404).end("resource not found");
  }
});

server.listen(5000, () => {
  console.log(`server is listening at port 5000...`);
});
