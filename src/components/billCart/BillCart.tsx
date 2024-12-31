import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/Store";
import { useDataContext } from "../../context/DataContext";
import "./BillCart.css";
import CustomButton from "../customButton/CustomButton";
import { BUTTON_TYPES } from "../../utils/Constants";
import CounterSetup from "../counterSetup/CounterSetup";
import { addToCart, removeFromCart } from "../../redux/CartSlice";
import { Link } from "react-router-dom";

const BillCart: React.FC = () => {
  const cartData =
    useSelector((state: RootState) => state.cart.itemCounts) || {};
  const { data } = useDataContext();
  const dispatch = useDispatch();

  const addToCartButtonClicked = (id: number) => () => {
    dispatch(addToCart({ bookId: id }));  
  };

  const removeCartButtonClicked = (id: number) => () => {
    dispatch(removeFromCart({ bookId: id }));  
  };

  const renderCartData = () => {
    if (typeof cartData === "object" && Object.keys(cartData).length > 0) {
      if (data && data.items) {
        const filteredData = data.items.filter((item) => {
          console.log("item:", item);
          console.log("item.id:", item.id);
          // Check if item.id is a key in cartData
          return cartData.hasOwnProperty(item.id);
        });

        if (filteredData.length === 0) {
          return <p>No cart data available</p>;
        }

        let totalCount = 0;

        return (
          <div className="bill-cart-container">
            <h1>Cart Items:</h1>
            <table>
              <thead>
                <tr>
                  <th>Book Title</th>
                  <th>Author(s)</th>
                  <th>Count</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((book) => {
                  const { title, authors } = book.volumeInfo;
                  const count = cartData[book.id];
                  totalCount += count;
                  return (
                    <tr key={book.id}>
                      <td>Title: {title}</td>
                      <td>Author Name: {authors.join(", ")}</td>
                      <td>{count}</td>
                      <td>
                        {count === 0 ? (
                          <CustomButton
                            type={BUTTON_TYPES.ADD_TO_CART}
                            label="Add To Cart"
                            onClick={addToCartButtonClicked(Number(book.id))}
                          />
                        ) : (
                          <CounterSetup bookId={book.id} />
                        )}
                      </td>
                      <td>
                      <CustomButton
                            type={BUTTON_TYPES.ADD_TO_CART}
                            label="Remove Cart"
                            onClick={removeCartButtonClicked(Number(book.id))}
                          />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <p>
              <strong>Total Count:</strong> {totalCount}
            </p>
          </div>
        );
      }
    }

    return <div className="no-data-view">
        <h2>Your Cart is Empty</h2>
        <p>Looks like you haven’t added anything to your cart yet.</p>
        <p>Start shopping now to add items to your cart!</p>
        <Link to="/booklist" className="shop-now-button">Shop Now</Link>
    </div>;
  };

  return <div>{renderCartData()}</div>;
};

export default BillCart;
