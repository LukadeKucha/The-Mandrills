import styles from "./styles.module.scss";

function FaqSection() {
  return (
    <div className={`homeSection ${styles.faqSection}`}>
      <h1 className={`homeSectionTitle ${styles.faqTitle}`}>FAQ</h1>

      <div className={styles.textWrapper}>
        <h3>FAQ</h3>

        {/* FIXME დებილურად ჩავწერე ერთ pთაგში. დაყოფა კარგი იქნება. */}
        <p>
          The Mandrills?! What`s that? <br />
          <br /> The Mandrills is an NFT and community project started by a
          group of friends. Utility project with a nice and smooth art.
          <br />
          <br /> Our team has a great technical and artistic vision but prefers
          to underpromise and overdeliver. We&apos;ll share more information as
          we get closer to milestones and will focus on execution until then.
          <br />
          <br />
          When will &quot;The Mandrills&quot; launch?
          <br />
          <br /> We&apos;re working very hard on the collection to release some
          time in February. We&apos;ll share more information as soon as we can
          and hope to make it by end of February.
          <br />
          <br /> “I`ve been offered an exclusive Minting opportunity / Presale /
          Airdrop by DM! Is that real?”
          <br />
          <br /> We will NEVER reach out to you directly for a mint. If the
          information is not posted by us in an official channel, it is a scam.
          <br />
          <br />
          How can I get a WL spot?
          <br />
          <br /> One important thing for us is to reward amazing behaviors in
          the community, rewards for great member behaviors include WL spots
          among others. We&apos;ll share more information about opportunities to
          gain WL spots through official Discord channels.
        </p>
      </div>
    </div>
  );
}

export default FaqSection;
