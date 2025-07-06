import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartData";
import wishlistReducer from "./wishlistData";
import notificationReducer from "./notificationData";




const store = configureStore({
    reducer: {
        cart: cartReducer,
        wishlist: wishlistReducer,
    },
});

export default store;
