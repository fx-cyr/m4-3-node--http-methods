"use strict";
// import the needed node_modules.
const express = require("express");
const morgan = require("morgan");
const {stock, customers} = require("./data/inventory")
const bodyParser = require("body-parser");
const emails = customers.map((customer) => {
  let arrEmail = customer.email
  return arrEmail
})

express()
  // Below are methods that are included in express(). We chain them for convenience.
  // --------------------------------------------------------------------------------

  // This will give us will log more info to the console. see https://www.npmjs.com/package/morgan
  .use(morgan("tiny"))
  .use(bodyParser.json())

  // Any requests for static files will go into the public folder
  .use(express.static("public"))

  // Nothing to modify above this line
  // ---------------------------------
  // add new endpoints here 👇
  .post("/order", (req, res) => {
    console.log(req.body)
    // const {
    //   order,
    //   size,
    //   givenName,
    //   surname,
    //   email,
    //   address,
    //   city,
    //   province,
    //   postcode,
    //   country
    // } = req.body
    
    if (req.body.order === "bottle" && Number(stock.bottle) <= 0) {
      res.status(200).json({ status: "error", error: "unavailable" });
    }
    else if (req.body.order === "socks" && Number(stock.socks) <= 0) {
      res.status(200).json({ status: "error", error: "unavailable" });
    }

    // tshirt sizes 
    else if (req.body.order === "tshirt" && req.body.size === "small" && Number(stock.shirt.small) <= 0) {
      res.status(200).json({ status: "error", error: "unavailable" });
    }

    else if (req.body.order === "tshirt" && req.body.size === "medium" && Number(stock.shirt.medium) <= 0) {
      res.status(200).json({ status: "error", error: "unavailable" });
    }

    else if (req.body.order === "tshirt" && req.body.size === "large" && Number(stock.shirt.large) <= 0) {
      res.status(200).json({ status: "error", error: "unavailable" });
    }

    else if (req.body.order === "tshirt" && req.body.size === "extralarge" && Number(stock.shirt.xlarge) <= 0) {
      res.status(200).json({ status: "error", error: "unavailable" });
    }
    //

    else if (!req.body.country.includes("Canada")) {
      res.status(200).json({ status: "error", error: "undeliverable" });
    }

    else if (emails.includes(req.body.email)) {
      res.status(200).json({ status: "error", error: "repeat-customer" });
    }

    else if (!req.body.email.includes("@")) {
      res.status(200).json({ status: "error", error: "missing-data" });
    }

else {
    res.status(200).json({
      status: "success",
    });}
  })
  // add new endpoints here ☝️
  // ---------------------------------
  // Nothing to modify below this line

  // this is our catch all endpoint.
  .get("*", (req, res) => {
    res.status(404).json({
      status: 404,
      message: "This is obviously not what you are looking for.",
    });
  })

  // Node spins up our server and sets it to listen on port 8000.
  .listen(8000, () => console.log(`Listening on port 8000`));
