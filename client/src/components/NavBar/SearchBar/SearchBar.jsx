import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getRecipeName } from "../../../redux/actions";

import styles from "./SearchBar.module.css";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handleName(e) {
    e.preventDefault();
    setName(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getRecipeName(name));
    setName("");
  };

  return (
    <div className={styles.div}>
      <input
        className={styles.input}
        type="search"
        placeholder="Search Recipe..."
        value={name}
        onChange={(e) => handleName(e)}
      />
      <button
        className={styles.button}
        type="submit"
        onClick={(e) => handleSubmit(e)}
      >
        Search
      </button>
    </div>
  );
}
