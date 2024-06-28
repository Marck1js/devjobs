import React from "react";
import styles from "@styles/Card.module.scss";
import scoot from "@assets/logos/scoot.svg";
import Image from "next/image";
const Card = ({
  logo = './assets/logos/scoot.svg',
  color = "#e99210",
  time = "5h",
  kind = "full time",
  position = "senior software engineer",
  company = "scoot",
  country = "united kingdom",
}) => {

  return (
    <div className={styles.contenedor}>
      <div className={styles.iconJob} style={{ backgroundColor: color }}>
        <Image alt={company} src={logo} fill objectFit="scale-down" />
      </div>

      <div className={styles.detailPosition}>
        <p>
          <span className={`textCapitalize ${styles.textKind}`}>{time}</span>{" "}
          <span className={styles.textKind}> -</span>{" "}
          <span className={`textCapitalize ${styles.textKind}`}>{kind}</span>
        </p>

        <p className={`textCapitalize ${styles.textPosition}`}>{position}</p>

        <p className={`textCapitalize ${styles.textKind}`}>{company}</p>
      </div>
      <p className={`textCapitalize ${styles.textCountry}`}>{country}</p>
    </div>
  );
};

export default Card;
