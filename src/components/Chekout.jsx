import { useContext } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "./context/cardContext";
const Checkout = () => {
  const { cart, totalPrice, updateQuantity, removeFromCart } =
    useContext(CartContext);

  if (cart.length === 0) {
    return (
      <>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12 text-center">
              <h2 className="mt-5">your cart is empty </h2>
              <button className="btn btn-primary mt-5  ">
                <Link
                  to="/Courses"
                  href=""
                  className="text-white text-decoration-none"
                >
                  {" "}
                  go to courses
                </Link>
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-12">
          <h2 className="text-center">Order summary</h2>
          <ul className="list-unstyled ms-4">
            {cart.map((item) => (
              <li
                key={item.id}
                className=" p-4 my-3"
                style={{ border: "1px solid black", borderRadius: "20px" }}
              >
                <div className="row">
                  <div className="col-md-1">{item.id}</div>
                  <div className="col-md-3">{item.name}</div>
                  <div className="col-md-2">
                    <input
                      type="number"
                      min={1}
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(item.id, parseInt(e.target.value))
                      }
                      name=""
                      id=""
                      className="form-control"
                    />{" "}
                  </div>
                  <div className="col-md-6">
                    <button onClick={()=> removeFromCart(item.id)} className=" btn btn-outline-danger rounded-pill d-flex align-items-center  ">
                      remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <strong className="ms-5 ">
            Total: ${totalPrice}
          </strong>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
