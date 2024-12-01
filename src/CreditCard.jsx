import { FcSimCardChip } from "react-icons/fc";
import MastercardLogo from "./MastercardLogo.jsx";
import PropTypes from "prop-types";

function CreditCard({ cardNumber, cardHolderName, cardValidityDate }) {
    return (
        <div className="credit-card">
            <div className="credit-card-head"></div>
            <FcSimCardChip className="chip" />
            <MastercardLogo />
            <p className="card-number-value">{cardNumber}</p>
            <p className="card-holder-name-value">{cardHolderName}</p>
            <p className="card-validity-date-value">{cardValidityDate}</p>
            <p className="month-year">MONTH/YEAR</p>
            <p className="valid-thru">VALID THRU</p>
        </div>
    );
}

CreditCard.propTypes = {
    cardNumber: PropTypes.string,
    cardHolderName: PropTypes.string,
    cardValidityDate: PropTypes.string,
}
export default CreditCard;
