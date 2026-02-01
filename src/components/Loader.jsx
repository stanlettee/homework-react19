import styles from "./styles/Loader.module.css";
import React from "react";

export const Loader = React.memo(() => {
  return (
    <div className={styles.loaderWrap}>
      <div className={styles.spinner}></div>
    </div>
  );
})