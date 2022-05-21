const ImageKit = require('imagekit');

const authUpload = async (req, res) => {
    try{
        const imagekit = new ImageKit({
            urlEndpoint: process.env.URL_ENDPOINT,
            publicKey: process.env.PUBLIC_KEY,
            privateKey: process.env.PRIVATE_KEY
        });
    
        const resp = imagekit.getAuthenticationParameters();
        return res.status(200).json(resp);
    }catch(err){
        throw new Error(err)
    }
}

module.exports = {
    authUpload
}