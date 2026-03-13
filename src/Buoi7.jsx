// React Router (react-router-dom): là một thư viện dùng để uản lý định tuyến trong React

import { Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";

/**
    / -> HomePage
    /about -> AboutPage
    /contact -> ContactPage
 */

// Cú pháp: npm install tên_thư_viện

/**
    Có 4 phần quan trọng:
        1. BrowerRouter: Quản lý routing của toàn ứng dụng
        2. Routes: Container chứa các route
        3. Route: Khai báo mapping giữa URL -> component
        4. Link: dùng dể diều hướng giữa các trang -> a
 */

/**
    Cấu trúc Router cơ bản
 */

export default function Buoi7() {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
        </>
    )
}