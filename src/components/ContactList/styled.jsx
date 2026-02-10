import styled from "styled-components";

export const Container = styled.div`
    margin-top: 24px;
    `

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    strong {
        font-size: 24px;
    }

    a {
    border: 2px solid ${props => props.theme.colors.primary.main};
    color: ${props => props.theme.colors.primary.main};
    font-weight: bold;
    border-radius: 4px;
    padding: 8px 16px;
    text-decoration: none;
    transition: all 0.2s ease-in-out;


    &:hover{
    background: ${props => props.theme.colors.primary.main};
    color: #FFF;
    }

    }


`
