import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./FrameComponent31.css";

const FrameComponent31 = ({ className = "" }) => {
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
    <section className={`frame-parent65 ${className}`}>
      <header className="rectangle-parent27">
        <div className="frame-child51" />
        <div className="frame-parent66">
          <div className="email-group">
            <img
              className="email-icon2"
              loading="lazy"
              alt=""
              src="/email@2x.png"
            />
            <div className="inforootsroutescom-wrapper">
              <div className="inforootsroutescom2">{`INFO@ROOTS&ROUTES.COM`}</div>
            </div>
          </div>
          <div className="frame-parent67">
            <div className="ellipse-container">
              <div className="frame-child52" />
              <img
                className="phone-icon2"
                loading="lazy"
                alt=""
                src="/phone@2x.png"
              />
            </div>
            <div className="contact-info-wrapper">
              <a className="contact-info">+91- 200-352-4121</a>
            </div>
          </div>
        </div>
        <div className="frame-parent68">
          <div className="earth-globe-parent">
            <img
              className="earth-globe-icon2"
              alt=""
              src="/earth-globe@2x.png"
            />
            <div className="eng-wrapper">
              <a className="eng2" onClick={onENGTextClick}>{`ENG `}</a>
            </div>
          </div>
          <div className="user-parent">
            <img
              className="user-icon2"
              loading="lazy"
              alt=""
              src="/user@2x.png"
            />
            <div className="sign-in-wrapper">
              <a className="sign-in4" onClick={onSIGNINTextClick}>
                SIGN IN
              </a>
            </div>
          </div>
        </div>
      </header>
      <div className="screenshot-352-ai-brush-remo-parent">
        <img
          className="screenshot-352-ai-brush-remo-icon10"
          alt=""
          src="/screenshot--352-aibrushremovebgtxorkjjb-2@2x.png"
        />
        <img
          className="heritage-2-icon"
          loading="lazy"
          alt=""
          src="/heritage-2@2x.png"
        />
      </div>
      <img
        className="multiplication-icon5"
        loading="lazy"
        alt=""
        src="/multiplication@2x.png"
        onClick={onMultiplicationImageClick}
      />
    </section>
  );
};

FrameComponent31.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent31;
