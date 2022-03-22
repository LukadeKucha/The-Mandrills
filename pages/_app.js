import Head from "next/head";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>the mandrills</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
