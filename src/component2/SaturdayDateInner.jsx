import { useMemo } from "react";
import PropTypes from "prop-types";
import "./SaturdayDateInner.css";

const SaturdayDateInner = ({
  className = "",
  propAlignSelf,
  propFlex,
  propHeight,
  propWidth,
  line40,
  thursdayDateInfo,
}) => {
  const saturdayDateInnerStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      flex: propFlex,
      height: propHeight,
      width: propWidth,
    };
  }, [propAlignSelf, propFlex, propHeight, propWidth]);

  return (
    <div
      className={`saturday-date-inner ${className}`}
      style={saturdayDateInnerStyle}
    >
      <div className="saturday-date-inner-child" />
      <div className="saturday-date-content">
        <div className="saturday-icons">
          <div className="saturday-icon-one">1</div>
          <div className="saturday-icon-two">14</div>
        </div>
      </div>
      <div className="saturday-day-info">
        <div className="saturday-day-name-container">
          <div className="saturday3">Saturday</div>
        </div>
        <div className="saturday-day-separator">
          <img className="saturday-day-separator-child" alt="" src={line40} />
        </div>
        <div className="saturday-festival">
          <div className="chhath-puja-nahay">Chhath Puja (Nahay Khay)</div>
          <div className="saturday-festival-description">{` `}</div>
        </div>
      </div>
      <img
        className="thursday-date-info"
        loading="lazy"
        alt=""
        src={thursdayDateInfo}
      />
    </div>
  );
};

SaturdayDateInner.propTypes = {
  className: PropTypes.string,
  line40: PropTypes.string,
  thursdayDateInfo: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propFlex: PropTypes.any,
  propHeight: PropTypes.any,
  propWidth: PropTypes.any,
};

export default SaturdayDateInner;
