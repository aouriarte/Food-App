import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cleanRecipes, getAllRecipes } from "../../redux/actions.js";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import NavBar from "../NavBar/NavBar";
import Pagination from "../Pagination/Pagination";
import Filters from "../Filter/Filters";

import styles from "./Home.module.css";

export default function Home() {
  const dispatch = useDispatch();
  const allRecipes = useSelector((state) => state.allRecipes);

  // PAGINADO ---------------------------------------------------------
  const [order, setOrder] = useState("");
  const [page, setPage] = useState(1);
  const [recipesPerPage, setRecipesPerPage] = useState(9);
  const indexOfLastRecipes = page * recipesPerPage;
  const indexOfFirsRecipes = indexOfLastRecipes - recipesPerPage;

  const currentRecipes = allRecipes.slice(
    indexOfFirsRecipes,
    indexOfLastRecipes
  );

  const pagination = (pageNumber) => {
    setPage(pageNumber);
  };

  // LIMPIAR FILTRADOS -------------------------------------------
  const handleClean = (e) => {
    e.preventDefault();
    dispatch(cleanRecipes(dispatch));
    dispatch(getAllRecipes());
  };

  useEffect(() => {
    dispatch(getAllRecipes());
  }, [dispatch]);

  //---------------------------------------------------------------
  return (
    <div className={styles.home}>
      <NavBar />
      <div className={styles.filter}>
        <Filters setPage={setPage} setOrder={setOrder} />
        <div className={styles.divThree}>
          <button className={styles.button} onClick={(e) => handleClean(e)}>
            Clear filters
          </button>
        </div>
      </div>
      <br></br>
      <div className={styles.container}>
        {currentRecipes.length < 1 ? (
          <div className={styles.loading}>
            <span className={styles.dot}></span>
            <span className={styles.dot}></span>
            <span className={styles.dot}></span>
          </div>
        ) : (
          currentRecipes?.map((r,i) => {
            return (
              <div className={styles.cards} key={i}>
                <Card
                  key={r.id}
                  image={r.image}
                  title={r.title}
                  diets={r.diets}
                />
                <div>
                  <Link to={`/recipe/${r.id}`}>
                    <button className={styles.b}>See details</button>
                  </Link>
                </div>
              </div>
            );
          })
        )}
      </div>
      <div>
        <Pagination
          recipesPerPage={recipesPerPage}
          allRecipes={allRecipes.length}
          pagination={pagination}
        />
      </div>
    </div>
  );
}
