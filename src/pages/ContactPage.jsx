import { NavLink } from "react-router-dom";

export default function ContactPage() {
    return (
        <div style={{ display: "grid" }}>
            <h1>Contact</h1>
            <NavLink to="/" className={({ isActive }) => isActive ? "text-red" : "text-green"}>Home Page</NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? "text-red" : "text-green"}>About Page</NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "text-red" : "text-green"}>Contact Page</NavLink>
        </div>
    )
}
