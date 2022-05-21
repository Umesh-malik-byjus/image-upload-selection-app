const axios = require("axios");

const callApi = async (props) => {
    const {url ="", method= "GET", payload} = props;
    const config = {
        method,
        url: `https://api.imagekit.io${url}`,
        headers: {
            'Authorization': 'Basic cHJpdmF0ZV9scXNuOWhsa3YyWDFIUi9vVEYxdlZld1JHS1E9Og=='
        },
        data: payload
    }
    return await axios(config).then(res => {
        return res?.data
    }).catch(err=> {
        return err;
    })
}

module.exports = callApi;