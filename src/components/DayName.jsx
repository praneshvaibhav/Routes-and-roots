import { useMemo } from "react";
import PropTypes from "prop-types";
import "./DayName.css";

const DayName = ({ className = "", dayNameSeparator, propBottom }) => {
  const dayNameSeparatorStyle = useMemo(() => {
    return {
      bottom: propBottom,
    };
  }, [propBottom]);

  return (
    <div className={`day-name ${className}`}>
      <div className="day-name-container2">
        <div className="day-name-top">1</div>
        <div className="friday1">Friday</div>
      </div>
      <img
        className="day-name-separator"
        alt=""
        src={dayNameSeparator}
        style={dayNameSeparatorStyle}
      />
    </div>
  );
};

DayName.propTypes = {
  className: PropTypes.string,
  dayNameSeparator: PropTypes.string,

  /** Style props */
  propBottom: PropTypes.any,
};

export default DayName;
