import styled from "styled-components"

export const Container = styled.div`
    height: 75px;
    width: 100%;
    background-color: var(--BlueKenzie);
    display: flex;
    justify-content: flex-end;
    
    a {
        text-decoration: none;       
    }
   

    h1 {
        color: var(--White);
        position: absolute;
        top: 0.4rem;
        left: 4rem;
        font-family: 'Roboto', sans-serif;
    }

    @media (min-width: 300px) and (max-width: 790px){
        h1 {
        display: none;
    }
    

    }
    h3 {
        margin-top: 0.5rem;
        margin-left: auto;
        color: var(--White);
        line-height: 4.5rem;
        margin-right: 6.5rem;
        font-size: 1.1rem;
        
    }

    img {
        position: relative;
        top: 0.30rem;
        right: 0.3rem;
    }
    
    button {
        margin-right: 5.5rem;
        margin-top: 1.3rem;
        background-color: transparent;
        width: 7rem;
        color: var(--White);
        background-color: red;
        padding: 0.4rem;
        border-radius: 0.5rem;
        font-weight: bold;
    }
`