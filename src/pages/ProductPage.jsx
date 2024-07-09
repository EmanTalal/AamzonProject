import Nav from '../component/Nav';
import Footer1 from '../component/Footer1';
import Footer2 from '../component/Footer2';
import { Link } from 'react-router-dom';

function ProductPage() {
  return (
    <>
      <Nav></Nav>
      {/*container */}
      <div
        className="flex bg-white justify-between h-screen
       max-sm:flex max-sm:flex-col max-sm:justify-center
       max-md:flex max-md:flex-col max-md:justify-center"
      >
        <div className="card lg:card-side bg-white shadow-xl w-full h-fit break-words">
          <figure>
            <img
              src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
              alt="Album"
              className="h-80 w-full"
            />
          </figure>
          <div className="card-body w-56">
            <h2 className="card-title text-black">
              Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
            </h2>
            <h2 className="card-title text-black">
              Rating:{' '}
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/019/859/726/small/yellow-five-stars-quality-rating-icons-5-stars-icon-five-star-sign-rating-symbol-transparent-background-illustration-png.png"
                alt=""
                className="h-7"
              />
            </h2>
            <p className="text-black ">
              3D NAND flash are applied to deliver high transfer speeds
              Remarkable transfer speeds that enable faster bootup and improved
              overall system performance. The advanced SLC Cache Technology
              allows performance boost and longer lifespan 7mm slim design
              suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM
              command, Garbage Collection technology, RAID, and ECC (Error
              Checking & Correction) to provide the optimized performance and
              enhanced reliability..
            </p>
          </div>
        </div>

        {/* ====================================== */}
        <div>
          <div className="card card-side bg-white shadow-xl h-full w-80">
            <div className="card-body">
              <h2 className="card-title text-black">$ 109</h2>
              <div className="dropdown dropdown-hover">
                <div tabIndex={0} role="button" className=" bg-white">
                  <p className="text-blue-600"> FREE International Returns</p>
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-white rounded-box z-[1] w-52 p-2 shadow"
                >
                  <li>
                    <a className="text-black">
                      Return this item for free Free returns are available for
                      the shipping address you chose. You can return the item
                      for any reason in new and unused condition: no return
                      shipping charges. Learn more about free returns. How to
                      return the item?
                    </a>
                  </li>
                </ul>
              </div>
              <p className=" text-black h-1 max-sm:hidden max-md:hidden">
                $23.05 Shipping & Import Charges to Saudi Arabia Details
                <br />
              </p>
              <p className=" text-black">
                Delivery Thursday, July 18. Order within 23 hrs 48 mins Or
                fastest delivery Wednesday, July 17
              </p>
              <div className="card-actions justify-end">
                <Link to={'/Cart'}>
                  <button className="btn btn-warning">Add to Cart</button>
                </Link>
                <button className="btn bg-orange-500 border-0 text-black">
                  Buy Now
                </button>
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

export default ProductPage;
