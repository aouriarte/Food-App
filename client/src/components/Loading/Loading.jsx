import React from "react";
import styles from './Loading.module.css';

export default function Loading() {
  return (
    <div className={styles.loading}>
      <span className={styles.dot}></span>
      <span className={styles.dot}></span>
      <span className={styles.dot}></span>
    </div>
  );
}
