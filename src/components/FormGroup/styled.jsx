import styled from "styled-components";

export const Container = styled.div`
& + & {
    margin-top: 24px;
}

span{
    display: block;
    margin-top: 8px;
    color: ${({ theme }) => theme.colors.danger.main};
}

`
