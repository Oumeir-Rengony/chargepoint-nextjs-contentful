import { createGlobalStyle } from "styled-components";
import TypoStyles from "../styles/typography";

const GlobalStyle = createGlobalStyle`
  ${TypoStyles}
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    font-family: 'Gotham-Narrow', Arial, sans-serif;
  }

  li{
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  button{
    cursor: pointer;
    border: none;
    text-decoration: none;
  }

`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
