import PropTypes from "prop-types";

const Button = ({ bgColor, text, textColor }) => {
  return (
    <button
      style={{
        backgroundColor: bgColor,
        color: textColor,
        padding: "10px 20px",
        border: "none",
        borderRadius: "50px",
        fontSize: "16px",
        fontWeight: "bold",
        cursor: "pointer",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        transition: "all 0.3s ease",
      }}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  bgColor: PropTypes.string.isRequired, // Background color
  text: PropTypes.string.isRequired, // Button text
  textColor: PropTypes.string.isRequired, // Text color
};

export default Button;
