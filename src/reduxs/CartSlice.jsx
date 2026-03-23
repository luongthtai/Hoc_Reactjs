import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
    },
    reducers: {
        addToCart: (state, action) => {
            const product = action.payload
            const isProduct = state.cart.find(item => item.id === product.id)

            if (isProduct) isProduct.qty += 1
            else state.cart.push({ ...product, qty: 1 })
        },
        removeToCart: (state, action) => {
            const newState = state.cart.filter(item => item.id != action.payload)
            state.cart = newState
        },
        increaseProduct: (state, action) => {
            const productId = action.payload

            const newCart = state.cart.map(item => {
                if (item.id === productId) {
                    return {
                        ...item,
                        qty: item.qty + 1
                    }
                }

                return item
            })

            state.cart = newCart
        },
        decreaseProduct: (state, action) => {
            const productId = action.payload

            const newCart = state.cart.map(item => {
                if (item.id === productId) {
                    return {
                        ...item,
                        qty: (item.qty - 1) < 1 ? 1 : (item.qty - 1)
                    }
                }

                return item
            })

            state.cart = newCart
        },
    }
})

export const { addToCart, removeToCart, increaseProduct, decreaseProduct } = cartSlice.actions
export default cartSlice.reducer
