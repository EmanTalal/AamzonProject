import React, { useState, useEffect } from 'react';
import Carousel from './component/Carousel';
import Footer1 from './component/Footer1';
import Footer2 from './component/Footer2';
import axios from 'axios';
import { Link } from 'react-router-dom';

function App() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then(function (response) {
        // handle success
        setProducts(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filterProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm)
  );

  return (
    <>
      <div className="navbar bg-base-100 text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
          </div>
          {/* =================================================================== */}
          <div>
            <Link to={'/'}>
              <img
                src="https://zeevector.com/wp-content/uploads/Amazon-Logo-White@zeevector.png"
                alt=""
                className="h-9"
              />
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <label className="bg-white input input-bordered flex items-center gap-2">
                <input
                  type="text"
                  className=" w-96 bg-white text-black"
                  placeholder="Search Amazon"
                  onChange={handleSearch}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70 text-black"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
            </li>
            <li>
              <select className="select select-ghost w-full max-w-xs bg-base-100 ml-3">
                <option disabled selected className="bg-base-100">
                  language
                </option>
                <option className="bg-base-100">EN</option>
                <option className="bg-base-100">AR</option>
              </select>
            </li>
            <li></li>
            <li>
              <div className="dropdown dropdown-hover">
                <div tabIndex={0} role="button" className="">
                  <p>Hello, sign in</p>
                  <p>Account & List</p>
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 mt-32 shadow"
                >
                  <li>
                    <a>Item 1</a>
                  </li>
                  <li>
                    <a>Item 2</a>
                  </li>
                </ul>{' '}
              </div>
            </li>
            <li className="btn text-white">Return & Orders</li>

            <li className="btn text-white">
              <Link to={'/Cart'}>
                <img
                  src="https://img.icons8.com/?size=100&id=0DBkCUANmgoQ&format=png&color=FFFFFF"
                  alt=""
                  className="h-10"
                />
                Cart
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* ================================== */}

      <div className="bg-slate-300 flex flex-wrap gap-4 justify-center">
        <Carousel></Carousel>

        <div className="flex flex-col gap-4">
          {filterProducts.map((product) => (
            <div
              className="card lg:card-side bg-white shadow-xl text-black"
              key={product.id}
            >
              <figure>
                <img src={product.image} alt="Album" className="h-40" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{product.title}</h2>
                <p className="text-xl">{product.price} $</p>

                <div className="card-actions justify-end">
                  <Link to={'/ProductPage'}>
                    <button className="btn btn-warning text-black">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* ===========================================
      =========================================== */}
      </div>

      {/* ===========================================
      =========================================== */}
      <Footer1></Footer1>
      <Footer2 />
    </>
  );
}

export default App;
