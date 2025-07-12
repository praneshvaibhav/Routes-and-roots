import PropTypes from "prop-types";
import "./DestinationHeader.css";

const DestinationHeader = ({ className = "", screenshotAiBrushRemovebg }) => {
  return (
    <div className={`destination-header ${className}`}>
      <div className="destination-image-container">
        <img
          className="screenshot-352-ai-brush-remo-icon8"
          alt=""
          src={screenshotAiBrushRemovebg}
        />
      </div>
      <h1 className="never-stop3">Never Stop</h1>
    </div>
  );
};

DestinationHeader.propTypes = {
  className: PropTypes.string,
  screenshotAiBrushRemovebg: PropTypes.string,
};

export default DestinationHeader;
