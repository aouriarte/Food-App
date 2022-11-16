import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipeDetail, cleanDetail } from "../../redux/actions";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading.jsx";

import img from "../../img/receta.jpg";
import styles from "./CardDetails.module.css";

export default function CardDetails(props) {
  const dispatch = useDispatch();
  const recipe = useSelector((state) => state.recipesDetails);

  useEffect(() => {
    dispatch(getRecipeDetail(props.match.params.id));
    dispatch(cleanDetail());
  }, [dispatch]);

  return (
    <div className={styles.details}>
      {recipe.length < 1 ? (
        <div className={styles.load}>
          <Loading />
        </div>
      ) : (
        <div className={styles.container}>
          <div className={styles.card}>
            <div className={styles.header}>
              <img
                src={recipe.image ? recipe.image : img}
                width="312px"
                height="231px"
                alt="Img not found"
              />
              <h2>{recipe.title}</h2>
              <label className={styles.label}>Diets: </label>
              {recipe.diets?.map((r, i) => {
                return (
                  <p className={styles.p} key={i}>
                    {r.charAt(0).toUpperCase() + r.slice(1)}
                  </p>
                );
              })}
            </div>
            <div className={styles.description}>
              <label className={styles.label}>Summary: </label>
              <p>{recipe.summary && recipe.summary.replace(/<[^>]+>/g, "")}</p>
              <label className={styles.label}>Health Score: </label>
              <p>{recipe.healthScore}</p>
              <label className={styles.label}>Steps: </label>
              <p>{recipe.steps}</p>
            </div>
          </div>
        </div>
      )}
      <Link to="/home">
        <button className={styles.button}>Go back</button>
      </Link>
    </div>
  );
}
