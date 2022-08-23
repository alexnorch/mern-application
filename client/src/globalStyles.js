import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: sans-serif;
        color: ${({ theme }) => theme.colors.primary.dark};
        background-color: ${({ theme }) => theme.colors.secondary.white};
        min-height: 100vh;
    }

    ul {
        list-style: none;
    }

    a {
        text-decoration: none;
    }
    
    .btn {
        background: ${({ theme }) => theme.colors.secondary.shamrock};
        padding: 10px 15px;
        color: ${({ theme }) => theme.colors.primary.white};
        width: 100%;
        border-radius: 5px;
        border: none;
        outline: none;
        cursor: pointer;
    }

    .btn:disabled {
        opacity: 0.5;
        pointer-events: none;
    }

    .btn-toggler {
        border: none;
        cursor: pointer;
        border-bottom: 2px solid ${({ theme }) => theme.colors.primary.shamrock};
        background: none;
        margin-left: 5px;
    }

    .divider {
        display: inline-block;
        width: 100%;
        margin: 5px 0;
        border-bottom: 1px solid rgba(0,0,0,0.2);
    }
`;

export default GlobalStyle;
