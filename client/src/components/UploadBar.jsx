import React, {useState} from 'react'
import { useRecoilValue } from 'recoil';

import { urlState } from './recoil/selectedImage';
import Model from './Model';
import { TextBar, UploadButton, Flex, Info} from './styledComps/UploadButton'

const UploadBar = () => {
    const selectedImage = useRecoilValue(urlState);
    const [openModel, setOpenModel] = useState(false);
    const [info, setInfo] = useState(null);
    return (
        <>
            <p>Hero Image</p>
            <Flex>
                <TextBar onFocus={(e) => setOpenModel(true)} defaultValue={selectedImage}/>
                <UploadButton onClick={()=> selectedImage && setInfo("Image Uploaded")}>Upload Image</UploadButton>
            </Flex>
            <Info>{info}</Info>
            <Model isOpen = {openModel} onClose = {()=> setOpenModel(false)}/>
        </>
    )
}

export default UploadBar