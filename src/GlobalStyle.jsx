import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #2ec4b6;
  }

  a {
    color: black;
    text-decoration-line: none;
  }

  .main-container {
    max-width: 800px;
    width: 100%;
    margin: 0 auto;
    padding: 2rem;
  }
`;

export default GlobalStyle;
