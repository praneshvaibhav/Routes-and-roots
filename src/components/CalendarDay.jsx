import { useMemo } from "react";
import PropTypes from "prop-types";
import "./CalendarDay.css";

const CalendarDay = ({
  className = "",
  propAlignSelf,
  propWidth,
  date,
  dayName,
  monday,
  line24,
  ganeshVisarjan,
  propHeight,
  propDisplay,
}) => {
  const calendarDayStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propAlignSelf, propWidth]);

  const ganeshVisarjan1Style = useMemo(() => {
    return {
      height: propHeight,
      display: propDisplay,
    };
  }, [propHeight, propDisplay]);

  return (
    <div className={`calendar-day2 ${className}`} style={calendarDayStyle}>
      <div className="calendar-day-child" />
      <div className="day-details2">
        <div className="date">{date}</div>
      </div>
      <img className="day-name-icon" alt="" src={dayName} />
      <div className="festival">
        <div className="festival-name1">
          <div className="monday4">{monday}</div>
        </div>
        <div className="festival-inner">
          <img className="frame-child85" loading="lazy" alt="" src={line24} />
        </div>
        <div className="ganesh-visarjan2" style={ganeshVisarjan1Style}>
          {ganeshVisarjan}
        </div>
      </div>
    </div>
  );
};

CalendarDay.propTypes = {
  className: PropTypes.string,
  date: PropTypes.string,
  dayName: PropTypes.string,
  monday: PropTypes.string,
  line24: PropTypes.string,
  ganeshVisarjan: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propWidth: PropTypes.any,
  propHeight: PropTypes.any,
  propDisplay: PropTypes.any,
};

export default CalendarDay;
