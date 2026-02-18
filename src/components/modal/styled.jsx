import styled from "styled-components";

export const Overley = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    top: 0;
    left: 0;
    backdrop-filter: blur(4px);
    `

export const Container = styled.div`
    width: 100%;
    max-width: 450px;
    background-color: #FFF;
    font-size: 22px;
    border-radius: 4px;
    padding: 24px;

    h1{
        font-size: 22px;
        color: ${props => props.danger ? props.theme.colors.danger.main : props.theme.colors.grey[900]};
    }

    p{
        margin-top: 8px;
        font-size: 16px;
    }
`
export const Footer = styled.footer`
    display: flex;
    margin-top: 24px;
    justify-content: flex-end;
    align-items: center;

    .CancelButton{
        color: ${props => props.theme.colors.grey[200]};
        border: none;
        background: transparent;
        margin-right: 8px;

    }
    `

