import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --shape: #FFFFFF;
        --gray-50: #F3F2F2;
        --gray-100: #DDDCDA;
        --gray-200: #3C3F45;
        --gray-300: #B1AFAA;
        --gray-400: #9B9892;
        --gray-500: #85817A;
        --gray-600: #6A6762;
        --gray-700: #504E49;
        --gray-800: #353431;
        --gray-900: #1B1A18;
        --gray-950: #121214;

        --green-500: #00875f;
        --green-800: #2E7D32;
        --green-200: #A5D6A7;
        --yellow-500: #FFEB3B;
        --blue-200: #30cfd0;
        --blue-500: #2196F3;
        --blue-700: #084d6e;
        --red-500: #F44336;
        --red-700: ##6e2908;
        --purple-500: #9C27B0;
        --purple-700: #330867;
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
