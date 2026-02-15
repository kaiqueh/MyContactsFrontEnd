import styled from "styled-components"

export const Container = styled.header`
margin-bottom: 24px;
a{
    color: ${({ theme }) => theme.colors.primary.main};
    display: flex;
    align-items: center;
    font-weight: bold;
    text-decoration: none;
    img{
        rotate: -90deg;
        margin-right: 8px;
    }
}
h1{
    margin-top: 8px;
    font-size: 24px;
}

`
