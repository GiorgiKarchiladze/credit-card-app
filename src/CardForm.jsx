import React from "react";
import PropTypes from "prop-types";

function CardForm({
                      setCardNumber,
                      setCardHolderName,
                      setCardValidity,
                      cardNumber,
                      cardHolderName,
                      cardValidityDate
                  }) {
    function handleCardNumberChange(e) {
        setCardNumber(e.target.value);
    }

    function handleCardHolderNameChange(e) {
        setCardHolderName(e.target.value);
    }

    function handleCardValidityChange(e) {
        setCardValidity(e.target.value);
    }

    return (
        <div className="card-form">
            <input
                type="text"
                className="card-number"
                value={cardNumber}
                onChange={handleCardNumberChange}
            />
            <input
                type="text"
                className="card-holder-name"
                value={cardHolderName}
                onChange={handleCardHolderNameChange}
            />
            <input
                type="text"
                className="card-validity-date"
                value={cardValidityDate}
                onChange={handleCardValidityChange}
            />
        </div>
    );
}

CardForm.propTypes = {
    setCardNumber: PropTypes.func,
    setCardHolderName: PropTypes.func,
    setCardValidity: PropTypes.func,
    cardNumber: PropTypes.string,
    cardHolderName: PropTypes.string,
    cardValidityDate: PropTypes.string,
}
export default CardForm;
