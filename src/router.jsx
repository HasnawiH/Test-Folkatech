import React from 'react';
import { useRoutes } from "react-router-dom";

import Login from './pages/login';
import Register from './pages/register';
import Product from './pages/product';
import ProductDetail from './pages/productDetail';

const Router = () => {
  let element = useRoutes([
    { path: "/", element: <Login /> },
    { path: "/register", element: <Register /> },
    { path: "/product", element: <Product /> },
    { path: "/product/detail/:id", element: <ProductDetail /> },
  ]);

  return element;
}

export default Router