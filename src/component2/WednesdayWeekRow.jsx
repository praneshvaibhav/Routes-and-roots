import PropTypes from "prop-types";
import "./WednesdayWeekRow.css";

const WednesdayWeekRow = ({ className = "", wednesdaySeparator }) => {
  return (
    <div className={`wednesday-week-row ${className}`}>
      <div className="sunday-cells">
        <div className="sunday49">Sunday</div>
        <div className="sunday50">Sunday</div>
      </div>
      <div className="wednesday-separator-wrapper">
        <img
          className="wednesday-separator-icon"
          loading="lazy"
          alt=""
          src={wednesdaySeparator}
        />
      </div>
      <div className="chaturthi-row">
        <div className="ganesh-chaturthi46">Ganesh Chaturthi</div>
        <div className="ganesh-chaturthi47">Ganesh Chaturthi</div>
      </div>
    </div>
  );
};

WednesdayWeekRow.propTypes = {
  className: PropTypes.string,
  wednesdaySeparator: PropTypes.string,
};

export default WednesdayWeekRow;
