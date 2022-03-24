import { Route, Routes } from "react-router-dom";
import { Home, Login, ProductListing, Signup,Wishlish,Cart } from "../pages/index";
function RoutePath () {
    return(
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productlisting" element={<ProductListing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/wishlist" element={<Wishlish />} />
        <Route path="/cart" element={<Cart />} />
        </Routes>
    )
}
export default RoutePath;