import styled from "styled-components";

export const Container = styled.div`
    margin-top: 24px;
    `

export const InputSearchContainer = styled.div`
    margin-top: 24px;
    width: 100%;

    input {
    height: 50px;
    width: 100%;
    border: none;
    outline: none;
    border-radius: 25px;
    padding: 0 16px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    }

`

export const Header = styled.header`
    display: flex;
    justify-content: ${props => props.$hasError ? 'flex-end' : (props.$justifyContent || 'center')};
    align-items: center;
    margin-top: 24px;
    margin-bottom: 34px;
    border-bottom: 2px solid ${props => props.theme.colors.grey[100]};
    padding-bottom: 16px;
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

export const ListHeader = styled.header`
        button{
            margin-bottom: 8px;
            border: none;
            background: transparent;
            display: flex;
            align-items: center;
        }
        span{
        color: ${props => props.theme.colors.primary.main};
        margin-right: 8px
        }

        img{
            transform: ${props => props.$orderBy === 'ASC' ? 'rotate(180deg)' : 'rotate(0deg)'};
            transition: transform 0.2s ease-in;
            color: red;
        }

`
export const ListContainer = styled.div`
    margin-top: 24px;

`
export const Cardlist = styled.div`
    background: #fff;
    padding: 16px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
    .info{
        .contact-name{
            display: flex;
            align-items: center;

            small {
                background: ${props => props.theme.colors.primary.lighter};
                color: ${props => props.theme.colors.primary.main};
                text-transform: uppercase;
                font-weight: bold;
                margin-left: 8px;
            }
        }
            span {
             display: block;
             color: ${props => props.theme.colors.grey[200]};
            }

    }
        .actions{
                button{
                    border: none;
                    background: transparent;
                    margin-left: 8px;
                }
            }

`

export const ContainerErrror = styled.header`
    display: flex;
    align-items: center;
    .mensagemError{
        margin-left: 24px;
        span{
            color: ${props => props.theme.colors.danger.main};
            font-size: 22px;
            font-weight: bold;
            margin-bottom: 8px;
            display: block;
        }
    }

`

export const EmptyListContainer = styled.div`
    display: flex;
    margin-top: 16px;
    align-items: center;
    flex-direction: column;

    p{
        color: ${props => props.theme.colors.grey[200]};
        margin-top: 16px;
        text-align: center;
    }
    strong{
        color: ${props => props.theme.colors.primary.main};
    }
    `

export const SearchNotFoundContainer = styled.div`
    color: ${props => props.theme.colors.grey[200]};
    display: flex;
    align-items: center;

    span{
        margin-left: 24px;
        word-break: break-word;
    }
`

