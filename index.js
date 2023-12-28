const express = require("express");
const axios = require("axios");

const app = express();
const port = 3001;
app.listen(port, () => console.log(`Server listening on port ${port}`));
app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/", (req, res) => {
  res.send("Just a simple proxy server.");
});

app.get("/getEncode/:path", async (req, res) => {
  console.log("Received request to /getTest with path:", req.params.path);

  const response = await axios.get(req.params.path);
  res.json(response.data);
});

app.get("/getNormal/:path(*)", async (req, res) => {
  try {
    const decodedPath = decodeURIComponent(req.params.path);
    console.log("Received request to /getNormal with path:", decodedPath);

    const response = await axios.get(decodedPath, {
      params: req.query,
    });

    res.json(response.data);
  } catch (error) {
    console.error("Error in /getNormal endpoint:", error);
    res.status(500).json({
      error: "Wystąpił błąd podczas przetwarzania zapytania API.",
      parm: req.params.path,
    });
  }
});
