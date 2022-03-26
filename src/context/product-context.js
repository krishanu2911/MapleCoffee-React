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
  console.log(apiResponse.products);
  useEffect(() => {
    if (!loading) {
      setProdList([...apiResponse.products]);
    }
  }, [loading]);
  const [state, dispatch] = useReducer(filterReducerFunc, {
    sortHighToLow: false,
    sortLowToHigh: false,
    rating: "4",
    category: [],
  });
  const filteredProdList = compose(
    state,
    sortByHighToLowFunc,
    sortByLowToHighFunc,
    ratingFunc,
    categoryFunc,
  )(prodList);
  return (
    <ProductContext.Provider value={{ state, dispatch , filteredProdList }}>
      {children}
    </ProductContext.Provider>
  );
};
const useProduct = () => useContext(ProductContext);
export { ProductContextProdvider, useProduct };
