import { NavLink } from "react-router-dom";

// Dynamic Route (Route động)

/**
    /products
    /products/1
    /products/2
    /products/3
 */

export default function HomePage() {
    return (
        <div style={{ display: "grid" }}>
            <h1>HomePage 123</h1>
            <NavLink to="/" className={({ isActive }) => isActive ? "text-red" : "text-green"}>Home Page</NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? "text-red" : "text-green"}>About Page</NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "text-red" : "text-green"}>Contact Page</NavLink>
        </div>
    )
}
