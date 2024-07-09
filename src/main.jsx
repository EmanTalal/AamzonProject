import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import './index.css';
import ProductPage from './pages/ProductPage';
import Cart from './pages/Cart';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
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
