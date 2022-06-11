import styled from "@emotion/styled";

const UploadButton = styled.div`
    border: 1px solid #ccc;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    padding: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    background-color: #fff;
    box-shadow: 0px 0px 5px #ccc;
    &:hover {
        box-shadow: 0px 0px 10px #ccc;
        cursor: pointer;
    }
`;

const TextBar = styled.input`
    height: 30px;
    width: 50%;
    border: 1px solid #ccc;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    padding: 5px;
    margin-top: 10px;
    margin-bottom: 10px;
    background-color: #fff;
    box-shadow: 0px 0px 5px #ccc;
    &:hover {
        box-shadow: 0px 0px 10px #ccc;
    }
`;

const Flex = styled.div`
    display: ${props => (props.box ? "-webkit-box" : "flex")};
    place-content: ${props => props?.center ? "center" : "flex-start"};
    flex-direction: row;
    flex-wrap: wrap;
    height: ${props => props?.height ? props?.height : "auto"};
    overflow: auto;
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    color: green;
    overflow: auto;
`;

const Label = styled.div`
    display: flex;
    flex-wrap: wrap;
    overflow: auto;
    &:after{
        content: "*";
        color: red;
    }
`;
export {
    UploadButton,
    TextBar,
    Flex,
    Info,
    Label
};