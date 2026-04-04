import {styled, css} from "styled-components";

export const StyledButton = styled.button`
    background-color: ${props => props.theme.colors.primary};
    /* width: 100%; */
    padding: 0 16px;
    height: 52px;
    background-color: ${props => props.theme.colors.primary.main};
    color: #FFF;
    /* font-weight: bold; */
    border: none;
    border-radius: 4px;
    font-size: 16px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    transition: all 0.2s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover{
        background-color: ${props => props.theme.colors.primary.dark};
    }

    &:disabled{
        background-color: #ccc;
        cursor: not-allowed;
    }

    ${props => props.danger && css`
        background-color: ${props => props.theme.colors.danger.main};

        &:hover{
            background-color: ${props => props.theme.colors.danger.dark};
        }
    `}
`
