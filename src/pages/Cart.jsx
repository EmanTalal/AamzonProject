import Nav from '../component/Nav';
import Footer1 from '../component/Footer1';
import Footer2 from '../component/Footer2';

function Cart() {
  return (
    <>
      <Nav></Nav>
      <div className="bg-white flex max-sm:flex-col">
        <div className="w-[70%] bg-white flex justify-center">
          <div className="">
            <div className="card bg-white w-fit shadow-xl ">
              <h1 className="ml-5 text-2xl text-black">Shopping Cart</h1>
              <hr />
              <br />
              <figure className="h-52">
                <img
                  src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                  alt="Shoes"
                  className="rounded-xl h-52 w-52"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-black">
                  Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
                </h2>
                <hr />
                <p className="text-black">Subtotal (2 items): $109 </p>
                <div className="card-actions "></div>
              </div>
            </div>
          </div>
        </div>
        {/* ============================= */}
        <div className="w-[30%] bg-white flex justify-center">
          <div>
            <div className="card text-black w-fit h-fit bg-white shadow-lg">
              <div className="card-body items-center text-center">
                <h2 className="card-title">Subtotal (2 items): $109</h2>
                <div className="card-actions justify-end">
                  <button className="btn btn-warning">
                    Proceed to checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer1></Footer1>
      <Footer2></Footer2>
    </>
  );
}

export default Cart;
