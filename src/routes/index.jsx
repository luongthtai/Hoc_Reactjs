import { createBrowserRouter } from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/HOmePage";
import DetailProduct from "../pages/DetailProduct";
// import ProductsPage from "../pages/ProductsPage";
import CommentsProduct from "../pages/CommentsProduct";
import Buoi8 from "../pages/Buoi8";
import Buoi9 from "../pages/Buoi9";
import Buoi11 from "../Buoi11";
import ProductsPage from "../pages/Buoi11/ProductsPage";
import CartPage from "../pages/Buoi11/CartPage";
import Buoi12 from "../Buoi12";

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
        path: "buoi11",
        element: <Buoi11 />
    },
    {
        path: "buoi12",
        element: <Buoi12 />
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
