import React, { useState, useEffect } from 'react'
import { useRecoilState } from 'recoil';
import { IKContext, IKImage } from "imagekitio-react";

import { selectedImageState } from './recoil/selectedImage';
import { Box, Heading } from './styledComps/Images'
import { Error } from './styledComps/App';
import { callApi } from './utils/callApi';
import ImageWrapper from './styledComps/ImageWrapper';
import { Flex } from "./styledComps/UploadButton"

const Images = (props) => {
    const { isOpen } = props;

    const [selectedImage, setSelectedImage] = useRecoilState(selectedImageState);
    const [images, setImages] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        setError(null);
        isOpen &&
            callApi({
                url: "/api/list-images",
                method: "GET"
            }).then(res => {
                setImages(res?.images)
            }).catch(err => {
                setError(err)
                console.error(err)
            })
        return () => {
            setImages([]);
            setSelectedImage(null);
        }
    }, [isOpen])

    return (
        <Box>
            <Error>{error}</Error>
            <Heading>
                Your Image(s)
            </Heading>
            <IKContext
                publicKey={import.meta.env.VITE_PUBLIC_KEY}
                urlEndpoint={import.meta.env.VITE_URL_ENDPOINT}
                transformationPosition="path"
                authenticationEndpoint={`${import.meta.env.VITE_SERVER_ENDPOINT}/api/auth-upload`}
            >
                <Flex
                    height={"150px"}
                    center
                    box
                >
                    {
                        images.map((image, idx) =>
                            <ImageWrapper
                                key={idx}
                                isSelected={selectedImage === image?.url}
                                onClick={() => setSelectedImage(image?.url)}
                            >
                                <IKImage
                                    path={image?.filePath}
                                    transformation={[{
                                        "height": "100",
                                        "width": "100"
                                    }]}
                                />
                            </ImageWrapper>
                        )
                    }
                </Flex>
            </IKContext>
        </Box>
    )
}

export default Images