import { useMemo } from "react";
import PropTypes from "prop-types";
import "./FridayEvent.css";

const FridayEvent = ({
  className = "",
  propWidth,
  propAlignSelf,
  propFlexDirection,
  propFlex,
  propAlignSelf1,
  fridayEmptyCell,
  fridaySeparator,
  friday,
  radhastamiSeparator,
  radhastami,
  propAlignSelf2,
  propWidth1,
}) => {
  const fridayEventStyle = useMemo(() => {
    return {
      width: propWidth,
      alignSelf: propAlignSelf,
      flexDirection: propFlexDirection,
    };
  }, [propWidth, propAlignSelf, propFlexDirection]);

  const fridayEventContainerStyle = useMemo(() => {
    return {
      flex: propFlex,
      alignSelf: propAlignSelf1,
    };
  }, [propFlex, propAlignSelf1]);

  const radhastamiStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf2,
      width: propWidth1,
    };
  }, [propAlignSelf2, propWidth1]);

  return (
    <div className={`friday-event ${className}`} style={fridayEventStyle}>
      <div className="friday-event-container" style={fridayEventContainerStyle}>
        <div className="friday-event-container-child" />
        <div className="friday-empty-cell-wrapper">
          <div className="friday-empty-cell">{fridayEmptyCell}</div>
        </div>
        <img className="friday-separator-icon" alt="" src={fridaySeparator} />
        <div className="radhastami-container">
          <div className="friday-wrapper">
            <div className="friday">{friday}</div>
          </div>
          <div className="radhastami-separator-wrapper">
            <img
              className="radhastami-separator-icon"
              loading="lazy"
              alt=""
              src={radhastamiSeparator}
            />
          </div>
          <div className="radhastami" style={radhastamiStyle}>
            {radhastami}
          </div>
        </div>
      </div>
    </div>
  );
};

FridayEvent.propTypes = {
  className: PropTypes.string,
  fridayEmptyCell: PropTypes.string,
  fridaySeparator: PropTypes.string,
  friday: PropTypes.string,
  radhastamiSeparator: PropTypes.string,
  radhastami: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propFlexDirection: PropTypes.any,
  propFlex: PropTypes.any,
  propAlignSelf1: PropTypes.any,
  propAlignSelf2: PropTypes.any,
  propWidth1: PropTypes.any,
};

export default FridayEvent;
