import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getRecipeName } from "../redux/actions";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handleName(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getRecipeName(name));
    setName("");
  }

  return (
    <div>
      <input
        type="search"
        placeholder="Search Recipe..."
        value={name}
        onChange={(e) => handleName(e)}
      ></input>
      <button type="submit" onClick={(e) => handleSubmit(e)}>
        Search
      </button>
    </div>
  );
}
