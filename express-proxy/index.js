const express = require("express");
const axios = require("axios");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");

const app = express();
const port = 3001;
const swaggerDocument = YAML.load("./swagger-definition.yaml");

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/", (req, res) => {
  res.redirect("/docs");
});

app.get("/health", (req, res) => {
  res.json({ health: true });
});

app.get("/link/:path(*)", async (req, res) => {
  try {
    const decodedPath = decodeURIComponent(req.params.path);
    console.log("Received request to /get with path:", decodedPath);

    const response = await axios.get(decodedPath, {
      params: req.query,
    });

    res.json(response.data);
  } catch (error) {
    res.status(error.response.status).json({
      message: error.message,
      status: error.response.status,
      code: error.code,
      path: req.params.path,
    });
  }
});

app.post("/link/:path(*)", async (req, res) => {
  try {
    const requestData = req.body;
    console.log(requestData);
    const decodedPath = decodeURIComponent(req.params.path);
    console.log("Received POST request to /post with path:", decodedPath);

    const response = await axios.post(decodedPath, req.body, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    res.json(response.data);
  } catch (error) {
    res.status(error.response.status).json({
      message: error.message,
      status: error.response.status,
      code: error.code,
      path: req.params.path,
    });
  }
});

app.put("/link/:path(*)", async (req, res) => {
  try {
    const decodedPath = decodeURIComponent(req.params.path);
    console.log("Received PUT request to /put with path:", decodedPath);

    const response = await axios.put(decodedPath, req.body);
    res.json(response.data);
  } catch (error) {
    res.status(error.response.status).json({
      message: error.message,
      status: error.response.status,
      code: error.code,
      path: req.params.path,
    });
  }
});

app.delete("/link/:path(*)", async (req, res) => {
  try {
    const decodedPath = decodeURIComponent(req.params.path);
    console.log("Received DELETE request to /delete with path:", decodedPath);

    const response = await axios.delete(decodedPath);
    res.json(response.data);
  } catch (error) {
    res.status(error.response.status).json({
      message: error.message,
      status: error.response.status,
      code: error.code,
      path: req.params.path,
    });
  }
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
