const express = require("express");
require("dotenv").config({ path: "./env/config.env" });
const cors = require("cors");

// ENV
const PORT = process.env.PORT;

// Setup
const server = express();
server.use(express.json());
server.use(cors());

// Import routes
const route = require("./routes/route");

// Mount Routes
server.use("/api/route", route);

server.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});

server.get("*", (req, res) => {
  res.send("Node API");
});
