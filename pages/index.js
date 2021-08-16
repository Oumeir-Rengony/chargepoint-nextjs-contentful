import Head from "next/head";
import Header from "../components/header";
import HeroBanner from "../components/hero-banner";
import HeroBusinessPosts from "../components/hero-business-posts";
import HeroInformationPosts from "../components/hero-information-posts";
import Footer from "../components/footer";

import {
  getHeroBanner,
  getHeroBusinessPosts,
  getNavbarLinks,
  getHeroInformationPosts,
  getFooterItems,
} from "../lib/api";

export default function Home({
  heroBannerItem,
  navbarItems,
  heroBusinessPosts,
  heroInformationPosts,
  footerItems,
}) {
  return (
    <div>
      <Head>
        <title>ChargePoint</title>
        <meta
          name="description"
          content="A statically generated site using Next.js and Contentful CMS."
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preload"
          href="/fonts/GothamNarrSSm-XLight.woff"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/GothamNarrSSm-Light.woff"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/GothamNarrSSm-Medium.woff"
          as="font"
          crossOrigin=""
        />
      </Head>

      <Header navLinks={navbarItems} />

      <main>
        <HeroBanner
          title={heroBannerItem.title}
          subtitle={heroBannerItem.subtitle}
          image={heroBannerItem.image}
        />

        <HeroBusinessPosts posts={heroBusinessPosts} />

        <HeroInformationPosts posts={heroInformationPosts} />
      </main>

      <Footer footerLinks={footerItems} />
    </div>
  );
}

export async function getStaticProps({ preview = false }) {
  const navbarItems = (await getNavbarLinks(preview)) ?? [];
  const heroBannerItem =
    (await getHeroBanner("2rnwGP4Do9rt4mEInKkfgR", preview)) ?? [];
  const heroBusinessPosts = (await getHeroBusinessPosts(preview)) ?? [];
  const heroInformationPosts = (await getHeroInformationPosts(preview)) ?? [];
  const footerItems =
    (await getFooterItems("6MvmuULrfOogVp3ggKX7nY", preview)) ?? [];

  return {
    props: {
      navbarItems,
      heroBannerItem,
      heroBusinessPosts,
      heroInformationPosts,
      footerItems,
    },
  };
}
