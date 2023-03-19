import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Cart.css";
// import { useNavigate } from "react-router-dom";

const ConfirmOrder = () => {
  const { shippingInfo, cartItems, totalPrice, subTotal } = useSelector(
    (state) => state.cart
  );
  //   const { user } = useSelector((state) => state.user);
  //   const dispatch = useDispatch();
  //   const navigate = useNavigate();

  //   const order = {
  //     shippingInfo,
  //     orderItems: cartItems,
  //     itemsPrice: subTotal,
  //     shippingPrice: shipping,
  //     totalPrice: totalPrice,
  //   };

  const orderHandler = async () => {
    // dispatch(createOrder(order));
    // navigate("/ordersuccess");
    // localStorage.removeItem("cartItems");
    // localStorage.removeItem("price");
  };

  return (
    <section className="container">
      <h2 className="order-heading">Order Details</h2>
      <div className="confirm-order-container">
        <div className="confirm-order-container-left">
          <div className="order-details">
            <div>
              <b>Name:</b>
              <p>{shippingInfo.name}</p>
            </div>
            <div>
              <b>Email:</b>
              <p>{shippingInfo.email}</p>
            </div>
            <div>
              <b>Address:</b>
              <p>{shippingInfo.address}</p>
            </div>
            <div>
              <b>City:</b>
              <p>{shippingInfo.city}</p>
            </div>
            <div>
              <b>State:</b>
              <p>{shippingInfo.state}</p>
            </div>
            <div>
              <b>Pin Code:</b>
              <p>{shippingInfo.pinCode}</p>
            </div>
            <div>
              <b>Phone:</b>
              <p>{shippingInfo.phoneNo}</p>
            </div>
          </div>
          <h2 className="order-heading">Order Products</h2>
          <div className="tableClass">
            <main>
              <table>
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems &&
                    cartItems.map((cart) => (
                      <tr key={cart.product}>
                        <td className="cart-prod-img">
                          <img src={cart.image} alt="" />
                        </td>
                        <td className="cart-prod-name">{cart.name}</td>

                        <td className="cart-prod-color">
                          <p>{cart.quantity}</p>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </main>
          </div>
        </div>
        <div className="confirm-order-container-right">
          <div className="confirm-price-container">
            <h2 className="order-heading">Order Summery</h2>
            <div className="confirm-cart">
              <div>
                <b>Subtotal</b>
                <p>{totalPrice} RS</p>
              </div>
              <div>
                <b>Total</b>
                <p>{totalPrice} RS</p>
              </div>
            </div>
            <button onClick={orderHandler}>Place Order</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConfirmOrder;
