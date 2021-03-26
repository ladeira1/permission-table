import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
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
    background-color: ${({ theme }) => theme.colors.white};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    color: ${({ theme }) => theme.colors.black};
    font-family: ${({ theme }) => theme.fonts.roboto};
  }

  h1, h2, h3, h4, h5, h6, strong {
    color: ${({ theme }) => theme.colors.black};
    font-family: ${({ theme }) => theme.fonts.roboto};
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
