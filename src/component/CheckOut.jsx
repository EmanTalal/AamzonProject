import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Nav from './Nav';
import Footer1 from './Footer1';
import Footer2 from './Footer2';
import { useDispatch, useSelector } from 'react-redux';
function Checkout() {
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const [shippingInfo, setShippingInfo] = useState({
    address: '',
    city: '',
    country: '',
  });

  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const handleShippingChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handlePaymentChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handlePlaceOrder = () => {
    const orderDetails = {
      cart,
      shippingInfo,
      paymentInfo,
      totalPrice: cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      ),
    };

    alert(
      `Order placed successfully! Total amount: $${orderDetails.totalPrice}`
    );

    alert(
      `Your shipment will arrive in 5 days at ${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.country}.`
    );

    navigate('/');
  };

  return (
    <>
      <Nav />
      <div className="bg-white flex flex-col items-center justify-center">
        <div className="w-full max-w-xl bg-gray-100 p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-6 text-black">Checkout</h1>
          {cart.map((item, index) => (
            <>
              <div key={index} className="flex items-center mb-4">
                <img
                  src={item.images}
                  alt={item.title}
                  className="rounded-xl h-16 w-16 mr-4"
                />
                <div>
                  <h2 className="text-lg font-semibold text-black">
                    {item.title}
                  </h2>
                  <p className="text-black">Price: ${item.price}</p>
                  <p className="text-black">Quantity: {item.quantity}</p>
                </div>
              </div>
            </>
          ))}
          <h2 className="card-title text-black">
            Subtotal ({cart.reduce((total, item) => total + item.quantity, 0)}{' '}
            items): $
            {cart
              .reduce((total, item) => total + item.price * item.quantity, 0)
              .toFixed(2)}
          </h2>

          {/* ======================================= */}
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4 text-black">
              Shipping Information
            </h2>
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={shippingInfo.address}
              onChange={handleShippingChange}
              className="w-full bg-white border-2 border-gray-300 rounded-md py-2 px-4 mb-4"
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={shippingInfo.city}
              onChange={handleShippingChange}
              className="w-full bg-white border-2 border-gray-300 rounded-md py-2 px-4 mb-4"
            />
            <input
              type="text"
              name="country"
              placeholder="Country"
              value={shippingInfo.country}
              onChange={handleShippingChange}
              className="w-full bg-white border-2 border-gray-300 rounded-md py-2 px-4 mb-4"
            />
          </div>
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4 text-black">
              Payment Information
            </h2>
            <input
              type="text"
              name="cardNumber"
              placeholder="Card Number"
              value={paymentInfo.cardNumber}
              onChange={handlePaymentChange}
              className="w-full bg-white border-2 border-gray-300 rounded-md py-2 px-4 mb-4"
            />
            <input
              type="text"
              name="expiryDate"
              placeholder="Expiry Date (MM/YYYY)"
              value={paymentInfo.expiryDate}
              onChange={handlePaymentChange}
              className="w-full bg-white border-2 border-gray-300 rounded-md py-2 px-4 mb-4"
            />
            <input
              type="text"
              name="cvv"
              placeholder="CVV"
              value={paymentInfo.cvv}
              onChange={handlePaymentChange}
              className="w-full bg-white border-2 border-gray-300 rounded-md py-2 px-4 mb-4"
            />
          </div>
          <div className="mt-8 flex justify-end">
            <button
              onClick={handlePlaceOrder}
              className="bg-yellow-500 text-black hover:bg-yellow-600  py-2 px-6 rounded-lg shadow-md"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
      <Footer1 />
      <Footer2 />
    </>
  );
}

export default Checkout;
