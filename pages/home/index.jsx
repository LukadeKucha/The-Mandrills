import Head from "next/head";

import styles from "./styles.module.scss";

import HomeNavbar from "../../components/home/navbar";
import ArtistSection from "../../components/home/artist";
import RoadMapSection from "../../components/home/road-map";
import WildNetworkSection from "../../components/home/wild-network";
import FaqSection from "../../components/home/FAQ";

function HomePage() {
  return (
    <div className={styles.HomePageWrapper}>
      <Head>
        <title>the mandrills - home</title>
      </Head>
      <HomeNavbar />
      <div className={styles.backgroundSection}>
        <div className={styles.bphoto}>
        <ArtistSection />
        <RoadMapSection />
        <WildNetworkSection />
        <FaqSection />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
