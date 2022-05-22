import React, { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { FcAddImage } from 'react-icons/fc'
import { Button, Header, Span } from './styledComps/Model'
import { selectedImageState, urlState } from './recoil/selectedImage'
import { Error } from './styledComps/App'
import { callApi } from './utils/callApi'
import axios from 'axios'

const ChooseLocalImage = (props) => {
    const { onClose } = props;
    const [imageInfo, setImageInfo] = useState();
    const [error, setError] = useState();
    const setSelectedImage = useSetRecoilState(selectedImageState)
    const setUrl = useSetRecoilState(urlState);

    const onClick = (e) => {
        e.stopPropagation();
        document.getElementById('file').click();
    }

    const setFinalUrl = (url) => {
        setUrl(url);
        onClose();
        return true;
    }

    const uploadImage = async () => {
        const file = document.getElementById('file').files[0];
        const res = await callApi({
                        url: '/api/auth-upload',
                        method: 'GET',
                    })
        const formData = new FormData();
        formData.append('file', file);
        formData.append("fileName", file?.name);
        formData.append("publicKey", import.meta.env.VITE_PUBLIC_KEY);
        formData.append("useUniqueFileName", true);
        Object.entries(res).forEach(([key, value]) => {
            formData.append(key, value);
        })
        await axios({
            method: "POST",
            url: import.meta.env.VITE_IMAGE_UPLOAD_URI,
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => {
            setFinalUrl(res?.data?.url)
        }).catch(err => {
            console.error(err)
        })
    }

    const onChange = (e) => {
        setError(null);
        const file = e.target.files[0];
        if(!file?.type.includes('image')){
            setImageInfo(null)
            setSelectedImage({
                url: null,
                file: null
            })
            setError('Please select an image')
            return;
        }
        if(file.size > 5000000){
            setImageInfo(null)
            setSelectedImage({
                url: null,
                file: null
            })
            setError('Image size should be less than 5mb')
            return;
        }
        const reader = new FileReader();
        reader.onload = (e) => {
            setSelectedImage({
                url: e.target.result,
                file: file
            })
        }
        reader.readAsDataURL(file);
        setImageInfo(file?.name);
    }

    return (
        <Header>
            <FcAddImage size={60} />
            <Span>{imageInfo}</Span>
            <input id="file" type="file" hidden onInput={onChange} />
            <Header row>
                {imageInfo &&
                    <Button 
                        onClick={uploadImage}
                        invert
                    >
                        Upload & Use Image
                    </Button>
                }
                <Button onClick={onClick}>
                    <FcAddImage size={20} />
                    Choose Image(s)
                </Button>
            </Header>
            <Error>
                {error}
            </Error>
            <Span small>Recommended dimensions for Omni theme Category image 300x300px <br/> PNG, JPG, GIF up to 5MB</Span>
        </Header>
    )
}

export default ChooseLocalImage