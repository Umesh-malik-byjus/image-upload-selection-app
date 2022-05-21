const express = require('express');

const controller = require("./controller");
const router = express.Router({ mergeParams: true });

module.exports = () => {
    router.get(
        '/auth-upload',
        controller.authUpload
        )

    return router
}