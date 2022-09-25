import React from "react";
import styles from './Pagination.module.css';

export default function Pagination({ recipesPerPage, allRecipes, pagination }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allRecipes / recipesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <ul className={styles.ul}>
        {pageNumbers?.map((number) => (
          <div className={styles.div} key={number}>
            <button className={styles.button} onClick={() => pagination(number)}>{number}</button>
          </div>
        ))}
      </ul>
    </div>
  );
}
