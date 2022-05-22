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
            <label id="image-label">Hero Image</label>
            <Flex>
                <TextBar htmlFor="image-labels" onFocus={(e) => setOpenModel(true)} defaultValue={selectedImage} inputMode= "none"/>
                <UploadButton onClick={()=> selectedImage && setInfo("Image Uploaded")}>Upload Image</UploadButton>
            </Flex>
            <Info>{info}</Info>
            <Model isOpen = {openModel} onClose = {()=> setOpenModel(false)}/>
        </>
    )
}

export default UploadBar