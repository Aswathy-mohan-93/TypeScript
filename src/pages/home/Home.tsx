import React from "react";
import "./Home.css";
import '../../App.css';
import Header from "../../components/header/Header";
import { useNavigate } from "react-router-dom";
import { BUTTON_TYPES } from "../../utils/Constants";
import CustomButton from "../../components/customButton/CustomButton";
import { ACTIVE_STATES } from "../../utils/HeaderConstants";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const buyNowButtonClicked = () => {
    navigate("/booklist");
  }

  return (
    <div className="homePageBG">
      <Header activeState={ACTIVE_STATES.none}/>
      <div className="content">
        <h1>8640 Used Books On</h1>
        <h2>Sale</h2>
        <p>
          Buy And Sell Used Books In India. Search And Buy Second Hand Books
          Near You. Post Free Ad To Sell Old Books In City. Download the app
          now.
        </p>
        <CustomButton type= {BUTTON_TYPES.BUY_NOW} label="BUY NOW" onClick={buyNowButtonClicked}></CustomButton>
      </div>
    </div>
  );
}

export default Home;
