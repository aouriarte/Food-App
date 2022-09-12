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
        type="text"
        placeholder="Search recipe... "
        onChange={(e) => {
          handleName(e);
        }}
      ></input>
      <button
        type="submit"
        onClick={(e) => {
          handleSubmit(e);
        }}
      >
        Search
      </button>
    </div>
  );
}
