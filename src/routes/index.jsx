import { createBrowserRouter } from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/HOmePage";
import DetailProduct from "../pages/DetailProduct";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />
    },
    {
        path: "/about",
        element: <AboutPage />
    },
    {
        path: "/contact",
        element: <ContactPage />
    },
    {
        path: "/products/:id",
        element: <DetailProduct />
    },
])

export default routes
