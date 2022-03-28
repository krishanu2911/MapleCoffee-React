import { useContext, createContext , useState } from "react";
const UserDetailContext = createContext();
const UserDetailContextProvider = ({children}) => {
    const [ userDetail , setUserDetail ] = useState({
        wishlist:[],
        cartlist:[]
    })
    return(
        <UserDetailContext.Provider value={{ userDetail , setUserDetail } }>{children}</UserDetailContext.Provider>
    )
}
const useUserDetail = () => useContext(UserDetailContext);
export { useUserDetail , UserDetailContextProvider};