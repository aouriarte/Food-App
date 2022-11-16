import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePage } from "../../redux/actions";

import "./Pagination.css";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

export default function Pagination() {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes);
  const recipesPerPage = useSelector((state) => state.recipesPerPage);
  const currentPage = useSelector((state) => state.currentPage);

  const pageNumbers = [];
  const allRecipes = recipes.length;
  for (let i = 1; i <= Math.ceil(allRecipes / recipesPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleChangePage = (e) => {
    dispatch(changePage(e.target.value));
  };

  return (
    <div>
      <ul className="ul">
        {pageNumbers && currentPage > 1 ? <button className="page_button" value="Prev" onClick={(e) => handleChangePage(e)}>
            <BsChevronLeft style={{fontSize: '14px'}} /></button> : null}
        {pageNumbers?.map((number) => (
          <button
            key={number}
            className={currentPage === number ? "current" : "page_button"}
            value={number}
            onClick={(e) => handleChangePage(e)}
          >
            {number}
          </button>
        ))}
        {pageNumbers && currentPage < pageNumbers.length ? <button className="page_button" value="Next" onClick={(e) => handleChangePage(e)}>
            <BsChevronRight style={{fontSize: '14px'}} /></button> : null}
      </ul>
    </div>
  );
}
