import { Fragment } from "react";
import styled, { css } from "styled-components";

const HeroInformationPosts = ({ posts }) => {
  return (
    <StyledWrapper>
      {posts &&
        posts.postsCollection.items.map(({ banner, text }, index) => {
          const { title, subtitle, image } = banner;
          return (
            <Fragment key={title}>
              <div className="dashbolt" />
              <div
                className={`hero-post ${
                  index % 2 === 1 ? "direction-reverse" : ""
                }`}
              >
                <div
                  className="hero-post__image"
                  style={{ backgroundImage: `url(${image.url})` }}
                />
                <div className="hero-post__header">
                  <p className="hero-post__title">{title}</p>
                  <p className="hero-post__subtitle">{subtitle}</p>
                  <p className="hero-post__para">{text}</p>
                </div>
              </div>
            </Fragment>
          );
        })}
    </StyledWrapper>
  );
};


const StyledWrapper = styled.div`
  width: 100%;
  padding: 20px 10px 20px;

  .dashbolt {
    background-image: url(/dashbolt.svg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 190px;
    height: 10px;
    margin: 10px auto;

    @media (min-width: 768px) {
      width: 60%;
    }

    @media (min-width: 1024px) {
      width: 70%;
      height: 15px;
    }

    @media (min-width: 1024px) {
      width: 70%;
      height: 18px;
    }

  }

  .hero-post {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-bottom: 40px;
    font-weight: 300;

    @media (min-width: 768px) {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
    }

    .hero-post__image {
      width: 300px;
      margin-bottom: 20px;
      height: 240px;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
    }

    .hero-post__header {
      @media (min-width: 768px) {
        width: 400px;
      }

      .hero-post__title {
        font-size: 19px;
        color: rgb(255, 122, 20);
        margin-bottom: 10px;
      }

      .hero-post__subtitle {
        font-size: 15px;
        color: rgb(85, 85, 85);
        margin: 0 auto 24px;
        color: rgb(85, 85, 85);
      }

      .hero-post__para {
        margin-bottom: 15px;
        font-size: 16px;
        color: rgb(85, 85, 85);
      }
    }
  }

  @media (min-width: 768px) {
    .direction-reverse {
      flex-direction: row-reverse;
    }
  }
`;

export default HeroInformationPosts;
