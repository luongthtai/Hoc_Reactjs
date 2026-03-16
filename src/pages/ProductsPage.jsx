import { Link, Outlet, useLocation, useParams } from "react-router-dom"

export default function ProductsPage() {
    const { pathname } = useLocation()
    const { id } = useParams()

    return (
        <>
            <header>This is header</header>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <p>Home</p>
                <span>{`>`}</span>
                <p>Products</p>
                {
                    id &&
                    <>
                        <span>{`>`}</span>
                        <p>Products {id}</p>
                    </>
                }
            </div>

            <Link to="20">20</Link>

            {pathname === "/products" ? <>products page</> : <Outlet />}
        </>
    )
}
