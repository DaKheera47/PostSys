import styled from "styled-components";

export const defaultFont = "'Montserrat', sans-serif";

export const DefaultButton = styled.button`
    border: none;
    background-color: #ff8e6e;
    color: white;
    padding: 5px 15px;
    width: 150px;
    height: 50px;
    font-family: ${defaultFont};
    font-size: 1.1rem;
    border-radius: 5px;
    transition: 0.2s all ease-out;
    cursor: pointer;
    text-align: center;
    font-weight: 500;
    text-decoration: none;
    margin-bottom: 50px;

    &:hover {
        transform: scale(1.05);
    }

    &:active {
        transform: scale(0.95);
    }
`;
