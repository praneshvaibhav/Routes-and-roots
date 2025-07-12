import { useMemo } from "react";
import PropTypes from "prop-types";
import "./FrameComponent3.css";

const FrameComponent3 = ({
  className = "",
  propWidth,
  propFlex,
  propMinWidth,
}) => {
  const frameDiv12Style = useMemo(() => {
    return {
      width: propWidth,
      flex: propFlex,
    };
  }, [propWidth, propFlex]);

  const mapContainerStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div
      className={`map-container-parent ${className}`}
      style={frameDiv12Style}
    >
      <button className="map-container" style={mapContainerStyle}>
        <div className="map-container-child" />
        <b className="map1">Map</b>
      </button>
      <img
        className="address-icon1"
        loading="lazy"
        alt=""
        src="/address@2x.png"
      />
    </div>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default FrameComponent3;
