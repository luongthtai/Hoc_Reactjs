// useReducer
// Cấu trúc: const [state, dispatch] = useReducer(reducer, initialState)

/**
    1. State: 
        dữ liệu hiện tại

    2. dispatch:
        cách gửi yêu cầu
    
    3. reducer:
        nơi duy nhất được phép sửa state
    
    4. initalState: 
        giá trị ban đầu của state


    Flow:
    
    User click
    |
    dipatch(action)
    |
    reducer nhận action
    |
    reducer tạo state mới
    |
    React render lại
 */

/**
    dipatch:
    {
        type = làm gì
        payload = dữ liệu
    }
 */

// useContext không xử lý dữ liệu

/**
    useReducer = xử lý logic
    useContext = chia sẻ dữ liệu
 */

import react, { useContext } from "react"
import { CartContext } from "../contexts/cartContext"

export default function Buoi9() {
    const { state, dispatch } = useContext(CartContext)

    return (
        <div>
            <p>Count: {state.count}</p>

            <div>
                {
                    state.carts.length === 0 ? <p>Không có dữ liệu</p>
                        :
                        state.carts.map(item => <p key={item.id}>{item.name}</p>)
                }
            </div>

            {/* <button onClick={() => dispatch({ type: "DECREASE" })}>-</button>
            <button onClick={() => dispatch({ type: "INCREASE", payload: product })}>+</button> */}
            <button onClick={() => dispatch({ type: "ADD", payload: { id: 1, name: "Phone" } })}>-</button>
            <button onClick={() => dispatch({ type: "REMOVE" })}>+</button>
        </div>
    )
}
