import React from "react";
import SearchBar from "./SearchBar/SearchBar";
import { Link } from "react-router-dom";

import logo from "../../img/logo.png";
import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <header className={styles.header}>
        <img
          className={styles.img}
          id="logo"
          src={logo}
          alt="Logo not found"
          width={100}
          height={100}
        />
        <h1 className={styles.h1}>Food App</h1>
      <Link to="/create">
        <button className={styles.button}>Create recipe</button>
      </Link>
      <div className={styles.div}>
        <SearchBar />
      </div>
    </header>
  );
}
