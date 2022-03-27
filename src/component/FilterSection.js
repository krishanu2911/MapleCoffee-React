import React from "react";
import { useProduct } from "../context/product-context";
import "../App.css";
function FilterSection() {
  const { filterState, filterDispatch } = useProduct();
  return (
    <div className="filter-div">
      <button
        className="txt-lg bold-font clear-btn"
        onClick={() => filterDispatch({ type: "RESET" })}
      >
        All Clear
      </button>
      <h1 className="txt-lg">Sort by Price</h1>
      <div className="">
        <label>High to low</label>
        <input
          type="radio"
          name="SORT"
          checked={filterState.sortByHighToLow}
          value="HIGH_TO_LOW"
          onClick={(e) =>filterDispatch({ type: "SORT", payload: e.target.value })}
        />
      </div>
      <div>
        <label>low to High</label>
        <input
          type="radio"
          name="SORT"
          checked={filterState.sortByLowToHigh}
          value="LOW_TO_HIGH"
          onClick={(e) => filterDispatch({ type: "SORT", payload: e.target.value })}
        />
      </div>
      <h1 className="txt-lg">Sort by Category</h1>
      <div>
        <label>Light Coffee</label>
        <input
          type="checkbox"
          value="LIGHT_COFFEE"
          checked={filterState.category.includes("LIGHT_COFFEE")}
          onClick={(e) =>
            filterDispatch({ type: "CATEGORY", payload: e.target.value })
          }
        />
      </div>
      <div>
        <label>Medium Coffee</label>
        <input
          type="checkbox"
          value="MEDIUM_COFFEE"
          checked={filterState.category.includes("MEDIUM_COFFEE")}
          onClick={(e) =>
            filterDispatch({ type: "CATEGORY", payload: e.target.value })
          }
        />
      </div>
      <div>
        <label>Dark Coffee</label>
        <input
          type="checkbox"
          value="DARK_COFFEE"
          checked={filterState.category.includes("DARK_COFFEE")}
          onClick={(e) =>
            filterDispatch({ type: "CATEGORY", payload: e.target.value })
          }
        />
      </div>
      <h1 className="txt-lg">Filter by Ratings</h1>
      <div>
        <label>1⭐</label>
        <input
          type="range"
          min="1"
          max="4"
          value={filterState.rating}
          step="1"
          list="tickmarks"
          onChange={(e) =>
            filterDispatch({ type: "RATING", payload: e.target.value })
          }
        />
        <datalist id="tickmarks">
          <option value="1"></option>
          <option value="2"></option>
          <option value="3"></option>
          <option value="4"></option>
        </datalist>
        <label>4⭐</label>
      </div>
    </div>
  );
}
export default FilterSection;
