const ImageKit = require('imagekit');

const authUpload = async (req, res) => {
    try{
        const imagekit = new ImageKit({
            urlEndpoint: 'https://ik.imagekit.io/s3zl5hug1',
            publicKey: 'public_ElpJYTdJgF4FWxgpCF1P4zNIfKI=',
            privateKey: 'private_lqsn9hlkv2X1HR/oTF1vVewRGKQ='
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