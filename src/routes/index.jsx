import { createBrowserRouter } from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/HOmePage";
import DetailProduct from "../pages/DetailProduct";
// import ProductsPage from "../pages/ProductsPage";
import CommentsProduct from "../pages/CommentsProduct";
import Buoi8 from "../pages/Buoi8";
import ProductsPage from "../pages/Buoi8/ProductsPage";
import CartPage from "../pages/Buoi8/CartPage";
import Buoi9 from "../pages/Buoi9";

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
    // {
    //     path: "/products",
    //     element: <ProductsPage />,
    //     children: [
    //         {
    //             path: ":id",
    //             element: <DetailProduct />,
    //             children: [
    //                 {
    //                     path: "comments",
    //                     element: <CommentsProduct />
    //                 }
    //             ]
    //         }
    //     ]
    // },
    {
        path: "buoi8",
        element: <Buoi8 />
    },
    {
        path: "buoi9",
        element: <Buoi9 />
    },
    {
        path: "products",
        element: <ProductsPage />
    },
    {
        path: "carts",
        element: <CartPage />
    },
])

export default routes
