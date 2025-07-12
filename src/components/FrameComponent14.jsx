import { useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./FrameComponent14.css";

const FrameComponent14 = ({
  className = "",
  frameHeaderHeight,
  screenshotAiBrushRemoIconWidth,
  screenshotAiBrushRemovebg,
  iNDIANART2,
  propWidth,
  propHeight,
}) => {
  const frameSectionStyle = useMemo(() => {
    return {
      height: frameHeaderHeight,
    };
  }, [frameHeaderHeight]);

  const bannerStyle = useMemo(() => {
    return {
      width: screenshotAiBrushRemoIconWidth,
    };
  }, [screenshotAiBrushRemoIconWidth]);

  const iNDIANART2Style = useMemo(() => {
    return {
      width: propWidth,
      height: propHeight,
    };
  }, [propWidth, propHeight]);

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
    <section
      className={`frame-parent89 ${className}`}
      style={frameSectionStyle}
    >
      <header className="rectangle-parent38">
        <div className="frame-child65" />
        <div className="frame-parent90">
          <div className="email-parent1">
            <img
              className="email-icon5"
              loading="lazy"
              alt=""
              src="/email@2x.png"
            />
            <div className="inforootsroutescom-frame">
              <div className="inforootsroutescom5">{`INFO@ROOTS&ROUTES.COM`}</div>
            </div>
          </div>
          <div className="contact-info-parent">
            <div className="contact-info1">
              <div className="visual-element" />
              <img
                className="phone-icon5"
                loading="lazy"
                alt=""
                src="/phone@2x.png"
              />
            </div>
            <div className="wrapper3">
              <a className="a4">+91- 200-352-4121</a>
            </div>
          </div>
        </div>
        <div className="navigation3">
          <div className="earth-globe-group">
            <img
              className="earth-globe-icon5"
              alt=""
              src="/earth-globe@2x.png"
            />
            <div className="language2">
              <a className="eng5" onClick={onENGTextClick}>{`ENG `}</a>
            </div>
          </div>
          <div className="user-group">
            <img
              className="user-icon5"
              loading="lazy"
              alt=""
              src="/user@2x.png"
            />
            <div className="sign-in-frame">
              <a className="sign-in7" onClick={onSIGNINTextClick}>
                SIGN IN
              </a>
            </div>
          </div>
        </div>
      </header>
      <img
        className="multiplication-icon8"
        loading="lazy"
        alt=""
        src="/multiplication@2x.png"
        onClick={onMultiplicationImageClick}
      />
      <div className="banner1" style={bannerStyle}>
        <img
          className="screenshot-352-ai-brush-remo-icon12"
          alt=""
          src={screenshotAiBrushRemovebg}
        />
        <img
          className="indian-art-2"
          loading="lazy"
          alt=""
          src={iNDIANART2}
          style={iNDIANART2Style}
        />
      </div>
    </section>
  );
};

FrameComponent14.propTypes = {
  className: PropTypes.string,
  screenshotAiBrushRemovebg: PropTypes.string,
  iNDIANART2: PropTypes.string,

  /** Style props */
  frameHeaderHeight: PropTypes.any,
  screenshotAiBrushRemoIconWidth: PropTypes.any,
  propWidth: PropTypes.any,
  propHeight: PropTypes.any,
};

export default FrameComponent14;
