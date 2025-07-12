import { useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./InfoSignIn.css";

const InfoSignIn = ({
  className = "",
  propAlignSelf,
  propPosition,
  propTop,
  propLeft,
  propBackgroundImage,
}) => {
  const infoSignInStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      position: propPosition,
      top: propTop,
      left: propLeft,
    };
  }, [propAlignSelf, propPosition, propTop, propLeft]);

  const frameDiv9Style = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  const navigate = useNavigate();

  const onENGTextClick = useCallback(() => {
    navigate("/desktop-language");
  }, [navigate]);

  const onSIGNINTextClick = useCallback(() => {
    navigate("/desktop-sign-in");
  }, [navigate]);

  return (
    <div className={`info-sign-in ${className}`} style={infoSignInStyle}>
      <div className="info-sign-in-buttons">
        <div className="inforootsroutescom4">{`INFO@ROOTS&ROUTES.COM`}</div>
        <a className="a3">+91- 200-352-4121</a>
      </div>
      <div className="info-sign-in-buttons1">
        <a className="eng4" onClick={onENGTextClick}>{`ENG `}</a>
        <a className="sign-in6" onClick={onSIGNINTextClick}>
          SIGN IN
        </a>
      </div>
      <div className="rectangle-parent37">
        <div className="frame-child63" />
        <img
          className="email-icon4"
          loading="lazy"
          alt=""
          src="/email@2x.png"
        />
        <div className="phone-container" style={frameDiv9Style}>
          <img className="phone-icon4" alt="" src="/phone@2x.png" />
          <div className="frame-child64" />
        </div>
        <img className="user-icon4" loading="lazy" alt="" src="/user@2x.png" />
        <img className="earth-globe-icon4" alt="" src="/earth-globe@2x.png" />
      </div>
    </div>
  );
};

InfoSignIn.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propPosition: PropTypes.any,
  propTop: PropTypes.any,
  propLeft: PropTypes.any,
  propBackgroundImage: PropTypes.any,
};

export default InfoSignIn;
