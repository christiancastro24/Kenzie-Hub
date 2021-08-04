import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    :root {
        --almostWhite: #f0f0f6;
        --Shadow: rgba(0, 0, 0, 0.8);
        --ColorShadow: rgba(0, 0, 0, 0.4);
        --BlueKenzie: #08043c;
        --White: #fff;
    }

    body {
        margin: 0;
        padding: 0;
        font-family: monospace;
        background-color: var(--almostWhite);
    }

    
`