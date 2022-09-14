import React from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

import logo from "../img/logoNav.png";

export default function NavBar() {
  return (
    <div>
      <nav>
        <div>
          <img
            id="logo"
            src={logo}
            alt="Logo not found"
            width={100}
            height={100}
          />
        </div>
        <div>
          <Link to="/create">
            <button>Create recipe</button>
          </Link>
          <div>
            <SearchBar />
          </div>
        </div>
      </nav>
    </div>
  );
}
