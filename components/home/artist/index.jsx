import UnvisibleText from "../invisible-text-component";
import styles from "./styles.module.scss";

function ArtistSection() {
  return (
    <div className={styles.artistWrapper}>
      <h1 className={styles.artistTitle}>Artist</h1>
      <div className={styles.fullArtist}>
        <div className={styles.halfArtist}>
          <img
            className={styles.photo1}
            src="/images/photo1.png"
            alt="monkey NFT"
          />
          <img
            className={styles.photo2}
            src="/images/photo2.png"
            alt="monkey NFT"
          />
          <img
            className={styles.photo3}
            src="/images/photo3.png"
            alt="monkey NFT"
          />
        </div>

        <div className={styles.halfArtist}>
          <p className={styles.artistText}>
            This collection is currently handmade and every detail is created
            according to the design. The illustrations are specific to the
            wildlife
          </p>
          <UnvisibleText
            beforeHover="History"
            size={{ width: "22.5rem", height: "20rem", paddingLeft: "45px" }}
            bgi={"/images/historyBg.png"}
          >
            For centuries, serenity reigned in nature. The MANDRILLS were
            controlled and observed in this place, but suddenly a great mental
            cataclysm created the wild world, and it was to find and solve it.
            This is a community, whose team will lead this project also be in
            the metaverse worlds and will have its cryptocurrency which, will
            lead to many challenges in THE FUTURE.
          </UnvisibleText>
        </div>
      </div>
    </div>
  );
}

export default ArtistSection;
