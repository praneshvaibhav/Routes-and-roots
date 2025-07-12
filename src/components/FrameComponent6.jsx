import { useMemo } from "react";
import PropTypes from "prop-types";
import "./FrameComponent6.css";

const FrameComponent6 = ({ className = "", appIconBackgroundImage }) => {
  const frameDiv7Style = useMemo(() => {
    return {
      backgroundImage: appIconBackgroundImage,
    };
  }, [appIconBackgroundImage]);

  return (
    <div className={`rectangle-parent28 ${className}`}>
      <div className="frame-child53" />
      <div className="frame-parent70">
        <div className="email-container">
          <img
            className="email-icon3"
            loading="lazy"
            alt=""
            src="/email@2x.png"
          />
          <div className="inforootsroutescom-container">
            <div className="inforootsroutescom3">{`INFO@ROOTS&ROUTES.COM`}</div>
          </div>
        </div>
        <div className="frame-parent71">
          <div className="phone-group" style={frameDiv7Style}>
            <img className="phone-icon3" alt="" src="/phone@2x.png" />
            <div className="app-icon" />
          </div>
          <div className="wrapper2">
            <a className="a2">+91- 200-352-4121</a>
          </div>
        </div>
      </div>
      <div className="globe-container-parent">
        <div className="globe-container">
          <img className="earth-globe-icon3" alt="" src="/earth-globe@2x.png" />
          <div className="eng-container">
            <a className="eng3">{`ENG `}</a>
          </div>
        </div>
        <div className="user-container">
          <img
            className="user-icon3"
            loading="lazy"
            alt=""
            src="/user@2x.png"
          />
          <div className="sign-in-container">
            <a className="eng3">SIGN IN</a>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent6.propTypes = {
  className: PropTypes.string,

  /** Style props */
  appIconBackgroundImage: PropTypes.any,
};

export default FrameComponent6;
