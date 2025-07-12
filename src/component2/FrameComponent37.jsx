import PropTypes from "prop-types";
import "./FrameComponent37.css";

const FrameComponent37 = ({ className = "" }) => {
  return (
    <div className={`agreement-content-wrapper ${className}`}>
      <div className="agreement-content">
        <div className="frame-parent29">
          <div className="agreement-check-wrapper">
            <div className="agreement-check" />
          </div>
          <div className="i-agree-that">{`I agree that what I have given information is true such that in future if any issue occur that at that moment of time me and my self will only be responsible. In such incident their is no involvement of ROOTS & ROUTES. I accept all terms and conditions.`}</div>
        </div>
        <div className="agreement-content-inner">
          <div className="agreement-checkbox-parent">
            <div className="agreement-checkbox" />
            <img
              className="arrow-icon"
              loading="lazy"
              alt=""
              src="/arrow@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent37.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent37;
