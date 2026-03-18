import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../contexts/cartContext"

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

export default function ProductsPage() {
    const { carts, setCarts } = useContext(CartContext)

    const handleAllToCart = (product) => {
        // check product đã có trong carts hay chưa. 
        // nếu có thì dừng, không có thì add product vào cart

        const isExist = carts.find(item => item.id === product.id)

        if (!isExist) setCarts(pre => {
            return [
                ...pre,
                product
            ]
        })
    }

    return (
        <>
            <div style={{ display: "flex", gap: "30px" }}>
                <Link to="/products">Products</Link>
                <Link to="/carts">Carts</Link>
            </div>

            <div style={{ display: "grid", gap: "16px" }}>
                {
                    data.map(item => <ProductItem key={item.id} product={{ ...item }} handleAllToCart={handleAllToCart} />)
                }
            </div>
        </>
    )
}

const ProductItem = (props) => {
    const { product, handleAllToCart } = props
    const { name, price } = product

    return (
        <div>
            <div>
                <p>{name}</p>
                <span>{price}</span>
            </div>

            <button onClick={() => handleAllToCart(product)}>Add</button>
        </div>
    )
}