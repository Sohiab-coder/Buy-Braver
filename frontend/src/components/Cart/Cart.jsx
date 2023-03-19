import React, { useEffect } from "react";
import "./Cart.css";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";

const Cart = () => {
  const { cartItems, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const decreaseQuantity = async (id) => {
    await dispatch({ type: "decrement", payload: id });
    dispatch({ type: "calculat" });
  };

  const increaseQuantity = async (id) => {
    await dispatch({ type: "increment", payload: id });
    dispatch({ type: "calculat" });
  };

  const deleteHandler = async (id) => {
    await dispatch({ type: "delete", payload: id });
    dispatch({ type: "calculat" });
  };

  useEffect(() => {
    dispatch({ type: "calculat" });
  }, [dispatch]);

  return (
    <section className="container">
      {cartItems.length > 0 ? (
        <>
          <div className="tableClass">
            <main>
              <table>
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Delete</th>
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
                        <td className="cart-qty-btns">
                          <button
                            onClick={() => decreaseQuantity(cart.product)}
                          >
                            -
                          </button>
                          <input readOnly type="number" value={cart.quantity} />
                          <button
                            onClick={() => increaseQuantity(cart.product)}
                          >
                            +
                          </button>
                        </td>
                        <td className="cart-prod-delete">
                          <AiFillDelete onClick={() => deleteHandler(2)} />
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </main>
          </div>
          <div className="cart-price-container">
            <h2>Cart Total</h2>
            <div className="price-cart">
              <div>
                <b>Subtotal</b>
                <p>${totalPrice}</p>
              </div>
              <div>
                <b>Total</b>
                <p>${totalPrice}</p>
              </div>
            </div>
            <button>
              <Link to={"/checkout"}>Proceed to checkout</Link>
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="empty-cart">
            <img src="/images/empty-cart.png" alt="" />
            <button>
              <Link to={"/"}>
                <MdOutlineShoppingCart /> Back To Shop
              </Link>
            </button>
          </div>
        </>
      )}
    </section>
  );
};

export default Cart;
