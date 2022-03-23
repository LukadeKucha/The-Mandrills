import InvisibleText from "../../invisible-text-component";
import styles from "./styles.module.scss";

function ArtistSection() {
  return (
    <div className={`homeSection ${styles.artistWrapper}`}>
      <h1 className={`homeSectionTitle ${styles.artistTitle}`} id="NFT's">
        NFT&apos;s
      </h1>

      <div className={styles.fullArtist}>
        <div className={styles.halfArtist}>
          <img
            className={styles.photo1}
            src="/images/photo1.svg"
            alt="monkey NFT"
          />
          <img
            className={styles.photo2}
            src="/images/photo2.svg"
            alt="monkey NFT"
          />
          <img
            className={styles.photo3}
            src="/images/photo3.svg"
            alt="monkey NFT"
          />
        </div>

        <div className={styles.halfArtist}>
          <InvisibleText
            beforeHover="History"
            style={{
              width: "35rem",
              height: "30rem",
              fontSize: "1.5rem",
              lineHeight: "1.5rem",
              paddingLeft: "3.75rem",
              paddingRight: "1.5rem",
            }}
            bgi={"/images/historyBg.png"}
          >
            For centuries, serenity reigned in nature. The MANDRILLS were
            controlled and observed in this place, but suddenly a great mental
            cataclysm created the wild world, and it was to find and solve it.
            This is a community, whose team will lead this project also be in
            the metaverse worlds and will have its cryptocurrency which, will
            lead to many challenges in THE FUTURE.
          </InvisibleText>
        </div>
      </div>
    </div>
  );
}

export default ArtistSection;
