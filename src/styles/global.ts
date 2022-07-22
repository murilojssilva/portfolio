import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --red: #B12228;
        --shape: #FFFFFF;
        --gray-900: #121214; 

        --green-500: #00875f;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }
        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }
    body {
        background: ${(props) => props.theme.colors.background};
        color: ${(props) => props.theme.colors.text};
		-webkit-font-smoothing: antialiased;
    }
    body, input, textarea, button {
        font-family: "Poppins", sans-serif;
        font-weight: 400;
    }
    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }
    button {
        transform: filter 0.2s;
		&:hover{
			filter:brightness(0.9);
		}
    }
    input, button{
        cursor: pointer;
    }
    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;
