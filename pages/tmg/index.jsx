import HomeNavbar from "../../components/navbar";
import styles from "./styles.module.scss";
import Link from "next/link";
import Image from "next/image";

function tmgPage(){
    return(
        <div className={styles.tmgWrapper}>
            <HomeNavbar/>   
              {/* icons */}
            <ul className={styles.socialIcons}>
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
}
export default tmgPage