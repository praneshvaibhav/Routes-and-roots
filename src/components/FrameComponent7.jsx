import PropTypes from "prop-types";
import "./FrameComponent7.css";

const FrameComponent7 = ({ className = "", date, tuesday, line21, onam }) => {
  return (
    <div className={`rectangle-parent48 ${className}`}>
      <div className="frame-child88" />
      <div className="day-details4">
        <div className="date3">{date}</div>
      </div>
      <div className="day-name-container">
        <div className="tuesday6">{tuesday}</div>
      </div>
      <div className="frame-parent106">
        <div className="line-wrapper12">
          <img className="frame-child89" loading="lazy" alt="" src={line21} />
        </div>
        <div className="onam1">{onam}</div>
      </div>
    </div>
  );
};

FrameComponent7.propTypes = {
  className: PropTypes.string,
  date: PropTypes.string,
  tuesday: PropTypes.string,
  line21: PropTypes.string,
  onam: PropTypes.string,
};

export default FrameComponent7;
