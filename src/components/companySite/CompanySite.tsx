import React from "react";
import styles from "./CompanySite.module.scss";
import Image from "next/image";
import logo2 from "@assets/logos/scoot.svg";
const CompanySite = ({ logo, color }: { logo?: string; color?: string }) => {
  return (
    <div className={styles.contenedor}>
      <div
        className={styles.logoJob}
        style={{ backgroundColor: color ? color : "#000" }}
      >
        <Image alt={"Logo"} src={logo2} objectFit="scale-down"  />
      </div>

      <div className={styles.brandText}>
        <p className={styles.title}>scoot</p>
        <p className={styles.page}>scoot.com</p>
      </div>

      <button className={styles.companySite}>company site</button>
    </div>
  );
};

export default CompanySite;
