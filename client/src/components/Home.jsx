import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllRecipes } from "../redux/actions.js";
import { Link } from "react-router-dom";
import Card from "../components/Card.jsx";
import NavBar from "../components/NavBar.jsx";
import Pagination from "../components/Pagination.jsx";
import Filters from "../components/Filters.jsx";

export default function Home() {
  const dispatch = useDispatch();
  const allRecipes = useSelector((state) => state.allRecipes);

  useEffect(() => {
    dispatch(getAllRecipes());
  }, [dispatch]);

  // PAGINADO ------------------------------------------------------------
  const [page, setPage] = useState(1);
  const [recipesPerPage, setRecipesPerPage] = useState(9);
  const indexOfLastRecipes = page * recipesPerPage;
  const indexOfFirsRecipes = indexOfLastRecipes - recipesPerPage;

  const currentRecipes = allRecipes.slice(
    indexOfFirsRecipes,
    indexOfLastRecipes
  );

  const pagination = (pageNumber) => {
    setPage(pageNumber);
  };

  // ORDANAMIENTO ----------------------------------------------------
  const [order, setOrder] = useState("");

  //---------------------------------------------------------------
  return (
    <div>
      <NavBar />
      <Filters setPage={setPage} setOrder={setOrder} />
      <br></br>
      <div>
        {currentRecipes?.map((r, i) => {
          return (
            <div key={i}>
              <Card
                key={r.id}
                image={r.image}
                title={r.title}
                diets={r.diets.map((d) => (
                  <p>{d}</p>
                ))}
              />
              <div>
                <Link to={`/recipe/${r.id}`}>
                  <button>See details</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <Pagination
          recipesPerPage={recipesPerPage}
          allRecipes={allRecipes.length}
          pagination={pagination}
        />
      </div>
    </div>
  );
}
