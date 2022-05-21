import { atom } from "recoil";

const selectedImageState = atom({
    key: "selectedImageState",
    default: null,
});

const urlState = atom({
    key: "urlState",
    default: null
})

export {
    selectedImageState,
    urlState
}