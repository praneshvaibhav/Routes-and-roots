import { useMemo } from "react";
import PropTypes from "prop-types";
import "./CalendarDay2.css";

const CalendarDay2 = ({
  className = "",
  propWidth,
  propAlignSelf,
  line62,
  line63,
}) => {
  const calendarDay2Style = useMemo(() => {
    return {
      width: propWidth,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propAlignSelf]);

  return (
    <div className={`calendar-day4 ${className}`} style={calendarDay2Style}>
      <div className="day-details3">
        <div className="day-details-child" />
        <div className="day-elements2">
          <div className="date2">22</div>
        </div>
        <img className="day-details-item" alt="" src={line62} />
        <div className="day-info2">
          <div className="weekday-container1">
            <div className="weekday-box">
              <div className="sunday51">Sunday</div>
              <div className="sunday52">Sunday</div>
            </div>
          </div>
          <div className="festival-container2">
            <img
              className="festival-container-inner"
              loading="lazy"
              alt=""
              src={line63}
            />
          </div>
          <div className="sri-narayan-jayanti">Sri Narayan Jayanti</div>
        </div>
      </div>
    </div>
  );
};

CalendarDay2.propTypes = {
  className: PropTypes.string,
  line62: PropTypes.string,
  line63: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propAlignSelf: PropTypes.any,
};

export default CalendarDay2;
