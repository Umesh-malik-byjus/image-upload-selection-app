const callApi = require("../../util/callApi")

const getImages = async (req, res) => {
    try {
        
        let images = await callApi({
            url: "/v1/files",
            method: "GET"
        })
        return res.status(200).json({ status: true, images })
    } catch (err) {
        throw new Error(err)
    }
}

module.exports = {
    getImages
}