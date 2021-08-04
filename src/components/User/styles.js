import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 10%;

    div {
        display: flex;
        flex-direction: column;
        background-color: var(--BlueKenzie);
        color: var(--White);
        padding: 0.6rem;
        border-radius: 0.5rem;
        width: 25rem;
    }
    
    img {
        height: 25rem;
    }

    h2 {
        font-family: 'Roboto', sans-serif;
    }

    h4 {
        font-family: 'Roboto Condensed', sans-serif;
        padding-left: 0.3rem;
    }

    span {
        position: relative;
        top: 0.4rem;
    }


    @media (min-width: 300px) and (max-width: 960px) {

        img {
        width: 18rem;
        margin: 1rem;
        }
        
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        margin: 2rem;
        width: 23rem;
    }  
`

export const Header = styled.div`
    background-color: var(--BlueKenzie);
    height: 75px;
    color: #fff;
    width: 100%;

    button {
        background-color: red;
        width: 6rem;
        text-align: center;
    }
`