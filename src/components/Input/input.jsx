import styled from "styled-components";

export const Input = styled.input`
    width: 100%;
    height: 52px;
    padding: 0 16px;
    border: none;
    border: 2px solid #fff;
    border-radius: 4px;
    background: #FFF;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    outline: none;
    font-size: 16px;
    transition: all 0.2s ease-in-out;
    &:focus{
        border-color: ${props => props.theme.colors.primary.main};
    }

`
export const Select = styled.select`
    width: 100%;
    height: 52px;
    padding: 0 16px;
    border: none;
    border: 2px solid #fff;
    border-radius: 4px;
    background: #FFF;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    outline: none;
    font-size: 16px;
    transition: all 0.2s ease-in-out;
    &:focus{
        border-color: ${props => props.theme.colors.primary.main};
    }
`;
