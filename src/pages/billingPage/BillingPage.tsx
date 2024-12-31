import React from "react";
import Header from "../../components/header/Header";
import { ACTIVE_STATES } from "../../utils/HeaderConstants";
import BillCart from "../../components/billCart/BillCart";

const BillingPage: React.FC = () => {

    return(
        <div className="billing-page">
            <Header activeState={ACTIVE_STATES.none} />
            <BillCart />
        </div>
    );
};

export default BillingPage;