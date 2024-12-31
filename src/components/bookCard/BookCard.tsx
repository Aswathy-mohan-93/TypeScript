import React from "react";
import "./BookCard.css";
import CounterSetup from "../counterSetup/CounterSetup";
import { addToCart } from "../../redux/CartSlice";
import CustomButton from "../customButton/CustomButton";
import { BUTTON_TYPES } from "../../utils/Constants";
import { selectBook } from "../../redux/BookSlice";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/Store";

interface BookCardProps {
  bookData: any;
}

const BookCard: React.FC<BookCardProps> = ({ bookData }) => {
  // Accessing the properties from bookData
  const { title, authors, description } = bookData.volumeInfo;
  const { id } = bookData;

  const dispatch = useDispatch();
  const cartCount =
    useSelector((state: RootState) => state.cart.itemCounts[id]) || 0;

  const addToCartButtonClicked = (id: number) => () => {
    dispatch(addToCart({ bookId: id }));  
  };

  const truncatedDescription = description ? description.slice(0, 20) : "";
  const imageUrl = `https://picsum.photos/seed/${title}/500/400`;

  return (
    <div className="book-card">
      <Link
        to={`/bookdetail/${id}`} // Link to navigate the detail page
        onClick={() => dispatch(selectBook(bookData))} // Dispatch to select the book
        className="book-card-link"
      >
        {/* Book image */}
        <img src={imageUrl} alt={title} className="book-image" />

        <h1 className="book-title">{title}</h1>

        {authors && authors.length > 0 && (
          <h2 className="book-author">{authors.join(", ")}</h2>
        )}

        {truncatedDescription && (
          <p className="book-description">{truncatedDescription}...</p>
        )}
      </Link>
      {cartCount === 0 ? (
        <CustomButton
          type={BUTTON_TYPES.ADD_TO_CART}
          label="Add To Cart"
          onClick={addToCartButtonClicked(Number(id))}
        />
      ) : (
        <CounterSetup bookId={id} />
      )}
    </div>
  );
};

export default BookCard;
