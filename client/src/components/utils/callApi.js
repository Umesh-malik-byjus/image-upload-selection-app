import axios from "axios";

const callApi = async (props) => {
    const {url ="", method= "GET", payload = ""} = props;
    const config = {
        method,
        url: `http://localhost:8080${url}`,
        data: payload
    }
    return await axios(config).then(res => {
        return res?.data
    }).catch(err=> {
        return err;
    })
}

export {
    callApi
}