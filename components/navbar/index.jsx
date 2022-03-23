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
          <a href="#NFT's">NFT’S</a>
          <a href="#Roadmap">ROADMAP</a>
          <a href="#Wild Network">WN</a>
          <a href="#FAQ">FAQ</a>
        </div>

        <div className={styles.column}>
          <a id="tmms">TMMS</a>
          <a>“The Mandrill Game”</a>
        </div>
      </div>
    </div>
  );
}

export default HomeNavbar;
