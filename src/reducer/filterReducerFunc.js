const defaultState = {
    sortHighToLow: false,
    sortLowToHigh: false,
    rating: "4",
    category: [],
  };
function filterReducerFunc (state,action) {
    switch(action.type){
        case "SORT":
            return action.payload === "HIGH_TO_LOW"
            ? { ...state, sortByHighToLow: true, sortByLowToHigh: false }
            : { ...state, sortByHighToLow: false, sortByLowToHigh: true };
        case "CATEGORY":
            const { category } = state;
             if(category.includes(action.payload)){
                const updateCate = category.filter((cateName) => cateName !== action.payload);
                return{...state,category: updateCate}
             }else{
               return { ...state, category: [...state.category , action.payload] }  
             }
            
        case "RATING":
            return {...state, rating: action.payload}
        case "RESET":
            return {...defaultState}
    }
    return{...state,hi:action.type}
}
export default filterReducerFunc;