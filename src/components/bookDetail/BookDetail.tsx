import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./BookDetail.css";
import { BUTTON_TYPES } from "../../utils/Constants";
import CustomButton from "../customButton/CustomButton";
import CounterSetup from "../counterSetup/CounterSetup";
import { addToCart } from "../../redux/CartSlice";
import Header from "../header/Header";
import { ACTIVE_STATES } from "../../utils/HeaderConstants";
import { RootState } from "../../redux/Store";

const BookDetail: React.FC = () => {

  const dispatch = useDispatch()
  const selectedBook = useSelector((state: RootState) => state.book.selectedBook);
  const cartCount = useSelector((state: RootState) => state.cart.itemCounts[selectedBook.id]) || 0;

  if (!selectedBook) {
    return <div>Loading...</div>;
  }
  const { volumeInfo } = selectedBook;
  const { title, authors, description, imageLinks } = volumeInfo || {};
  const { id } = selectedBook || {};

  if (!id) {
    return <div>Loading...</div>;
  }
  const addToCartButtonClicked = () => {
    dispatch(addToCart({ bookId: selectedBook.id }));
  };

  const imageUrl = `https://picsum.photos/seed/${title}/400/300`;

  return (
    <div>
      <Header activeState={ACTIVE_STATES.bookDetails} />
      <div className="book-detail-card">
        {/* Book image */}
        <div className="bookdetail-img">
            <img
            src={imageUrl}
              alt={title}
              className="book-detail-image"
            />
        </div>

        <div className="bookdetail-content">
          <h1 className="book-detail-title">{title}</h1>
          {authors && authors.length > 0 && (
            <h2 className="book-detail-author">{authors.join(", ")}</h2>
          )}
          <p className="book-detail-description">{description}</p>
        </div>

        {cartCount === 0 ? (
          <CustomButton
            type={BUTTON_TYPES.ADD_TO_CART}
            label="Add To Cart"
            onClick={addToCartButtonClicked}
          />
        ) : (
          <CounterSetup bookId={id} />
        )}
      </div>
    </div>
  );
}

export default BookDetail;
