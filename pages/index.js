import Link from "next/link";

import { BsDiscord, BsTwitter, BsInstagram } from "react-icons/bs";

const HomePage = () => {
  return (
    <div className="main-wrap">
      <div className="b-video"></div>
      <div className="b-photo">
        <h2 className="home-text">
          TMWN is a collection of 4000 THE MANDRILL NFTs—unique digital
          collectibles living on the Solana blockchain. Your Mandrills doubles
          as your WN membership card, and grants access to members-only
          benefits, the first of which is access to JUNGLE, a collaborative
          graffiti board. Future areas and perks can be unlocked by the
          community through roadmap activation.
        </h2>
        <div className="home-gif"></div>
        <div className="home-links">
          <ul>
            <li>
              <a href="https://discord.gg/tbsBgSct6K">
                <BsDiscord />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/TheMAndrillsWN?t=cCblJhVkddwLIllEwH9QsQ&s=09">
                <BsTwitter />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/the_mandrilas/">
                <BsInstagram />
              </a>
            </li>
          </ul>
        </div>
        <Link href="/en" passHref>
          <button className="main-buttons">Start Journy</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
