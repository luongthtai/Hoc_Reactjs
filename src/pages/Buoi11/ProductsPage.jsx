import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { addToCart } from "../../reduxs/CartSlice"

export const data = [
    {
        id: 1,
        name: "Phone",
        price: 30
    },
    {
        id: 2,
        name: "Table",
        price: 20
    },
    {
        id: 3,
        name: "Laptop",
        price: 90
    },
]

/**
    Mutabble: làm thay đổi mảng gốc
    Inmutable: tạo ra mảng mới và ko làm thay đổi mảng gốc
 */

export default function ProductsPage() {
    const carts = useSelector(state => state.carts.cart)
    const totalItem = carts.reduce((sum, item) => sum + item.qty, 0)

    return (
        <>
            <div style={{ display: "flex", gap: "30px" }}>
                <Link to="/products">Products</Link>
                <Link to="/carts">Carts <span>{totalItem}</span></Link>
            </div>

            <div style={{ display: "grid", gap: "16px" }}>
                {
                    data.map(item => <ProductItem key={item.id} product={{ ...item }} />)
                }
            </div>
        </>
    )
}

const ProductItem = (props) => {
    const dipatch = useDispatch()

    const { product } = props
    const { name, price } = product

    return (
        <div>
            <div>
                <p>{name}</p>
                <span>{price}</span>
            </div>

            <button onClick={() => dipatch(addToCart(product))}>Add</button>
        </div>
    )
}