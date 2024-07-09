// import React from 'react';
// import * as ReactDOM from 'react-dom/client';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import App from './App';
// import './index.css';
// import ProductPage from './pages/ProductPage';
// import Cart from './pages/Cart';
// import Login from './pages/Login';
// import Sinup from './pages/Sinup';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Login />,
//   },
//   {
//     path: '/ProductPage',
//     element: <ProductPage />,
//   },
//   {
//     path: '/Cart',
//     element: <Cart />,
//   },
//   {
//     path: '/Sinup',
//     element: <Sinup />,
//   },
//   {
//     path: '/App',
//     element: <App />,
//   },
// ]);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

