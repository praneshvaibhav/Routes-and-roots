import PropTypes from "prop-types";
import "./MondayDateInner.css";

const MondayDateInner = ({
  className = "",
  mondayDaySeparator,
  mondayFestivalSeparator,
  line86,
  saturdayFestivalSeparator,
}) => {
  return (
    <div className={`monday-date-inner ${className}`}>
      <div className="monday-date-content">
        <div className="monday-date-content-child" />
        <div className="monday-day-icon">
          <div className="saturday-icon">23</div>
        </div>
        <div className="monday-day-name">
          <div className="monday5">Monday</div>
          <img
            className="monday-day-separator"
            alt=""
            src={mondayDaySeparator}
          />
        </div>
        <div className="monday-festival">
          <div className="monday-festival-inner">
            <img
              className="monday-festival-separator"
              loading="lazy"
              alt=""
              src={mondayFestivalSeparator}
            />
          </div>
          <div className="indra-jatra"> Indra Jatra</div>
        </div>
      </div>
      <div className="saturday-date">
        <div className="saturday-date-inner-container">
          <div className="monday-date-content-child" />
          <div className="monday-day-icon">
            <div className="saturday-icon">28</div>
          </div>
          <div className="monday-day-name">
            <div className="monday5">Saturday</div>
            <img className="saturday-info-child" alt="" src={line86} />
          </div>
          <div className="monday-festival">
            <div className="monday-festival-inner">
              <img
                className="saturday-festival-separator"
                loading="lazy"
                alt=""
                src={saturdayFestivalSeparator}
              />
            </div>
            <div className="indra-jatra"> Maha Navami</div>
          </div>
        </div>
      </div>
    </div>
  );
};

MondayDateInner.propTypes = {
  className: PropTypes.string,
  mondayDaySeparator: PropTypes.string,
  mondayFestivalSeparator: PropTypes.string,
  line86: PropTypes.string,
  saturdayFestivalSeparator: PropTypes.string,
};

export default MondayDateInner;
