import Head from "next/head";

export default function Home() {
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
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </main>
    </div>
  );
}
