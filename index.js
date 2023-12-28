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
  res.send(
    `Just a simple proxy server. 
    Use: /getNormal /getEncode  /postNormal  /postEncode /putNormal  /putEncode  /deleteNormal /deleteEncode`
  );
});

app.get("/getEncode/:path", async (req, res) => {
  console.log("Received request to /getEncode with path:", req.params.path);

  try {
    const response = await axios.get(req.params.path);
    res.json(response.data);
  } catch (error) {
    console.error("Error in /getEncode endpoint:", error);
    res.status(500).json({
      error: "An error occurred while processing the API request.",
      path: req.params.path,
    });
  }
});

app.post("/postEncode/:path", async (req, res) => {
  console.log(
    "Received POST request to /postEncode with path:",
    req.params.path
  );

  try {
    const response = await axios.post(req.params.path, req.body);
    res.json(response.data);
  } catch (error) {
    console.error("Error in /postEncode endpoint:", error);
    res.status(500).json({
      error: "An error occurred while processing the API request.",
      path: req.params.path,
    });
  }
});

app.put("/putEncode/:path", async (req, res) => {
  console.log("Received PUT request to /putEncode with path:", req.params.path);

  try {
    const response = await axios.put(req.params.path, req.body);
    res.json(response.data);
  } catch (error) {
    console.error("Error in /putEncode endpoint:", error);
    res.status(500).json({
      error: "An error occurred while processing the API request.",
      path: req.params.path,
    });
  }
});

app.delete("/deleteEncode/:path", async (req, res) => {
  console.log(
    "Received DELETE request to /deleteEncode with path:",
    req.params.path
  );

  try {
    const response = await axios.delete(req.params.path);
    res.json(response.data);
  } catch (error) {
    console.error("Error in /deleteEncode endpoint:", error);
    res.status(500).json({
      error: "An error occurred while processing the API request.",
      path: req.params.path,
    });
  }
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
      error: "An error occurred while processing the API request.",
      path: req.params.path,
    });
  }
});

app.post("/postNormal/:path(*)", async (req, res) => {
  try {
    const decodedPath = decodeURIComponent(req.params.path);
    console.log("Received POST request to /postNormal with path:", decodedPath);

    const response = await axios.post(decodedPath, req.body);
    res.json(response.data);
  } catch (error) {
    console.error("Error in /postNormal endpoint:", error);
    res.status(500).json({
      error: "An error occurred while processing the API request.",
      path: req.params.path,
    });
  }
});

app.put("/putNormal/:path(*)", async (req, res) => {
  try {
    const decodedPath = decodeURIComponent(req.params.path);
    console.log("Received PUT request to /putNormal with path:", decodedPath);

    const response = await axios.put(decodedPath, req.body);
    res.json(response.data);
  } catch (error) {
    console.error("Error in /putNormal endpoint:", error);
    res.status(500).json({
      error: "An error occurred while processing the API request.",
      path: req.params.path,
    });
  }
});

app.delete("/deleteNormal/:path(*)", async (req, res) => {
  try {
    const decodedPath = decodeURIComponent(req.params.path);
    console.log(
      "Received DELETE request to /deleteNormal with path:",
      decodedPath
    );

    const response = await axios.delete(decodedPath);
    res.json(response.data);
  } catch (error) {
    console.error("Error in /deleteNormal endpoint:", error);
    res.status(500).json({
      error: "An error occurred while processing the API request.",
      path: req.params.path,
    });
  }
});
