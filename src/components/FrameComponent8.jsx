import PropTypes from "prop-types";
import "./FrameComponent8.css";

const FrameComponent8 = ({
  className = "",
  date,
  sunday,
  line29,
  mahalaya,
}) => {
  return (
    <div className={`day-details-wrapper ${className}`}>
      <div className="day-details5">
        <div className="day-details-inner" />
        <div className="day-info3">
          <div className="date4">{date}</div>
        </div>
        <div className="day-name-container1">
          <div className="sunday-wrapper">
            <div className="sunday53">{sunday}</div>
          </div>
          <div className="day-name-container-inner">
            <img className="frame-child90" loading="lazy" alt="" src={line29} />
          </div>
          <div className="mahalaya1">{mahalaya}</div>
        </div>
      </div>
    </div>
  );
};

FrameComponent8.propTypes = {
  className: PropTypes.string,
  date: PropTypes.string,
  sunday: PropTypes.string,
  line29: PropTypes.string,
  mahalaya: PropTypes.string,
};

export default FrameComponent8;
