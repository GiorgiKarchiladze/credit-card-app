import { RiMastercardFill } from "react-icons/ri";
function MastercardLogo(){


    const color = "hsla(198,27%,76%,0.6)";

    const mastercardLogoStyle = {
        position: "absolute",
        height: "100px",
        bottom: "20px",
        right: "90px",
        display: "flex",
        justifyContent: "center",

    }

    const mastercardFillStyle = {
        position: "absolute",
        scale: "calc(8)",
        top: "20%",
        color
    }

    const mastercardTextStyle = {
        position: "absolute",
        top: "50%",
        fontSize: "20px",
        color
    }

    return (
        <div className="mastercardLogo" style={mastercardLogoStyle}>
            <RiMastercardFill style={mastercardFillStyle} />
            <p className="mastercard-text" style={mastercardTextStyle}>mastercard.</p>
        </div>

    )
}

export default MastercardLogo;