import { useSelector } from "react-redux"

export default function TotalAmount() {
    const carts = useSelector(state => state.carts.cart)

    const totalItem = carts.reduce((sum, item) => sum + item.qty, 0)
    const totalPrice = carts.reduce(
        (sum, item) => sum + item.price * item.qty,
        0
    )

    return (
        <div>
            <p>Total item: {totalItem}</p>
            <p>Total price: {totalPrice}</p>
        </div>
    )
}
