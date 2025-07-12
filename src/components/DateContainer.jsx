import { useMemo } from "react";
import PropTypes from "prop-types";
import "./DateContainer.css";

const DateContainer = ({
  className = "",
  propFlex,
  propAlignSelf,
  dateElements,
  line50,
  tuesday,
  line51,
  vishwakarmaPuja,
}) => {
  const dateContainerStyle = useMemo(() => {
    return {
      flex: propFlex,
      alignSelf: propAlignSelf,
    };
  }, [propFlex, propAlignSelf]);

  return (
    <div className={`date-container2 ${className}`} style={dateContainerStyle}>
      <div className="date-container-child" />
      <div className="date-box">
        <div className="date-elements-parent">
          <div className="date-elements">1</div>
          <div className="date-elements1">{dateElements}</div>
        </div>
      </div>
      <img className="date-container-item" alt="" src={line50} />
      <div className="day-info1">
        <div className="weekday-container">
          <div className="tuesday5">{tuesday}</div>
        </div>
        <div className="festival-container1">
          <img
            className="festival-container-item"
            loading="lazy"
            alt=""
            src={line51}
          />
        </div>
        <div className="vishwakarma-puja1">{vishwakarmaPuja}</div>
      </div>
    </div>
  );
};

DateContainer.propTypes = {
  className: PropTypes.string,
  dateElements: PropTypes.string,
  line50: PropTypes.string,
  tuesday: PropTypes.string,
  line51: PropTypes.string,
  vishwakarmaPuja: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propAlignSelf: PropTypes.any,
};

export default DateContainer;
