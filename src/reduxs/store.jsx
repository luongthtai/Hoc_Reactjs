import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './CartSlice'

export default configureStore({
    reducer: {
        carts: cartReducer,
    }
})