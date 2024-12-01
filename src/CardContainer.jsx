import React, { useState } from "react";
import CardForm from "./CardForm";
import CreditCard from "./CreditCard";

function CardContainer() {
    const [cardNumber, setCardNumber] = useState("0000 0000 0000 0000");
    const [cardHolderName, setCardHolderName] = useState("John Doe");
    const [cardValidityDate, setCardValidity] = useState("00/00");

    return (
        <div>
            <CreditCard
                cardNumber={cardNumber}
                cardHolderName={cardHolderName}
                cardValidityDate={cardValidityDate}
            />
            <CardForm
                setCardNumber={setCardNumber}
                setCardHolderName={setCardHolderName}
                setCardValidity={setCardValidity}
                cardNumber={cardNumber}
                cardHolderName={cardHolderName}
                cardValidityDate={cardValidityDate}
            />
        </div>
    );
}

export default CardContainer;
