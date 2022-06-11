import React, { useState, useEffect, useRef } from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { FcAddImage } from 'react-icons/fc'

import { Button, Header, Span } from './styledComps/Model'
import { selectedImageState, urlState } from './recoil/selectedImage'
import { Error } from './styledComps/App'
import { callApi } from './utils/callApi'
import axios from 'axios'

const ChooseLocalImage = (props) => {
    const { onClose } = props;
    const [imageInfo, setImageInfo] = useState('');
    const [error, setError] = useState(null);
    const setSelectedImage = useSetRecoilState(selectedImageState)
    const [url, setUrl] = useRecoilState(urlState);
    const [totalImages, setTotalImages] = useState(0);
    const [imageUploaded, setImageUploaded] = useState(0);
    const [files, setFiles] = useState([]);
    const [firstImageUrl, setFirstImageUrl] = useState('');
    const [isUploading, setIsUploading] = useState(false);
    const dropZone = useRef(null);

    useEffect(() => {
        dropZone.current.addEventListener('dragover', handleDragOver, false);
        dropZone.current.addEventListener('drop', handleDrop, false);
        return () => {
            setTotalImages(0);
            setImageInfo(prevState => '');
            setError(null);
            setFiles([]);
        }
    }, [])

    useEffect(() => {
        if (imageUploaded === totalImages && totalImages > 0) {
            setImageUploaded(0);
            setIsUploading(false);
            setUrl(firstImageUrl);
            setSelectedImage(firstImageUrl);
            onClose();
        }
    }, [firstImageUrl, imageUploaded]);

    const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
    }

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const dt = e.dataTransfer;
        const files = dt.files;
        setInfoOfImages(files);
        setFiles(files)
        setTotalImages(files.length);
    }

    const onClick = (e) => {
        e.stopPropagation();
        document.getElementById('file').click();
    }

    const uploadImage = async () => {
        setIsUploading(prevState => !prevState);
        for (let i = 0; i < files.length; i++) {
            const res = await callApi({
                url: '/api/auth-upload',
                method: 'GET',
            })
            const formData = new FormData();
            formData.append('file', files[i]);
            formData.append("fileName", files[i]?.name);
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
                const url = res.data.url;
                setFirstImageUrl(url);
                setImageUploaded(prevState => prevState + 1);
            }).catch(err => {
                console.error(err)
            })
        }
    }

    const onChange = (e) => {
        setError(null);
        setImageInfo(prevState => '');
        const file = e.target.files;
        setInfoOfImages(file);
        setFiles(file)
        setTotalImages(file.length);
    }

    const setInfoOfImages = (file) => {
        for (let images = 0; images < file.length; images++) {
            if (!file[images]?.type.includes('image')) {
                setImageInfo('')
                setSelectedImage({
                    url: null,
                    file: null
                })
                setError('Please select an image')
                return;
            }
            if (file[images].size > 5000000) {
                setImageInfo('')
                setSelectedImage({
                    url: null,
                    file: null
                })
                setError('Image size should be less than 5mb')
                return;
            }
            setImageInfo(prevState => `${prevState} ${file[images].name} ,`);
        }
    }
    return (
        <Header ref={dropZone}>
            <FcAddImage size={60} />
            <Span>{imageInfo}</Span>
            <input id="file" type="file" defaultValue={[]} hidden onInput={onChange} multiple />
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
            {totalImages > 0 && <span>{imageUploaded} / {totalImages}</span>}
            {isUploading && <Span>Uploading...</Span>}
            <Error>
                {error}
            </Error>
            <Span small>Recommended dimensions for Omni theme Category image 300x300px <br /> PNG, JPG, GIF up to 5MB</Span>
        </Header>
    )
}

export default ChooseLocalImage