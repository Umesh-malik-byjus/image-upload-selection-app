import styled from "@emotion/styled";

const Model = styled.div`
    display: ${props => props.isOpen ? "block" : "none"};
    position: absolute;
    top: 10%;
    left: 10%;
    width: 80%;
    height: 80%;
    background-color: white;
    shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
    box-shadow: 0px 0px 5px #ccc;
    z-index: 100;
    justify-content: center;
    align-items: center;
`;

const Button = styled.button`
    display: flex;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    align-items: center;
    margin: 0px 10px;
    background-color: ${props => props?.invert ? "#4A5363" : "#fff"};
    color: ${props => props?.invert ? "#fff" : "#4A5363"};
    box-shadow: 0px 0px 5px #ccc;
    &:hover {
        box-shadow: 0px 0px 10px #ccc;
        cursor: pointer;
    }
`;

const Header = styled.div`
    display: flex;
    flex-direction: ${props => props?.row ? "row" : "column"};
    justify-content: center;
    align-items: center;
    padding: 16px;
    border-bottom: ${props => props?.bottomLine ? "1px solid #ccc" : "none"};
    border-radius: 5px;
`;

const ModelBody = styled.div`
    background-color: #f2f2f2;
    height: inherit;
`;

const ModelFooter = styled.div`
    position: inherit;
    bottom: 12px;
    right: 5px;
    display: flex;
    border-radius: 5px;
`;

const Span = styled.span`
    font-size: ${props => props?.small ? "12px": "16px"};
    color: #4A5363;
`;

export {
    Model,
    Button,
    Header,
    ModelBody,
    ModelFooter,
    Span
}