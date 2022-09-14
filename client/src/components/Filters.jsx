import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllDiets,
  filterDiets,
  orderTitle,
  orderHealthScore,
} from "../redux/actions";

export default function Filters({ setPage, setOrder }) {
  const dispatch = useDispatch();
  const allDiets = useSelector((state) => state.allDiets);

  // FILTRADOS ----------------------------------------------------
  const handleFilterDiets = (e) => {
    e.preventDefault();
    dispatch(filterDiets(e.target.value));
    setPage(1);
  };

  // ORDENAMIENTOS ------------------------------------------------
  const handleOrderTitle = (e) => {
    e.preventDefault();
    dispatch(orderTitle(e.target.value));
    setPage(1);
    setOrder(e.target.value);
  };

  const handleOrderScore = (e) => {
    e.preventDefault();
    dispatch(orderHealthScore(e.target.value));
    setPage(1)
    setOrder(e.target.value);
  };

  useEffect(() => {
    dispatch(getAllDiets());
  }, [dispatch]);

  // ---------------------------------------------------------------
  return (
    <div>
      <div>
        {/*No me anda el filter diet*/}
        <h4>Filter</h4>
        <select onChange={(e) => handleFilterDiets(e)}>
            <option value='all'>Select Diet</option>
          {allDiets?.map((d) => {
            return (
              <option key={d.id} value={d.name}>
                {d.name}
              </option>
            );
          })}
        </select>
      </div>

      <div>
        <h4>Order</h4>
        <select onChange={(e) => handleOrderTitle(e)}>
            <option value='ALL'>By Title</option>
            <option value='ASC'>A-Z</option>
            <option value='DESC'>Z-A</option>
        </select>
        <select onChange={(e) => handleOrderScore(e)}>
            <option value='ALL'>By HealthScore</option>
            <option value='MIN'>+ HealthScore</option>
            <option value='MAX'>- HealthScore</option>
        </select>
      </div>
    </div>
  );
}
