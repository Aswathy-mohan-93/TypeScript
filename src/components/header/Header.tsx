import React from "react";
import "./Header.css";
import cartIcon from "./images/cart-img.png";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/Store";
import { ActiveState } from "../../utils/HeaderConstants";
import { Link } from "react-router-dom";

interface Headerprops {
  activeState: ActiveState;
}

const Header: React.FC<Headerprops> = ({ activeState }) => {
  const cartCount = useSelector((state: RootState) => {
    // return Object.keys(state.cart.itemCounts).length;
    return Object.values(state.cart.itemCounts).reduce(
      (total, count) => total + count,
      0
    );
  });

  return (
    <div className="header">
      <ul>
        <li className={activeState.login ? "active" : ""}>Login</li>
        <li className={activeState.home ? "active" : ""}>
          <Link to="/booklist" className="nav-link">Home</Link>
        </li>
        <li className={activeState.aboutUs ? "active" : ""}>About Us</li>
        <li className={activeState.contactUs ? "active" : ""}>Contact Us</li>
      </ul>
      {activeState.showCart !== false && cartCount > 0 && (
        <Link to="/billing" className="cart-container">
          <img src={cartIcon} alt="Cart" className="cart-icon" />
          <span className="cart-count">{cartCount}</span>
        </Link>
      )}
    </div>
  );
};

export default Header;
