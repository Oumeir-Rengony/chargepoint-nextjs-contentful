import Link from "next/link";
import styled from "styled-components";

const HeroBanner = ({ image, title, subtitle }) => {
  return (
    <StyledHeroBanner imageSource={image.url}>
      <div className="hero-text-wrapper">
        <h1 className="hero-banner__title">{title}</h1>
        <Link href="#">
          <a className="hero-banner__subtitle">{subtitle}</a>
        </Link>
      </div>
    </StyledHeroBanner>
  );
};

const StyledHeroBanner = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  background-image: url(${(props) => props.imageSource});
  background-size: cover;
  background-position: right;
  background-repeat: no-repeat;

  @media (min-width: 768px) {
    height: 480px;
    background-position: 78%;
  }

  @media (min-width: 1024px) {
    background-position: right;
  }

  .hero-text-wrapper {
    position: absolute;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.25);
    padding: 15px;

    @media (min-width: 768px) {
      background: none;
      left:50px;
      bottom:100px;
    }

    @media (min-width: 1160px) {
      transform: translateX(-50%);
      left:40%;
    }

    @media (min-width: 1440px) {
      transform: translateX(-50%);
      left:50%;
    }

    .hero-banner__title {
      font-size: 24px;
      font-weight: 300;
      color: white;
      margin-bottom: 20px;

      @media (min-width: 768px) {
        width: 520px;
        font-size: 50px;
      }
    }
  }

  .hero-banner__subtitle {
    font-size: 19px;
    font-weight: 200;
    color: white;

    @media (min-width: 768px) {
      font-size: 30px;
    }
  }
`;

export default HeroBanner;
