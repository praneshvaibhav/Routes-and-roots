import PropTypes from "prop-types";
import "./CalendarDayContainer.css";

const CalendarDayContainer = ({ className = "", eventSeparator }) => {
  return (
    <div className={`calendar-day-container2 ${className}`}>
      <div className="calendar-day-container-item" />
      <div className="date-placeholder-container">
        <div className="date-placeholder1">5</div>
      </div>
      <div className="weekday-name1">
        <div className="thursday1">Thursday</div>
      </div>
      <div className="event-container-wrapper">
        <div className="event-container1">
          <div className="event-details1">
            <img
              className="event-separator-icon2"
              alt=""
              src={eventSeparator}
            />
          </div>
          <div className="teachers-day"> Teacher's Day</div>
        </div>
      </div>
    </div>
  );
};

CalendarDayContainer.propTypes = {
  className: PropTypes.string,
  eventSeparator: PropTypes.string,
};

export default CalendarDayContainer;
