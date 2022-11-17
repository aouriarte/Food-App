import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllRecipes } from "../../redux/actions.js";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import NavBar from "../NavBar/NavBar";
import Pagination from "../Pagination/Pagination";
import Filters from "../Filter/Filters";
import Loading from "../Loading/Loading.jsx";

import styles from "./Home.module.css";

const Home = () => {
  const dispatch = useDispatch();
  const allRecipes = useSelector((state) => state?.recipes);

  // PAGINADO ---------------------------------------------------------
  const [order, setOrder] = useState("");
  const currentPage = useSelector((state) => state.currentPage);
  const recipesPerPage = useSelector((state) => state.recipesPerPage);
  const indexOfLastRecipes = currentPage * recipesPerPage;
  const indexOfFirsRecipes = indexOfLastRecipes - recipesPerPage;

  const currentRecipes = allRecipes?.slice(
    indexOfFirsRecipes,
    indexOfLastRecipes
  );

  //----------------------------------------------------------------
  useEffect(() => {
    if (allRecipes.length === 0) {
      dispatch(getAllRecipes());
    }
  }, [dispatch, allRecipes]);

  //---------------------------------------------------------------
  return (
    <div className={styles.home}>
      <NavBar />
      <Filters setOrder={setOrder} />
      <div className={styles.container}>
        {currentRecipes?.length < 1 ? (
          <Loading />
        ) : (
          currentRecipes?.map((r, i) => {
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
        <Pagination />
      </div>
    </div>
  );
};

export default Home;
