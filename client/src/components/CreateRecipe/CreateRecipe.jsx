import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { postRecipe, getAllDiets, cleanRecipes } from "../../redux/actions";
import validate from "./validate/validate";

import styles from "./CreateRecipe.module.css";

export default function CreateRecipe() {
  const dispatch = useDispatch();
  const history = useHistory();
  const allDiets = useSelector((state) => state.allDiets);
  const [errors, setErrors] = useState({});

  // ESTADOS LOCALES ---------------------------------------------------------------------
  const [input, setInput] = useState({
    title: "",
    summary: "",
    healthScore: "",
    steps: "",
    image: "",
    diets: [],
  });

  // HANDLES ----------------------------------------------------------------------------
  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  // SELECCIONAR DIETA:
  const handleCheckDiet = (e) => {
    if (e.target.checked && !input.diets.includes(e.target.value)) {
      setInput({
        ...input,
        diets: [...input.diets, e.target.value],
      });
    } else if (!e.target.checked) {
      setInput({
        ...input,
        diets: input.diets.filter((d) => d !== e.target.value),
      });
    }
  };

  // REVISIÓN DEL FORMULARIO --------------------------------------
  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.keys(errors).length !== 0) {
      alert("Error. Check the form");
    } else if (!input.title.length) {
      alert("The title is required");
    } else if (!input.diets.length) {
      alert("Select at least one diet");
    } 
    else {
      dispatch(postRecipe(input));
      alert("¡Your recipe is created!");
      setInput({
        title: "",
        summary: "",
        healthScore: "",
        steps: "",
        image: "",
        diets: [],
      });
      dispatch(cleanRecipes(dispatch));
      history.push("/home");
    }
  };

  useEffect(() => {
    dispatch(getAllDiets());
  }, [dispatch]);

  //--------------------------------------------------------------------------------------
  return (
    <div className={styles.create}>
      <div className={styles.container}>
        <form onSubmit={(e) => handleSubmit(e)} className={styles.form}>
          <div className={styles.header}>
            <label className={styles.label}>Title: </label>
            <input
              type="text"
              name="title"
              placeholder="Title"
              autoComplete="off"
              value={input.title}
              onChange={(e) => handleChange(e)}
              className={styles.input}
            ></input>
            {errors.title && <p className={styles.p}>{errors.title}</p>}
            <label className={styles.label}>Summary: </label>
            <textarea
              type="text"
              name="summary"
              maxLength="1000"
              placeholder="Summary of your recipe"
              autoComplete="off"
              value={input.summary}
              onChange={(e) => handleChange(e)}
              className={styles.textarea}
            ></textarea>
            {errors.summary && <p className={styles.p}>{errors.summary}</p>}
            <label className={styles.label}>Steps: </label>
            <textarea
              type="text"
              name="steps"
              placeholder="Steps of your recipe"
              autoComplete="off"
              value={input.instructions}
              onChange={(e) => handleChange(e)}
              className={styles.textarea}
            ></textarea>
            {errors.steps && <p className={styles.p}>{errors.steps}</p>}
            <label className={styles.label}>Health Score: </label>
            <input
              type="number"
              min="0"
              max="100"
              name="healthScore"
              placeholder="1"
              value={input.healthScore}
              onChange={(e) => handleChange(e)}
              className={styles.input}
            ></input>
            {errors.healthScore && (
              <p className={styles.p}>{errors.healthScore}</p>
            )}
            <label className={styles.label}>Image: </label>
            <input
              type="url"
              name="image"
              placeholder="Enter the url"
              autoComplete="off"
              value={input.image}
              onChange={(e) => handleChange(e)}
              className={styles.input}
            ></input>
            {errors.image && <p className={styles.p}>{errors.image}</p>}
            <button className={styles.b}>¡Create my recipe!</button>
          </div>
          <div className={styles.diets}>
            <label className={styles.labelD}> Select the Diets: </label>
            {allDiets?.map((d) => {
              return (
                <ul key={d.id}>
                  <input
                    type="checkbox"
                    name={d.name}
                    value={d.name}
                    onChange={(e) => handleCheckDiet(e)}
                    className={styles.names}
                  />
                  {d.name.charAt(0).toUpperCase() + d.name.slice(1)}
                </ul>
              );
            })}
          </div>
        </form>
      </div>
      <Link to="/home">
        <button className={styles.button}>Go back</button>
      </Link>
    </div>
  );
}
