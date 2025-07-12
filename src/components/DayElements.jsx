import { useMemo } from "react";
import PropTypes from "prop-types";
import "./DayElements.css";

const DayElements = ({
  className = "",
  propAlignSelf,
  propWidth,
  line36,
  line37,
}) => {
  const dayElementsStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propAlignSelf, propWidth]);

  return (
    <div className={`day-elements1 ${className}`} style={dayElementsStyle}>
      <div className="day-elements-child" />
      <div className="date-container1">
        <div className="date1">12</div>
      </div>
      <div className="day-info">
        <div className="thursday">Thursday</div>
        <div className="festival-container">
          <img className="festival-container-child" alt="" src={line36} />
        </div>
        <div className="festival-name-container1">
          <div className="kottiyoor-utsavam-parent">
            <div className="kottiyoor-utsavam">Kottiyoor Utsavam</div>
            <div className="festival-names">{` `}</div>
          </div>
        </div>
      </div>
      <img className="day-elements-item" loading="lazy" alt="" src={line37} />
    </div>
  );
};

DayElements.propTypes = {
  className: PropTypes.string,
  line36: PropTypes.string,
  line37: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propWidth: PropTypes.any,
};

export default DayElements;
