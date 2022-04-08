import Image from "next/image";
import Link from "next/link";
import { slide as Menu } from "react-burger-menu";
import styles from "./styles.module.scss";

function HomeNavbar() {
  return (
    <div className={styles.navbarWrapper}>
      <div className={styles.logoWrapper}>
        <a href="/">
          <Image src="/images/logo.png" alt="logo" width={142} height={142} />{" "}
        </a>

        <div className={styles.companyName}>
          <div>THE</div>
          <div>MANDRILLS</div>
        </div>
      </div>

      <div className={styles.sectionsList}>
        <div className={styles.column}>
          <Link href="/home#NFT's">
            <button>NFT&apos;s</button>
          </Link>
          <Link href="/home#Roadmap">
            <button>ROADMAP</button>
          </Link>
          <Link href="/home#Wild-Network">
            <button>WILD NETWORK</button>
          </Link>
          <Link href="/home#FAQ">
            <button>FAQ</button>
          </Link>
        </div>

        <div className={styles.column}>
          <Link href="/tmms">
            <button>The Mandrill Network</button>
          </Link>
          <Link href="/tmg">
            <button>“The Mandrill Game”</button>
          </Link>
        </div>
      </div>

      <Menu width={"40%"} right>
        <div className={styles.hamburgerMenuList}>
          <Link href="/home#NFT's">
            <button>NFT&apos;s</button>
          </Link>
          <Link href="/home#Roadmap">
            <button>ROADMAP</button>
          </Link>
          <Link href="/home#Wild-Network">
            <button>WILD NETWORK</button>
          </Link>
          <Link href="/home#FAQ">
            <button>FAQ</button>
          </Link>

          <Link href="/tmms">
            <button>TMMS</button>
          </Link>
          <Link href="/tmg">
            <button>“The Mandrill Game”</button>
          </Link>
        </div>
      </Menu>
    </div>
  );
}

export default HomeNavbar;
