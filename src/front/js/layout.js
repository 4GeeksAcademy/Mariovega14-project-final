import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/home";
import Register from "./pages/Register.jsx"
import Product from "./pages/Product.jsx"
import Ventas from "./pages/Ventas.jsx"
import Inicio from "./pages/Inicio.jsx"
import Admin from "./pages/Admin.jsx"
import Usuarios from "./pages/Usuarios.jsx"
import Order from "./pages/Order.jsx"
import SalesReport from "./pages/SalesReport.jsx"
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";

import Navbar from "./component/navbar";
import { Footer } from "./component/footer";


//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL />;


    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Navigate to="/inicio" replace />} />
                        <Route element={<Register />} path="/register" />
                        <Route element={<Inicio />} path="/inicio" />
                        <Route element={<Ventas />} path="/ventas" />
                        <Route element={<Product />} path="/producto" />
                        <Route element={<SalesReport />} path="/salesreport" />
                        <Route element={<Admin />} path="/admin" />
                        <Route element={<Order />} path="admin/:orders" />
                        <Route element={<Usuarios />} path="/admin/usuarios" />
                        <Route element={<Demo />} path="/demo" />
                        <Route element={<Single />} path="/single/:theid" />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    {/* {<Footer />} */}
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
