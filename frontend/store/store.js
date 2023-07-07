import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import favouriteSlice from "./favouriteSlice";

export default configureStore({
    reducer: {
        cart: cartSlice,
        favourite: favouriteSlice
    },
})