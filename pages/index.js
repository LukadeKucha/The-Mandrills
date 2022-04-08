/* eslint-disable jsx-a11y/media-has-caption */
import Link from "next/link";
import Image from "next/image";
// import ReactPlayer from "react-player";

import styles from "/styles/welcome.module.scss";
import Head from "next/head";

const WelcomePage = () => {
  return (
    <div className={styles.welcomePageWrapper}>
      <Head>
        <title>the mandrills - welcome</title>
      </Head>

      {/* TODO Delete style */}
      <div className={styles.videoSection} style={{ color: "white" }}>
        Video Section
      </div>

      <div className={styles.photoSection}>
        <div className={styles.forSymmetric}>
          <h1>
            A limited NFT collection of old world mandrills. Join in and be wild
            primate with us. You sent
          </h1>
        </div>

        <div className={styles.journeyBtnWrapper}>
          <Link href="/home" passHref>
            <button className={styles.startJoutneyBtn}>Start Journy</button>
          </Link>
        </div>

        <div className={styles.mandrillsGif}>
          <video autoPlay loop muted>
            <source src="/videos/Untitled.webm" type="video/mp4" />
          </video>
        </div>
      </div>

      <ul className={styles.sicialIcons}>
        <li>
          <Link href="https://discord.gg/tbsBgSct6K" passHref>
            <a target="_blank" rel="noreferrer">
              <Image src={"/images/discord_icon.svg"} width={25} height={25} />
            </a>
          </Link>
        </li>
        <li>
          <Link
            href="https://twitter.com/TheMAndrillsWN?t=cCblJhVkddwLIllEwH9QsQ&s=09"
            passHref
          >
            <a target="_blank" rel="noreferrer">
              <Image src={"/images/twitter_icon.svg"} width={25} height={25} />
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://www.instagram.com/the_mandrilas/" passHref>
            <a target="_blank" rel="noreferrer">
              <Image
                src={"/images/instagram_icon.svg"}
                width={25}
                height={25}
              />
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default WelcomePage;
