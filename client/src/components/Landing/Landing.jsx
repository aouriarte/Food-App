import React from "react";
import { Link } from "react-router-dom";

import styles from "./Landing.module.css";
import logo from "../../img/logo.png";

export default function Landing() {
  return (
    <div className={styles.landing}>
      <img className={styles.img} src={logo} alt="" width={500} height={500} />
      <div className={styles.div}>
        <h1 className={styles.h1}>¡Welcome!</h1>
        <Link to="/home">
          <button className={styles.button}>Go Home</button>
        </Link>
      </div>
    </div>
  );
}
