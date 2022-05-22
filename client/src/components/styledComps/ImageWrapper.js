import styled from "@emotion/styled";

const ImageWrapper = styled.div`
    display: flex;
    margin: 10px;
    cursor: pointer;
    border-radius: 5px;
    overflow: hidden;
    position: relative;
    height: 100px;
    &:before {
        display: ${props => props?.isSelected ? "flex" : "none"};
        place-content: center;
        align-items: center;
        color: rgb(131,199,148);
        position: absolute;
        content: 'Selected';
        background: rgb(235,246,237,0.5);
        background-size: cover;
        width: 100px;
        height: 100px;
        border-radius: 5px;
        overflow: hidden;
    }
`;

export default ImageWrapper;