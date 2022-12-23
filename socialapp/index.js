const express = require('express');
const format = require('date-format');

const app = express();

// swagger docs related
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
    res.status(200).send("<h1> Hello World </h1>");
});

app.get("/api/v1/instagram", (req, res) => {
    const instaSocial = {
        username: "iamniteshpatwa",
        followers: 66,
        following: 75,
        date: format.asString("dd[MM] - hh:mm:ss", new Date()),
    };

    res.status(200).json(instaSocial);
});

app.get("/api/v1/facebook", (req, res) => {
    const facebookSocial = {
        username: "patwanitesh",
        followers: 23,
        following: 10,
        date: format.asString("dd[MM] - hh:mm:ss", new Date()),
    };

    res.status(200).json(facebookSocial);
});

app.get("/api/v1/linkedin", (req, res) => {
    const linkedinSocial = {
        username: "niteshpatwa",
        followers: 800,
        following: 80,
        date: format.asString("dd[MM] - hh:mm:ss", new Date()),
    };

    res.status(200).json(linkedinSocial);
});

app.get("/api/v1/:token", (req, res) => {
    console.log(req.params.token);
    res.status(200).json({name: req.params.token});
});

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
});
