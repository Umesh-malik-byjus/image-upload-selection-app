import { atom } from "recoil";

const selectedImageState = atom({
    key: "selectedImageState",
    default: null,
});

const urlState = atom({
    key: "urlState",
    default: null
})

const firstImageUrlState = atom({
    key: "firstImageUrlState",
    default: null
})

export {
    selectedImageState,
    urlState,
    firstImageUrlState
}