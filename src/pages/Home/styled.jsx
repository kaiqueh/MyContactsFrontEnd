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
    border-radius: 25px;
    padding: 0 16px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    }

`

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 24px;
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
export const ListContainer = styled.div`
    margin-top: 24px;
    header {
        button{
            margin-bottom: 8px;
            border: none;
            background: transparent;
            display: flex;
            align-items: center;
        }
        span{
        color: ${props => props.theme.colors.primary.main};
        /* font-weigh: bold; */
        margin-right: 8px
        }

}
`
export const Cardlist = styled.div`
    background: #fff;
    padding: 16px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: space-between;
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
