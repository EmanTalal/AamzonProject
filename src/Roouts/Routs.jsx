import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import './index.css';
import ProductPage from './pages/ProductPage';
import Cart from './pages/Cart';
import Login from '../pages/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/ProductPage',
    element: <ProductPage />,
  },
  {
    path: '/Cart',
    element: <Cart />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
