import React from "react";

export default function Pagination({ recipesPerPage, allRecipes, pagination }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allRecipes / recipesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <ul>
        {pageNumbers?.map((number) => (
          <div key={number}>
            <button onClick={() => pagination(number)}>{number}</button>
          </div>
        ))}
      </ul>
    </div>
  );
}
