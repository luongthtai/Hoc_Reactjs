import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { decreaseProduct, increaseProduct, removeToCart } from '../../reduxs/CartSlice'
import TotalAmount from './TotalAmount'

// useSelector

export default function CartPage() {
    const carts = useSelector(state => state.carts.cart)
    const totalItem = carts.reduce((sum, item) => sum + item.qty, 0)

    return (
        <>
            <div style={{ display: "flex", gap: "30px" }}>
                <Link to="/products">Products</Link>
                <Link to="/carts">Carts <span>{totalItem}</span></Link>
            </div>

            <div>
                {
                    carts.length === 0 ? <p>Giỏ hàng trống</p>
                        :
                        carts.map(item => <ProductItem key={item.id} product={{ ...item }} />)
                }
            </div>

            <TotalAmount />
        </>
    )
}

const ProductItem = (props) => {
    const dispatch = useDispatch()

    const { product } = props
    const { name, price, id, qty } = product

    return (
        <div>
            <div>
                <p>{name}</p>
                <span>{price}</span>
            </div>
            <p>x{qty}</p>

            <button onClick={() => dispatch(decreaseProduct(id))}>-</button>
            <button onClick={() => dispatch(increaseProduct(id))}>+</button>
            <br />

            <button onClick={() => dispatch(removeToCart(id))}>Remove</button>
        </div>
    )
}