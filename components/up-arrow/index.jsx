import { useRouter } from "next/router";
import { BsArrowUp } from "react-icons/bs";

import styles from "./styles.module.scss";

function UpArrow() {
  const router = useRouter();

  const onBtnClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <button
      className={styles.arrowButton}
      style={router.pathname === "/" ? { display: "none" } : {}}
      onClick={onBtnClick}
    >
      <BsArrowUp />
    </button>
  );
}

export default UpArrow;
