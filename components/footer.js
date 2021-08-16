import Link from "next/link";
import styled from "styled-components";

const Footer = ({ footerLinks }) => {
  return (
    <StyledFooter>
      <div className="logo-container">
        <Link href="/">
          <img className="logo" src="/images/logo.svg" />
        </Link>
      </div>

      {footerLinks.items.map((_item) => {
        return (
          <div className="footer-content" key={_item.title}>
            <ul>
              {_item.categoryCollection.items.map(({ title }, index) => {
                let classes = `footer-link ${
                  index === 0 ? "footer-link__header" : null
                }`;
                return (
                  <li key={title}>
                    <Link href="/test">
                      <a className={classes}>{title}</a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  width: 100%;
  background: #cbd6df;
  display: flex;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    justify-content: space-evenly;
    padding: 16px;
  }

  .logo-container {
    width: 100%;
    text-align: center;
    padding: 20px;
  }

  .footer-content {
    margin: 20px 16px;

    .footer-link {
      font-size: 16px;
      color: rgb(85, 85, 85);
      font-weight: 300;
    }

    .footer-link__header {
      font-size: 18px;
      font-weight: 500;
    }
  }
`;

export default Footer;
