import React, {useState} from 'react'
import { useRecoilValue } from 'recoil';

import { urlState } from './recoil/selectedImage';
import Model from './Model';
import { TextBar, UploadButton, Flex, Info, Label} from './styledComps/UploadButton'

const UploadBar = () => {
    const selectedImage = useRecoilValue(urlState);
    const [openModel, setOpenModel] = useState(false);
    const [info, setInfo] = useState(null);

    return (
        <>
            <Label required = "*" id="image-label">Hero Image</Label>
            <Flex>
                <TextBar htmlFor="image-labels" onFocus={(e) => setOpenModel(true)} defaultValue={selectedImage} inputMode= "none"/>
                <UploadButton onClick={()=> selectedImage && setInfo("Image Uploaded")}>Upload Image</UploadButton>
            </Flex>
            <Info>{info}</Info>
            {openModel && <Model isOpen = {openModel} onClose = {()=> setOpenModel(false)}/>}
        </>
    )
}

export default UploadBar