import React from "react";
import { useProduct } from "../context/product-context";
import "../App.css";
function FilterSection() {
  const { state, dispatch } = useProduct();
  console.log(state);
  return (
    <div className="filter-div">
      <button
        className="txt-lg bold-font clear-btn"
        onClick={() => dispatch({ type: "RESET" })}
      >
        All Clear
      </button>
      <h1 className="txt-lg">Sort by Price</h1>
      <div className="">
        <label>High to low</label>
        <input
          type="radio"
          name="SORT"
          checked={state.sortByHighToLow}
          value="HIGH_TO_LOW"
          onClick={(e) => dispatch({ type: "SORT", payload: e.target.value })}
        />
      </div>
      <div>
        <label>low to High</label>
        <input
          type="radio"
          name="SORT"
          checked={state.sortByLowToHigh}
          value="LOW_TO_HIGH"
          onClick={(e) => dispatch({ type: "SORT", payload: e.target.value })}
        />
      </div>
      <h1 className="txt-lg">Sort by Category</h1>
      <div>
        <label>Light Coffee</label>
        <input
          type="checkbox"
          value="LIGHT_COFFEE"
          checked={state.category.includes("LIGHT_COFFEE")}
          onClick={(e) =>
            dispatch({ type: "CATEGORY", payload: e.target.value })
          }
        />
      </div>
      <div>
        <label>Medium Coffee</label>
        <input
          type="checkbox"
          value="MEDIUM_COFFEE"
          checked={state.category.includes("MEDIUM_COFFEE")}
          onClick={(e) =>
            dispatch({ type: "CATEGORY", payload: e.target.value })
          }
        />
      </div>
      <div>
        <label>Dark Coffee</label>
        <input
          type="checkbox"
          value="DARK_COFFEE"
          checked={state.category.includes("DARK_COFFEE")}
          onClick={(e) =>
            dispatch({ type: "CATEGORY", payload: e.target.value })
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
          value={state.rating}
          step="1"
          list="tickmarks"
          onChange={(e) =>
            dispatch({ type: "RATING", payload: e.target.value })
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
