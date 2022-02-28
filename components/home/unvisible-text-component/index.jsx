import styles from "./styles.module.scss";

function UnvisibleText({ children, beforeHover, size }) {
  return (
    <div className={styles.textWrapper} style={size}>
      <p className={styles.beforeHover}>{beforeHover}</p>
      <p className={styles.afterHover}>{children}</p>
    </div>
  );
}

export default UnvisibleText;
