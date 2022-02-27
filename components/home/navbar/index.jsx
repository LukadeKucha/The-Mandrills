import Image from "next/image";

import styles from "./styles.module.scss";

function HomeNavbar() {
  return (
    <div className={styles.navbarWrapper}>
      <div className={styles.logoWrapper}>
        <Image src="/images/logo.png" alt="logo" width={142} height={142} />

        <div className={styles.companyName}>
          <div>THE</div>
          <div>MANDRILLS</div>
        </div>
      </div>

      <div className={styles.sectionsList}>
        <div className={styles.column}>
          <div>NFT’S</div>
          <div>ROADMAP</div>
          <div>WN</div>
        </div>
        <div className={styles.column}>
          <div>“The Mandrill Game”</div>
          <div>TMMS</div>
        </div>
        <div className={styles.column}>
          <div>FAQ</div>
        </div>
      </div>
    </div>
  );
}

export default HomeNavbar;
