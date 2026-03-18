import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../contexts/cartContext'

export default function CartPage() {
    const { carts, setCarts } = useContext(CartContext)

    const handleRemoveProduct = (productId) => {
        setCarts((removeItem) => removeItem.filter(item => item.id !== productId))
    }

    return (
        <>
            <div style={{ display: "flex", gap: "30px" }}>
                <Link to="/products">Products</Link>
                <Link to="/carts">Carts</Link>
            </div>

            <div>
                {
                    carts.length === 0 ? <p>Giỏ hàng trống</p>
                        :
                        carts.map(item => <ProductItem key={item.id} product={{ ...item }} handleRemoveProduct={handleRemoveProduct} />)
                }
            </div>
        </>
    )
}

const ProductItem = (props) => {
    const { product, handleRemoveProduct } = props
    const { name, price, id } = product

    return (
        <div>
            <div>
                <p>{name}</p>
                <span>{price}</span>
            </div>

            <button onClick={() => handleRemoveProduct(id)}>Remove</button>
        </div>
    )
}