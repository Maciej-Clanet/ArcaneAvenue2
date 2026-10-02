import {Routes, Route} from "react-router";
import Home from "./pages/Home/Home";
import Wishlist from "./pages/WishList/Wishlist";

export default function Pages(){

    return(
        <Routes>
            {/* this is where pages go */}
            <Route index element={<Home/>} />
            <Route path="wishlist" element={<Wishlist/>} />


        </Routes>
    )
}