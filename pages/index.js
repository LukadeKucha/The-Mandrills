import Link from "next/link";
import Image from "next/image";

import styles from "/styles/welcome.module.scss";

import { BsDiscord, BsTwitter, BsInstagram } from "react-icons/bs";

const WelcomePage = () => {
  return (
    <div className={styles.welcomePageWrapper}>
      <div className={styles.videoSection}>Video Section</div>

      <div className={styles.photoSection}>
        <div className={styles.forSymmetric}>
          {/* <h2 className="home-text">
            TMWN is a collection of 4000 THE MANDRILL NFTs—unique digital
            collectibles living on the Solana blockchain. Your Mandrills doubles
            as your WN membership card, and grants access to members-only
            benefits, the first of which is access to JUNGLE, a collaborative
            graffiti board. Future areas and perks can be unlocked by the
            community through roadmap activation.
          </h2> */}
        </div>

        <div className={styles.joutneyBtnWrapper}>
          <Link href="/home" passHref>
            <button className={styles.startJoutneyBtn}>Start Journy</button>
          </Link>
        </div>

        <div className={styles.mandrillsGif}>
          <Image
            src="/images/gif.png"
            alt="mandrils gif"
            width={275}
            height={315}
          />
        </div>

        <ul className={styles.sicialIcons}>
          <li>
            <Link href="https://discord.gg/tbsBgSct6K" passHref>
              <a target="_blank" rel="noreferrer">
                <BsDiscord />
              </a>
            </Link>
          </li>
          <li>
            <Link
              href="https://twitter.com/TheMAndrillsWN?t=cCblJhVkddwLIllEwH9QsQ&s=09"
              passHref
            >
              <a target="_blank" rel="noreferrer">
                <BsTwitter />
              </a>
            </Link>
          </li>
          <li>
            <Link href="https://www.instagram.com/the_mandrilas/" passHref>
              <a target="_blank" rel="noreferrer">
                <BsInstagram />
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WelcomePage;
