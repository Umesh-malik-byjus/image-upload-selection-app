import React from 'react'
import { useSetRecoilState, useRecoilValue } from 'recoil';

import ChooseLocalImage from './ChooseLocalImage';
import Images from './Images';
import { urlState, selectedImageState } from './recoil/selectedImage';
import { Model as ModelWindow, Button, Header, ModelBody, ModelFooter } from './styledComps/Model'

const Model = (props) => {
    const { isOpen, onClose } = props;
    
    const selectedImage = useRecoilValue(selectedImageState);
    const setUrl = useSetRecoilState(urlState);

    const onClick = (e) => {
        e.stopPropagation();
    }

    const setFinalUrl = () => {
        setUrl(selectedImage);
        onClose();
    }

    return (
        <>
            <ModelWindow isOpen={isOpen} onClick={onClick}>
                <Header bottomLine={true}>Select Image</Header>
                <ModelBody>
                    <ChooseLocalImage onClose = { onClose} />
                    <Images isOpen={isOpen}/>
                </ModelBody>
                <ModelFooter>
                    <Button onClick={onClose}>Close</Button>
                    <Button onClick={() => setFinalUrl() } invert>Use Selected Image</Button>
                </ModelFooter>
            </ModelWindow>
        </>
    )
}

export default Model