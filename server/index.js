const express = require("express");
const cors = require("cors");
const profile = require("./data");

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

app.get("/api/profile", (req, res) => {
  res.json(profile);
});

app.listen(port, () => {
  console.log(`API ready on http://localhost:${port}`);
});
