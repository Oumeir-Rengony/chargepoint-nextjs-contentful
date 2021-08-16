async function fetchGraphQL(query, preview = false) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          preview
            ? process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
    }
  ).then((response) => response.json());
}

export async function getNavbarLinks(preview) {
  const entries = await fetchGraphQL(
    `query {
          navbarCollection(preview: ${preview ? "true" : "false"}, limit: 10) {
                items {
                  navlinksCollection (preview: ${
                    preview ? "true" : "false"
                  }, limit: 10){
                    items {
                      ... on NavbarItems {
                        title,
                        url
                      }
                    }
                  }
                }
              }
        }`,
    preview
  );

  return entries?.data?.navbarCollection?.items[0];
}

export async function getHeroBanner(id, preview) {
  const entries = await fetchGraphQL(
    `query {
      bannerCollection(where : {sys : { id : "${id}" }},preview: ${preview ? "true" : "false"}, limit: 10) {
        items {
          title,
          subtitle,
          image{
            url
          }    
        }
      }
    }`,
    preview
  );

  return entries?.data?.bannerCollection?.items[0];
}

export async function getHeroBusinessPosts(preview) {
  const entries = await fetchGraphQL(
    `query {
      heroBusinessPostsCollection(preview: ${preview ? "true" : "false"}, limit: 10) {
        items {
          title,
          postsCollection(preview: ${preview ? "true" : "false"}, limit: 10){
            items{
              ... on HeroPost{
                banner {
                  ... on Banner{
                    title,
                    subtitle,
                    image{
                      url
                    }
                  }
                },
                button
              }
            }
          }
        }
      }
    }`,
    preview
  );

  return entries?.data?.heroBusinessPostsCollection?.items[0];
}
