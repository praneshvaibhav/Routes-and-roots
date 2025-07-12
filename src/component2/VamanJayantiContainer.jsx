import PropTypes from "prop-types";
import "./VamanJayantiContainer.css";

const VamanJayantiContainer = ({ className = "", vamanJayantiSeparator }) => {
  return (
    <div className={`vaman-jayanti-container ${className}`}>
      <div className="monday-event-details">
        <div className="vaman-jayanti-empty-parent">
          <div className="vaman-jayanti-empty">1</div>
          <div className="monday3">Monday</div>
        </div>
      </div>
      <div className="vaman-jayanti-separator-wrapper">
        <img
          className="vaman-jayanti-separator"
          alt=""
          src={vamanJayantiSeparator}
        />
      </div>
      <div className="vaman-jayanti"> Vaman Jayanti</div>
    </div>
  );
};

VamanJayantiContainer.propTypes = {
  className: PropTypes.string,
  vamanJayantiSeparator: PropTypes.string,
};

export default VamanJayantiContainer;
