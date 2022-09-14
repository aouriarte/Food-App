import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipeDetail } from "../redux/actions";
import { Link } from "react-router-dom";

export default function CardDetails(props) {
  const dispatch = useDispatch();
  const recipe = useSelector((state) => state.recipesDetails);

  useEffect(() => {
    dispatch(getRecipeDetail(props.match.params.id));
  }, [dispatch]);

  return (
    <div>
      <div>
        <h3>Details Recipe:</h3>
        <img src={recipe.image} alt="Img not found" />
        <h2>{recipe.title}</h2>
        <div>
          {recipe.diets?.map((r, i) => {
            return (
              <div key={i}>
                <p>{r}</p>
              </div>
            );
          })}
        </div>
        <p>{recipe.summary}</p>
        <p>{recipe.healthScore}</p>
        <p>{recipe.steps}</p>
      </div>

      <Link to="/home">
        <button>Go back</button>
      </Link>
    </div>
  );
}
