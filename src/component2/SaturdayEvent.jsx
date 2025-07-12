import { useMemo } from "react";
import PropTypes from "prop-types";
import "./SaturdayEvent.css";

const SaturdayEvent = ({
  className = "",
  propWidth,
  propAlignSelf,
  propWidth1,
  saturdayEmptyCell,
  saturday,
  samvatsariSeparator,
  secondSamvatsariSeparator,
  samvatsari,
}) => {
  const saturdayEventStyle = useMemo(() => {
    return {
      width: propWidth,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propAlignSelf]);

  const frameDiv11Style = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  return (
    <div className={`saturday-event ${className}`} style={saturdayEventStyle}>
      <div className="saturday-event-container">
        <div className="saturday-event-container-child" />
        <div className="saturday-empty-cell-wrapper" style={frameDiv11Style}>
          <div className="saturday-empty-cell">{saturdayEmptyCell}</div>
        </div>
        <div className="samvatsari-container">
          <div className="saturday1">{saturday}</div>
          <img
            className="samvatsari-separator-icon"
            alt=""
            src={samvatsariSeparator}
          />
        </div>
        <div className="samvatsari-details">
          <div className="second-samvatsari-separator-wrapper">
            <img
              className="second-samvatsari-separator"
              loading="lazy"
              alt=""
              src={secondSamvatsariSeparator}
            />
          </div>
          <div className="samvatsari">{samvatsari}</div>
        </div>
      </div>
    </div>
  );
};

SaturdayEvent.propTypes = {
  className: PropTypes.string,
  saturdayEmptyCell: PropTypes.string,
  saturday: PropTypes.string,
  samvatsariSeparator: PropTypes.string,
  secondSamvatsariSeparator: PropTypes.string,
  samvatsari: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propWidth1: PropTypes.any,
};

export default SaturdayEvent;
