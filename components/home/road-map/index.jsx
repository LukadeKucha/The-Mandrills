import styles from "./styles.module.scss";
import InvisibleText from "../invisible-text-component";

function RoadMapSection() {
  return (
    <div className={styles.roadMapSection}>
      <h1 className={`homeSectionTitle ${styles.roadMapTitle}`}>Road Map</h1>
      <div className={styles.textsWrapper}>
        <InvisibleText
          beforeHover="Goals"
          style={{ width: "38rem", height: "29rem" }}
          bgi={"/images/goalsBg.png"}
        >
          <ul>
            <li>
              PHASE 1: Q1 <br /> Release the Mandrills secondrary marketplaces.
              create game and Minecraft servers
            </li>
            <li>
              PHASE 2: Q2 <br /> Vip community membership (Wild Network) Special
              collaborations
            </li>
            <li>
              PHASE 3: Q3 <br /> Stake your nft for daily passive income (Wild
              coins) Release mutated Mandrills (Airdropped to holders)
            </li>
            <li>
              PHASE 4: Q4 <br /> Huge collaborations with big influencers Access
              to metaverse
            </li>
          </ul>
        </InvisibleText>
        <InvisibleText
          beforeHover="Financial Activisions"
          style={{ width: "38rem", height: "29rem" }}
        >
          <ul>
            <li>10% #slavaukraina goes to charity foundation of ukraine</li>
            <li>
              20% the one and only king of kings wild mandrilla will be
              auctioned on open sea
            </li>
            <li>
              40% we announce wn as independent company coming with huge
              projects
            </li>
            <li>
              60% we create youtube channel where we teach step by step creating
              your own nft project and etc…
            </li>
            <li>70% wild network will collaborate with huge metaverses</li>
            <li>
              80% we will give opportunity to 3 holders to win 1 week tour in
              our stunning country
            </li>
            <li>
              100% ancestor of mandrills the wild primates itself “THE BABOONS”
              conquer the market
            </li>
          </ul>
        </InvisibleText>
      </div>
      <div className="raw"></div>
    </div>
  );
}

export default RoadMapSection;
