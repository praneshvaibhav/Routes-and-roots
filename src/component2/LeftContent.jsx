import { useMemo } from "react";
import PropTypes from "prop-types";
import "./LeftContent.css";

const LeftContent = ({
  className = "",
  emailDetailsTop,
  emailDetailsPosition,
  frameDivMinWidth,
  aBackgroundImage,
}) => {
  const leftContentStyle = useMemo(() => {
    return {
      top: emailDetailsTop,
      position: emailDetailsPosition,
    };
  }, [emailDetailsTop, emailDetailsPosition]);

  const emailDetailsStyle = useMemo(() => {
    return {
      minWidth: frameDivMinWidth,
    };
  }, [frameDivMinWidth]);

  const userIconStyle = useMemo(() => {
    return {
      backgroundImage: aBackgroundImage,
    };
  }, [aBackgroundImage]);

  return (
    <header className={`left-content ${className}`} style={leftContentStyle}>
      <div className="left-content-child" />
      <div className="email-info-wrapper">
        <div className="email-info">
          <div className="email-details" style={emailDetailsStyle}>
            <img
              className="email-icon10"
              loading="lazy"
              alt=""
              src="/email@2x.png"
            />
            <div className="email-domain">
              <div className="inforootsroutescom10">{`INFO@ROOTS&ROUTES.COM`}</div>
            </div>
          </div>
          <div className="user-icon-parent">
            <div className="user-icon10" style={userIconStyle}>
              <img className="phone-icon10" alt="" src="/phone@2x.png" />
              <div className="user-icon-child" />
            </div>
            <div className="user-status">
              <a className="a5">+91- 200-352-4121</a>
            </div>
          </div>
        </div>
      </div>
      <div className="globe-info-parent">
        <div className="globe-info">
          <div className="globe-details">
            <img
              className="earth-globe-icon10"
              alt=""
              src="/earth-globe@2x.png"
            />
            <div className="language4">
              <a className="eng10">{`ENG `}</a>
            </div>
          </div>
        </div>
        <div className="sign-in-button1">
          <img
            className="user-icon11"
            loading="lazy"
            alt=""
            src="/user@2x.png"
          />
          <div className="email-domain">
            <a className="eng10">SIGN IN</a>
          </div>
        </div>
      </div>
    </header>
  );
};

LeftContent.propTypes = {
  className: PropTypes.string,

  /** Style props */
  emailDetailsTop: PropTypes.any,
  emailDetailsPosition: PropTypes.any,
  frameDivMinWidth: PropTypes.any,
  aBackgroundImage: PropTypes.any,
};

export default LeftContent;
