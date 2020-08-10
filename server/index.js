//
// SPDX-License-Identifier: Apache-2.0
// Copyright Drewry Shipping Consultants, Ltd.
// Copyright FreightTrust and Clearing Corporation
// Rights are Reserved of their respective owners
// github.com/drewry-uk
//
//
// src/index.js
const express = require("express");
const bodyParser = require("body-parser");
const addRequestId = require("express-request-id");

const app = express();
app.use(addRequestId());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ message: "Container Index", requestId: req.id });
});

app.get("/contract", ({ id, contract }, res, next) => {
  const { container } = contract;
  res.json({ container: `${container}`, requestId: id });
});

app.post("/contract-routes", ({ id, routes }, res, next) => {
  const { routes } = contract;

  if (typeof routes === "undefined") {
    return (
      res
        .status(400)

        // @dev user must define the `route` in order to get a price

        .json({ error: "missing `route`", requestId: id })
    );
  }

  res.json({ container: `${container}`, requestId: id });
});

const server = app.listen(8081, function () {
  const port = server.address().port;
  console.log("Drewry API Mock Server Listening to port %s", port);
});
