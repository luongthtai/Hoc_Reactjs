import { createContext, useReducer, useState } from "react";

export const CartContext = createContext()

const CartProvider = ({ children }) => {
    const initalState = {
        count: 1,
        carts: [],
        wishlist: []
    }

    function reducer(state, action) {
        // if (action.type === "INCREASE") {
        //     return { count: state.count + 1 }
        // }

        // if (action.type === "DECREASE") {
        //     return { count: state.count - 1 }
        // }

        if (action.type === "ADD") {
            return {
                ...state,
                carts: [...state.carts, action.payload]
            }
        }

        if (action.type === "REMOVE") {
            state.carts.shift()
            return { ...state, carts: state.carts }
        }

        return state
    }

    const [state, dispatch] = useReducer(reducer, initalState)

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider