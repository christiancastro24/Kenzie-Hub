import styled from "styled-components"

export const Form = styled.form `
    max-width: 500px;
    margin: 10% auto;

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

`

export const Container = styled.div`
    display: flex;

    img {
        background-position: left center;
        margin-top: -4rem;
        height: 40rem;
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