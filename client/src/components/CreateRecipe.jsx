import React from "react";
import { Link } from "react-router-dom";

export default function CreateRecipe() {
  return (
    <div>
      <div>
        <h2>¡Create your Recipe here!</h2>
      </div>
      <Link to='/home'>
        <button>Go back</button>
      </Link>
    </div>
  );
}
