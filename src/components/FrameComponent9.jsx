import PropTypes from "prop-types";
import "./FrameComponent9.css";

const FrameComponent9 = ({ className = "", line25 }) => {
  return (
    <div className={`rectangle-parent49 ${className}`}>
      <div className="frame-child91" />
      <div className="wrapper11">
        <div className="div67">4</div>
      </div>
      <div className="wednesday-wrapper">
        <div className="wednesday5">Wednesday</div>
      </div>
      <div className="line-wrapper13">
        <img className="frame-child92" alt="" src={line25} />
      </div>
      <div className="nuakhai-wrapper">
        <div className="nuakhai">Nuakhai</div>
      </div>
    </div>
  );
};

FrameComponent9.propTypes = {
  className: PropTypes.string,
  line25: PropTypes.string,
};

export default FrameComponent9;
