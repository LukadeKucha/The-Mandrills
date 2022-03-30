import Head from "next/head";
import UpArrow from "../components/up-arrow";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>the mandrills</title>
      </Head>
      <Component {...pageProps} />
      <UpArrow />
    </>
  );
}
export default MyApp;
