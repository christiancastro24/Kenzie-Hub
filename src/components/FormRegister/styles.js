import styled from "styled-components"

export const Form = styled.form `
    max-width: 500px;
    margin: 0.3% auto;

    h1 {
        margin: 10%;
        color: rgba(0, 0, 0, 0.8);
    }

    input {
        max-width: 18rem;
        width: 17rem;
        box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.4);
        height: 1.8rem;
    }

    button {
        margin: 0.3rem auto;
        text-align: center;
        display: block;

    }

    button:hover {
        filter: brightness(1.5);
    }
`

export const Container = styled.div`
    display: flex;

    img {
        background-position: left center;
        margin-top: 6rem;
        margin-left: 2rem;
    }

    h5 {
        color: red;
    }

    @media (max-width: 1150px) {
        img {
            display: none;
        }
    }
 `