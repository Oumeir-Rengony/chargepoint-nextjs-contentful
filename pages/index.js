import Head from "next/head";
import Header from "../components/header";
import HeroBanner from "../components/hero-banner";
import { getHeroBanner, getNavbarLinks } from "../lib/api";

export default function Home({heroBannerItem, navbarItems}) {
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
      </main>
    </div>
  );
}

export async function getStaticProps({ preview = false }) {
  const navbarItems = (await getNavbarLinks(preview)) ?? [];
  const heroBannerItem =
    (await getHeroBanner("2rnwGP4Do9rt4mEInKkfgR", preview)) ?? [];

  return {
    props: {
      navbarItems,
      heroBannerItem,
    },
  };
}
