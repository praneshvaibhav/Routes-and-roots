import { useMemo } from "react";
import PropTypes from "prop-types";
import "./FrameComponent5.css";

const FrameComponent5 = ({
  className = "",
  propAlignSelf,
  propGap,
  propWidth,
  propWidth1,
  copperKada,
  propAlignSelf1,
  propWidth2,
  propDisplay,
  rs589,
}) => {
  const frameDiv5Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      gap: propGap,
      width: propWidth,
    };
  }, [propAlignSelf, propGap, propWidth]);

  const frameDiv6Style = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const copperKadaStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
      width: propWidth2,
      display: propDisplay,
    };
  }, [propAlignSelf1, propWidth2, propDisplay]);

  return (
    <div className={`frame-parent62 ${className}`} style={frameDiv5Style}>
      <div className="copper-kada-parent" style={frameDiv6Style}>
        <div className="copper-kada" style={copperKadaStyle}>
          {copperKada}
        </div>
        <div className="rs589-wrapper">
          <div className="rs589">{rs589}</div>
        </div>
      </div>
      <div className="kada-add-cart">
        <button className="rectangle-parent23">
          <div className="frame-child47" />
          <div className="add-to-cart1">Add to cart</div>
        </button>
      </div>
    </div>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
  copperKada: PropTypes.string,
  rs589: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propGap: PropTypes.any,
  propWidth: PropTypes.any,
  propWidth1: PropTypes.any,
  propAlignSelf1: PropTypes.any,
  propWidth2: PropTypes.any,
  propDisplay: PropTypes.any,
};

export default FrameComponent5;
