const express = require('express')

const { Router } = express;

const getImagesRoute = require("./src/modules/getimages/routes")
const authUploadRoute = require("./src/modules/auth/routes")

module.exports = () => 
    Router().get("/healthCheck", async (req, res) => {
        return res.status(200).json({status: 200, message: "Server is up"})
    })
    .use(getImagesRoute())
    .use(authUploadRoute())
    .all('*', () => {
        throw new NotFoundError();
    });