import { useMemo } from "react";
import PropTypes from "prop-types";
import "./FrameComponent10.css";

const FrameComponent10 = ({
  className = "",
  propWidth,
  propFlexDirection,
  propAlignSelf,
  propPadding,
  propWidth1,
  propFlex,
  firstMondayPlaceholderContent,
  monday,
  line23,
  ganeshVisarjan,
  propAlignSelf1,
  propWidth2,
  mondayWeekSeparator,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      width: propWidth,
      flexDirection: propFlexDirection,
      alignSelf: propAlignSelf,
      padding: propPadding,
    };
  }, [propWidth, propFlexDirection, propAlignSelf, propPadding]);

  const frameDiv1Style = useMemo(() => {
    return {
      width: propWidth1,
      flex: propFlex,
    };
  }, [propWidth1, propFlex]);

  const ganeshVisarjanStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
      width: propWidth2,
    };
  }, [propAlignSelf1, propWidth2]);

  return (
    <div className={`week-one-inner ${className}`} style={frameDivStyle}>
      <div className="rectangle-parent13" style={frameDiv1Style}>
        <div className="frame-child21" />
        <div className="first-monday-placeholder">
          <div className="first-monday-placeholder1">
            {firstMondayPlaceholderContent}
          </div>
        </div>
        <div className="monday-row-parent">
          <div className="monday-row">
            <div className="monday1">{monday}</div>
          </div>
          <div className="line-wrapper1">
            <img className="frame-child22" alt="" src={line23} />
          </div>
          <div className="ganesh-visarjan" style={ganeshVisarjanStyle}>
            {ganeshVisarjan}
          </div>
        </div>
        <img
          className="monday-week-separator"
          loading="lazy"
          alt=""
          src={mondayWeekSeparator}
        />
      </div>
    </div>
  );
};

FrameComponent10.propTypes = {
  className: PropTypes.string,
  firstMondayPlaceholderContent: PropTypes.string,
  monday: PropTypes.string,
  line23: PropTypes.string,
  ganeshVisarjan: PropTypes.string,
  mondayWeekSeparator: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propFlexDirection: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propPadding: PropTypes.any,
  propWidth1: PropTypes.any,
  propFlex: PropTypes.any,
  propAlignSelf1: PropTypes.any,
  propWidth2: PropTypes.any,
};

export default FrameComponent10;
