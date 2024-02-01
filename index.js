const express = require("express");
const axios = require("axios");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const app = express();
const port = 3001;
app.listen(port, () => console.log(`Server listening on port ${port}`));
app.use(express.json());

const swaggerOptions = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "Express API Proxy with Swagger",
      version: "1.0.0",
      description: "A simple Express API proxy with Swagger documentation",
    },
  },
  apis: ["./index.js"],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/", (req, res) => {
  res.redirect("/api-docs");
});

/**
 * @swagger
 * /get/{path}:
 *   get:
 *     summary: Get request with url path
 *     tags: [Url proxy]
 *     description: Normal or encoded url path
 *     parameters:
 *       - in: path
 *         name: path
 *         schema:
 *           type: string
 *         required: true
 *         examples:
 *          examlpe1:
 *            value: https%3A%2F%2Fsteamcommunity.com%2Fmarket%2Fpriceoverview%2F%3Fcurrency%3D6%26market_hash_name%3DUnusual%2520Mean%2520Captain%26appid%3D440%26language%3Dpolish
 *          example2:
 *            value: https://steamcommunity.com/market/priceoverview/?currency=6&market_hash_name=Unusual%20Mean%20Captain&appid=440&language=polish
 *     responses:
 *       200:
 *         description: OK
 *       500:
 *         description: Error
 */
app.get("/get/:path(*)", async (req, res) => {
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

/**
 * @swagger
 * /post/{path}:
 *   post:
 *     summary: Post request with url path
 *     tags: [Url proxy]
 *     description: Normal or encoded path
 *     parameters:
 *       - in: path
 *         name: path
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       200:
 *         description: OK
 *       500:
 *         description: Error
 */
app.post("/post/:path(*)", async (req, res) => {
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

/**
 * @swagger
 * /put/{path}:
 *   put:
 *     summary: Put request with url path
 *     tags: [Url proxy]
 *     description: Normal or encoded path
 *     parameters:
 *       - in: path
 *         name: path
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       200:
 *         description: OK
 *       500:
 *         description: Error
 */
app.put("/put/:path(*)", async (req, res) => {
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
/**
 * @swagger
 * /delete/{path}:
 *   delete:
 *     summary: Delete request with url path
 *     tags: [Url proxy]
 *     description: Normal or encoded path
 *     parameters:
 *       - in: path
 *         name: path
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       200:
 *         description: OK
 *       500:
 *         description: Error
 */
app.delete("/delete/:path(*)", async (req, res) => {
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

app.get("/api-docs", (req, res) => {
  res.json(swaggerSpec);
});
