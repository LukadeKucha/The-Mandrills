import InvisibleText from "../invisible-text-component";
import styles from "./styles.module.scss";

function WildNetworkSection() {
  return (
    <div className={styles.networkSection}>
      <h1 className={`homeSectionTitle ${styles.networkTitle}`}>
        Wild Network
      </h1>
      <InvisibleText
        beforeHover="About Us"
        size={{ width: "45.625rem", height: "38.25rem" }}
        bgi="/images/aboutusBg.png"
      >
        There is a union that will lead future METAVERSE, NFT, CRYPTO projects
        and become an advanced company on the market. over time, applications
        and games will be created that will satisfy the interest of people in
        the future.
      </InvisibleText>
    </div>
  );
}

export default WildNetworkSection;
