import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Nav from '../component/Nav';
import Footer1 from '../component/Footer1';
import Footer2 from '../component/Footer2';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import axios from 'axios';

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://dummyjson.com/products/${id}`
        );
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (!product) return;
    const { id, title, price, images } = product;
    dispatch(addToCart({ id, title, price, images, quantity: 1 }));
    alert('Item added to cart');
  };

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Nav />
      {/* ================================== */}
      <div class="bg-white py-8">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col md:flex-row -mx-4">
            <div class="md:flex-1 px-4">
              <div class="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                <img
                  class="w-full h-full object-cover"
                  src={product.images}
                  alt="Product Image"
                />
              </div>
              <div class="flex -mx-2 mb-4">
                <div class="w-1/2 px-2">
                  <button
                    onClick={handleAddToCart}
                    class="btn btn-warning w-full py-2 px-4 rounded-full font-bold hover:bg-yellow-600"
                  >
                    Add to Cart
                  </button>
                </div>
                <div class="w-1/2 px-2">
                  <Link to={'/Cart'}>
                    <button className=" btn w-full border-0 bg-orange-500 py-2 px-4 rounded-full font-bold hover:bg-orange-700 text-black">
                      Buy Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div class="md:flex-1 px-4">
              <h2 class="text-2xl font-bold text-black mb-2">
                {product.title}
              </h2>
              <div className="dropdown dropdown-hover">
                <div tabIndex={0} role="button" className="">
                  <p className="text-blue-600">FREE International Returns</p>
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-white rounded-box z-[1] w-52 p-2 shadow"
                >
                  <li>
                    <a className="text-black">
                      Return this item for free. Free returns are available for
                      the shipping address you chose. You can return the item
                      for any reason in new and unused condition: no return
                      shipping charges. Learn more about free returns. How to
                      return the item?
                    </a>
                  </li>
                </ul>
              </div>
              <div class="flex mb-4">
                <div class="mr-4">
                  <span class="font-bold text-black">
                    Price: ${product.price}
                  </span>
                </div>
                <div>
                  <span class="font-bold text-black">Availability:</span>
                  <span class="text-black">In Stock</span>
                </div>
              </div>

              <div>
                <span class="font-bold text-black">Product Description:</span>
                <p class="text-black text-sm mt-2">{product.description}</p>
                <h2 className="text-black">
                  <br />
                  Rating: {product.rating} Out of 5
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ================================== */}

      <Footer1 />
      <Footer2 />
    </>
  );
}

export default ProductPage;
