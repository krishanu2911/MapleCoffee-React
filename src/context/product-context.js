import {
  createContext,
  useContext,
  useReducer,
  useState,
  useEffect,
} from "react";
import useAxios from "../utils/useAxios";
import filterReducerFunc from "../reducer/filterReducerFunc";
import {
  sortByHighToLowFunc,
  sortByLowToHighFunc,
  ratingFunc,
  categoryFunc,
} from "../utils/filterFunc";
const ProductContext = createContext();
const compose = (state, ...allFilters) => (data) => {
  return allFilters.reduce((acc, curr) => {
    return curr(state, acc);
  }, data);
};
const ProductContextProdvider = ({ children }) => {
  const [prodList, setProdList] = useState([]);
  const { apiResponse, loading } = useAxios("/api/products");
  useEffect(() => {
    if (!loading) {
      setProdList([...apiResponse.products]);
    }
  }, [loading]);
  const [filterState, filterDispatch] = useReducer(filterReducerFunc, {
    sortHighToLow: false,
    sortLowToHigh: false,
    rating: "4",
    category: [],
  });
  const filteredProdList = compose(
    filterState,
    sortByHighToLowFunc,
    sortByLowToHighFunc,
    ratingFunc,
    categoryFunc,
  )(prodList);
  return (
    <ProductContext.Provider value={{ filterState, filterDispatch , filteredProdList }}>
      {children}
    </ProductContext.Provider>
  );
};
const useProduct = () => useContext(ProductContext);
export { ProductContextProdvider, useProduct };
