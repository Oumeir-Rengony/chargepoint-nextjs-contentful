import { createGlobalStyle } from 'styled-components'
import TypoStyles from '../styles/typography';

const GlobalStyle = createGlobalStyle`
  ${TypoStyles}
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Gotham-Narrow, Arial, sans-serif';
  }
`;

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
