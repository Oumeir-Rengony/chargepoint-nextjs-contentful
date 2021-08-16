import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";

const Header = ({ navLinks }) => {
  const [isActive, setActive] = useState(false);

  const showNavbar = () => {
    setActive(!isActive);
  };

  return (
    <StyledWrapper>
      <div className="hamburger" onClick={showNavbar}>
        <span className={`bar ${isActive ? "bar-top-close" : ""}`}></span>
        <span className={`bar ${isActive ? "bar-middle-close" : ""}`}></span>
        <span className={`bar ${isActive ? "bar-bottom-close" : ""}`}></span>
      </div>

      <Link href="/">
        <img className="logo" src="/images/logo.svg" />
      </Link>

      <div className={`navbar ${isActive ? "active" : "null"}`}>
        {navLinks &&
          navLinks.navlinksCollection.items.map(({ title }) => {
            return (
              <Link href="/test" key={title}>
                <a className="nav-link">{title}</a>
              </Link>
            );
          })}
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  width: 100%;
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  background: #fff;
  z-index: 2;
  padding: 10px;

  .hamburger {
    display: inline-block;
    width: 25px;
    cursor: pointer;

    @media (min-width: 768px) {
      display: none;
    }

    .bar {
      display: block;
      height: 3px;
      margin: 5px auto;
      background-color: rgb(121, 155, 174);
    }

    .bar-top-close {
      transform: rotate(45deg);
      transform-origin: 10% 180%;
    }

    .bar-middle-close {
      opacity: 0;
    }

    .bar-bottom-close {
      transform: rotate(-45deg);
      transform-origin: 13% -60%;
    }
  }

  .logo {
    margin: 0 auto;
  }

  @media (min-width: 768px) {
    .logo {
      margin: 8px 0 0;
    }
  }

  .navbar {
    display: none;
    width: 90%;
    height: 100vh;
    background: #e4eff2;
    position: absolute;
    top: 100%;
    left: 0;

    @media (min-width: 768px) {
      display: inline-block;
      height: unset;
      position: relative;
      background: none;
      text-align:end;
    }

    .nav-link {
      padding: 20px;
      color: #536d8e;
      font-size: 16px;
    }

  }

  .active {
    display: flex;
    flex-direction: column;
  }
`;

export default Header;
