import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import {
  postRecipe,
  getAllDiets,
  cleanRecipes,
  getAllRecipes,
} from "../../redux/actions";
import validate from "./validate/validate";

export default function CreateRecipe() {
  const dispatch = useDispatch();
  const history = useHistory();
  const allDiets = useSelector((state) => state.allDiets);

  const [errors, setErrors] = useState({});
  // const [errorBtn, setErrorBtn] = useState(
  //   Object.values(errors).length !== 0 ? true : false
  // );

  // ESTADOS LOCALES ---------------------------------------------------------------------
  const [input, setInput] = useState({
    title: "",
    summary: "",
    healthScore: 50,
    steps: "",
    image: "",
    diets: [],
  });

  // HANDLES ----------------------------------------------------------------------------
  function handleChange(e) {
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
    //setErrorBtn(validate(input));
  }

  const handleCheck = (e) => {
    if (e.target.checked) {
      setInput({
        ...input,
        diets: [...input.diets, e.target.value],
      });
    } else {
      const diets = input.diets.filter((diet) => {
        return diet !== e.target.value;
      });
      setInput({
        ...input,
        diets: diets,
      });
    }
  };

  // REVISIÓN DEL FORMULARIO --------------------------------------
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setErrors(validate(input));
  //   let error = validate(input);

  //   if (Object.values(error).length !== 0) {
  //     alert("Error. Check the form");
  //   } else {
  //     dispatch(postRecipe(input));
  //     alert("¡Your recipe is created");
  //     setInput({
  //       title: "",
  //       summary: "",
  //       healthScore: "",
  //       steps: "",
  //       image: "",
  //       diets: [],
  //     });
  //     dispatch(cleanRecipes(dispatch));
  //     history.push("/home");
  //   }
  // };

  function handleSubmit(e) {
    if (!input.title && !input.summary) {
      // lo traigo aca?
      e.preventDefault();
      return alert("The recipe needs a title and a summary");
    } else if (!input.diets.length) {
      e.preventDefault();
      return alert("You need to add at least one diet for the recipe");
    } else {
      dispatch(postRecipe(input));
      alert("¡Your recipe is created!");
      setInput({
        title: "",
        summary: "",
        healthScore: 50,
        steps: "",
        image: "",
        diets: [],
      });
      dispatch(cleanRecipes(dispatch));
      history.push("/home");
    }
  }

  useEffect(() => {
    dispatch(getAllDiets());
  }, [dispatch]);

  //--------------------------------------------------------------------------------------
  return (
    <div>
      <h1>¡Create your Recipe here!</h1>
      <form>
        <div>
          <label>Title: </label>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={input.title}
            onChange={(e) => handleChange(e)}
          ></input>
          {errors.title && <p>{errors.title}</p>}
        </div>
        <div>
          <label>Summary: </label>
          <textarea
            type="text"
            name="summary"
            maxLength="1000"
            placeholder="Summary of your recipe"
            value={input.summary}
            onChange={(e) => handleChange(e)}
          ></textarea>
          {errors.summary && <p>{errors.summary}</p>}
        </div>
        <div>
          <label>Health Score: </label>
          <input
            type="range"
            min="0"
            max="100"
            name="healthScore"
            placeholder="50"
            value={input.healthScore}
            onChange={(e) => handleChange(e)}
          ></input>
          {<p>{input.healthScore}</p>}
        </div>
        <div>
          <label>Steps: </label>
          <textarea
            type="text"
            name="steps"
            placeholder="Steps of your recipe"
            value={input.instructions}
            onChange={(e) => handleChange(e)}
          ></textarea>
          {errors.steps && <p>{errors.steps}</p>}
        </div>
        <div>
          <label>Image: </label>
          <input
            type="url"
            name="image"
            placeholder="Enter the url"
            value={input.image}
            onChange={(e) => handleChange(e)}
          ></input>
        </div>
        <div>
          <label>Diets: </label>
          {allDiets?.map((d) => {
            return (
              <label key={d.id}>
                <input
                  type="checkbox"
                  name={d.name}
                  value={d.name}
                  onChange={(e) => handleCheck(e)}
                />
                {d.name}
              </label>
            );
          })}
        </div>
        <button type="submit" onClick={(e) => handleSubmit(e)}>
          Create
        </button>
      </form>

      <Link to="/home">
        <button>Go back</button>
      </Link>
    </div>
  );
}
