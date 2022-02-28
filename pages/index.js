import Link from "next/link";
import Image from "next/image";

import styles from "/styles/welcome.module.scss";

import { BsDiscord, BsTwitter, BsInstagram } from "react-icons/bs";
import Head from "next/head";

const WelcomePage = () => {
  return (
    <div className={styles.welcomePageWrapper}>
      <Head>
        <title>the mandrills - welcome</title>
      </Head>

      <div className={styles.videoSection}>Video Section</div>

      <div className={styles.photoSection}>
        <div className={styles.forSymmetric}>
          <h1>
            A limited NFT collection of old world mandrills. Join in and be wild
            primate with us. You sent
          </h1>
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
