import axios from "axios";

const callApi = async (props) => {
    const {url ="", method= "GET", payload = ""} = props;
    const config = {
        method,
        url: `https://image-upload-selection-epkyt9mnb-umeshmalik.vercel.app${url}`,
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