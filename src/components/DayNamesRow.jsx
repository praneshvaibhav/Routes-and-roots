import { useMemo } from "react";
import PropTypes from "prop-types";
import "./DayNamesRow.css";

const DayNamesRow = ({
  className = "",
  propWidth,
  propAlignSelf,
  line34,
  line35,
}) => {
  const dayNamesRowStyle = useMemo(() => {
    return {
      width: propWidth,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propAlignSelf]);

  return (
    <div className={`day-names-row1 ${className}`} style={dayNamesRowStyle}>
      <div className="day-names-row-item" />
      <div className="wrapper9">
        <div className="div65">11</div>
      </div>
      <img className="day-names-row-inner" alt="" src={line34} />
      <div className="wednesday-parent">
        <div className="wednesday4">Wednesday</div>
        <div className="line-wrapper11">
          <img className="frame-child84" loading="lazy" alt="" src={line35} />
        </div>
        <div className="anant-chaturdashi-wrapper">
          <div className="anant-chaturdashi">Anant Chaturdashi</div>
        </div>
      </div>
    </div>
  );
};

DayNamesRow.propTypes = {
  className: PropTypes.string,
  line34: PropTypes.string,
  line35: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propAlignSelf: PropTypes.any,
};

export default DayNamesRow;
