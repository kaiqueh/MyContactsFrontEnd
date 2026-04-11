import styled, { css } from "styled-components";

const containerVariants = {
    default: css`
    background: ${({ theme }) => theme.colors.primary.main};
    `,

    success: css`
    background: ${({ theme }) => theme.colors.success.main};
    `,

    error: css`
    background: ${({ theme }) => theme.colors.danger.main};
    `,
}

export const Containner = styled.div`
color: ${prop => prop.theme.colors.primary.lighter};
padding: 16px 32px;
background-color: ${prop => prop.theme.colors.primary.main};
border-radius: 4px;
box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
display: flex;
font-weight: bold;
align-items: center;
justify-content: center;

${({ type }) => containerVariants[type || "default"]}

img{
    margin-right: 8px;
}

& + & {
    margin-top: 13px;
}
`
