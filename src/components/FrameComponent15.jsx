import { useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./FrameComponent15.css";

const FrameComponent15 = ({
  className = "",
  screenshotAiBrushRemoIconWidth,
  screenshotAiBrushRemovebg,
  sPRITIUAL2IconTop,
  sPRITIUAL2IconLeft,
  sPRITIUAL2,
  propLeft,
  propWidth,
}) => {
  const contentBannerStyle = useMemo(() => {
    return {
      width: screenshotAiBrushRemoIconWidth,
    };
  }, [screenshotAiBrushRemoIconWidth]);

  const screenshot352AiBrushRemoIconStyle = useMemo(() => {
    return {
      top: sPRITIUAL2IconTop,
      left: sPRITIUAL2IconLeft,
    };
  }, [sPRITIUAL2IconTop, sPRITIUAL2IconLeft]);

  const sPRITIUAL2IconStyle = useMemo(() => {
    return {
      left: propLeft,
      width: propWidth,
    };
  }, [propLeft, propWidth]);

  const navigate = useNavigate();

  const onENGTextClick = useCallback(() => {
    navigate("/desktop-language");
  }, [navigate]);

  const onSIGNINTextClick = useCallback(() => {
    navigate("/desktop-sign-in");
  }, [navigate]);

  const onMultiplicationImageClick = useCallback(() => {
    navigate("/desktop-homepage");
  }, [navigate]);

  return (
    <div className={`frame-parent97 ${className}`}>
      <header className="rectangle-parent44">
        <div className="frame-child75" />
        <div className="logo-placement-parent">
          <div className="logo-placement">
            <img
              className="email-icon7"
              loading="lazy"
              alt=""
              src="/email@2x.png"
            />
            <div className="inforootsroutescom-wrapper1">
              <div className="inforootsroutescom7">{`INFO@ROOTS&ROUTES.COM`}</div>
            </div>
          </div>
          <div className="contact-details-parent">
            <div className="contact-details">
              <div className="contact-icon" />
              <img
                className="phone-icon7"
                loading="lazy"
                alt=""
                src="/phone@2x.png"
              />
            </div>
            <div className="address-container">
              <a className="address1">+91- 200-352-4121</a>
            </div>
          </div>
        </div>
        <div className="navigation4">
          <div className="navigation-left">
            <img
              className="earth-globe-icon7"
              alt=""
              src="/earth-globe@2x.png"
            />
            <div className="language3">
              <a className="eng7" onClick={onENGTextClick}>{`ENG `}</a>
            </div>
          </div>
          <div className="user-parent2">
            <img
              className="user-icon7"
              loading="lazy"
              alt=""
              src="/user@2x.png"
            />
            <div className="sign-in-button">
              <a className="sign-in9" onClick={onSIGNINTextClick}>
                SIGN IN
              </a>
            </div>
          </div>
        </div>
      </header>
      <img
        className="multiplication-icon10"
        loading="lazy"
        alt=""
        src="/multiplication@2x.png"
        onClick={onMultiplicationImageClick}
      />
      <div className="content-banner" style={contentBannerStyle}>
        <img
          className="screenshot-352-ai-brush-remo-icon14"
          alt=""
          src={screenshotAiBrushRemovebg}
          style={screenshot352AiBrushRemoIconStyle}
        />
        <img
          className="spritiual-2-icon1"
          loading="lazy"
          alt=""
          src={sPRITIUAL2}
          style={sPRITIUAL2IconStyle}
        />
      </div>
    </div>
  );
};

FrameComponent15.propTypes = {
  className: PropTypes.string,
  screenshotAiBrushRemovebg: PropTypes.string,
  sPRITIUAL2: PropTypes.string,

  /** Style props */
  screenshotAiBrushRemoIconWidth: PropTypes.any,
  sPRITIUAL2IconTop: PropTypes.any,
  sPRITIUAL2IconLeft: PropTypes.any,
  propLeft: PropTypes.any,
  propWidth: PropTypes.any,
};

export default FrameComponent15;
