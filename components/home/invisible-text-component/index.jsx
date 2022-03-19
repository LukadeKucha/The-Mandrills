import styles from "./styles.module.scss";

function InvisibleText({ children, beforeHover, size, bgi }) {
  const wrapperStyle = bgi
    ? { ...size, backgroundImage: `url(${bgi})` }
    : {
        ...size,
        background: "rgba(0, 0, 0, 0.7)",
        border: "0.375rem solid #15156f",
        boxShadow: "inset 12px 11px 6px rgba(0, 0, 0, 0.25)",
        borderRadius: "3.75rem",
      };

  return (
    <div className={styles.textWrapper} style={wrapperStyle}>
      <p className={styles.beforeHover}>{beforeHover}</p>
      <p className={styles.afterHover}>{children}</p>
    </div>
  );
}

export default InvisibleText;
