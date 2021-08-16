import styled from "styled-components";

const HeroBusinessPosts = ({ posts }) => {
  return (
    <StyledWrapper>
      {posts &&
        posts.postsCollection.items.map(({ banner, button }) => {
          const { title, subtitle, image } = banner;
          return (
            <div className="hero-post" key={title}>
              <div className="hero-post__row">
                <div
                  className="hero-post__image"
                  style={{ backgroundImage: `url(${image.url})` }}
                />
                <p className="hero-post__title">{title}</p>
                <p className="hero-post__subtitle">{subtitle}</p>
                <button className="hero-post__button">{button}</button>
              </div>
            </div>
          );
        })}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  width: 100%;
  padding: 20px 10px 60px;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
  }

  .hero-post {

    @media (min-width: 768px) {
      width: 300px;
      margin: 12px;
    }

    .hero-post__row {
      display: flex;
      flex-direction: column;
      align-items: center;
      flex-wrap: wrap;
      margin-bottom: 40px;
      font-weight: 300;
    }

    .hero-post__image {
      width: 100%;
      margin-bottom: 20px;
      height: 132px;
      background-repeat: no-repeat;
      background-position: center bottom;
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

    .hero-post__button {
      background-color: rgb(255, 122, 20);
      border-radius: 50px;
      padding: 7px 21px;
      color: white;
      font-size: 16px;
    }
  }
`;

export default HeroBusinessPosts;
