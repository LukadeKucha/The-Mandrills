import styles from "./styles.module.scss";

import HomeFooter from "../../components/home/footer";
import HomeNavbar from "../../components/home/navbar";
import ArtistSection from "../../components/home/artist";
import RoadMapSection from "../../components/home/road-map";
import WildNetworkSection from "../../components/home/wild-network";
import FaqSection from "../../components/home/FAQ";

function HomePage() {
  return (
    <div className={styles.HomePageWrapper}>
      <HomeNavbar />
      <div className={styles.backgroundSection}>
        <ArtistSection />
        <RoadMapSection />
        <WildNetworkSection />
        <FaqSection />
      </div>
      <HomeFooter />
    </div>
  );
}

export default HomePage;
