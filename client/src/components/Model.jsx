import React from 'react'
import { useSetRecoilState, useRecoilValue } from 'recoil';
import ChooseImage from './ChooseImage';
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
                    <ChooseImage onClose = { onClose} />
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