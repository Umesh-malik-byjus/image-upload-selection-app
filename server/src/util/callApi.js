const axios = require("axios");

const callApi = async (props) => {
    const {url ="", method= "GET", payload} = props;
    const config = {
        method,
        url: `${process.env.API_URL}${url}`,
        headers: {
            'Authorization': `Basic ${process.env.BASE64_TOKEN}`,
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