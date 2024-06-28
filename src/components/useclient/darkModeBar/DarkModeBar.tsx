"use client";
import React from "react";
import { IconSun, IconMoon } from "@/svg";
import styles from "./DarkModeBar.module.scss";
const DarkModeBar = () => {
  const handleDarkMode = () => {
    const input = document.getElementById("check") as HTMLInputElement | null;
    const ball = document.getElementById("ball");

    if (input && ball) {
      if (input.checked) {
        ball.style.transform = `translateX(100%)`;
      } else {
        ball.style.transform = `translateX(0%)`;
      }
    }
  };

  return (
    <div className={styles.darkMode}>
      <div className={styles.iconDarkMode}>
        <IconSun />
      </div>

      <div className={styles.mode}>
        <input
          onClick={() => handleDarkMode()}
          id="check"
          type="checkbox"
          name="check"
        />
        <label htmlFor="check">
          <div id="box" className={styles.box}>
            <div id="ball" className={styles.ball}></div>
          </div>
        </label>
      </div>

      <div className={styles.iconDarkMode}>
        <IconMoon />
      </div>

      <div></div>
    </div>
  );
};

export default DarkModeBar;
