import React from "react";
import { ReactNode } from "react";

import styles from "./Header.module.scss";
import Image from "next/image";
import bg from "@assets/bg-pattern-header.svg";
import Nav from "../nav/Nav";
import FormSearch from "../formSearch/FormSearch";
import Link from "next/link";

interface Props {
  children: ReactNode;
}

const Header: React.FC<Props> = ({ children }) => {
  return (
    <>
      <header className={styles.contenedor}>
        <Image src={bg} alt="devjobs" fill />
        <Nav />
      </header>
      <div className={styles.children}>{children}</div>
    </>
  );
};

export default Header;
