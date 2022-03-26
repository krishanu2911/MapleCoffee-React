const sortByHighToLowFunc = (state, prodList) => {
  const { sortByHighToLow } = state;
  const temp = [...prodList];
  return sortByHighToLow ? temp.sort((a, b) => b.price - a.price) : prodList;
};
const sortByLowToHighFunc = (state, prodList) => {
  const { sortByLowToHigh } = state;
  const temp = [...prodList];
  return sortByLowToHigh
    ? prodList.sort((a, b) => a.price - b.price)
    : prodList;
};
const ratingFunc = (state, prodList) => {
  const { rating } = state;
  const temp = [...prodList];
  return rating==="" ? temp : temp.filter((prod) => prod.rating <= rating);
};
const categoryFunc = (state, prodList) => {
  const { category } = state;
  // if(category.includes(action.payload)){
    
  // }
  const temp = [...prodList];
  if(category.length === 0){
      return temp
  }else{
      return temp.filter((prod) => category.includes(prod.categoryName))
  }
};
export {
  sortByHighToLowFunc,
  sortByLowToHighFunc,
  ratingFunc,
  categoryFunc,
};
