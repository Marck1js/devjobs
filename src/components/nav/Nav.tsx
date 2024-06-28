import React from "react";
import styles from "./Nav.module.scss";
import Image from "next/image";
import icon from "@assets/logo.svg";
import DarkModeBar from "../useclient/darkModeBar/DarkModeBar";
import Link from "next/link";

const Nav = () => {
  return (
    <div className={styles.contenedor}>
      <div className={styles.icon}>
        <Image src={icon} alt="Devjobs" width={115} height={32} />
      </div>

    


      <DarkModeBar />
    </div>
  );
};

export default Nav;
