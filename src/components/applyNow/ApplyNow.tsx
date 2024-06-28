import React from "react";
import styles from "./ApplyNow.module.scss";
const ApplyNow = () => {
  return (
    <div className={styles.contenedor}>
      <div className={styles.contenido}>
        <div className={styles.positionBox}>
          <p className={styles.text}>Senior SoftWare Engineer</p>
          <p className={styles.company}>So Digital Inc.</p>
        </div>
        <button className={styles.btnApply}>apply now</button>
      </div>
    </div>
  );
};

export default ApplyNow;
