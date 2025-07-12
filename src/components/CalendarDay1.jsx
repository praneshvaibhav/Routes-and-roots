import { useMemo } from "react";
import PropTypes from "prop-types";
import "./CalendarDay1.css";

const CalendarDay1 = ({
  className = "",
  propAlignSelf,
  propWidth,
  prop,
  saturday,
  line30,
  line31,
  kshamavani,
}) => {
  const calendarDay1Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propAlignSelf, propWidth]);

  return (
    <div className={`calendar-day3 ${className}`} style={calendarDay1Style}>
      <div className="calendar-day-item" />
      <div className="wrapper10">
        <div className="div66">{prop}</div>
      </div>
      <div className="saturday-group">
        <div className="saturday2">{saturday}</div>
        <img className="frame-child86" alt="" src={line30} />
      </div>
      <div className="calendar-day-inner">
        <img className="frame-child87" loading="lazy" alt="" src={line31} />
      </div>
      <div className="kshamavani">{kshamavani}</div>
    </div>
  );
};

CalendarDay1.propTypes = {
  className: PropTypes.string,
  prop: PropTypes.string,
  saturday: PropTypes.string,
  line30: PropTypes.string,
  line31: PropTypes.string,
  kshamavani: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propWidth: PropTypes.any,
};

export default CalendarDay1;
