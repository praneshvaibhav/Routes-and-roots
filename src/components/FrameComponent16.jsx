import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./FrameComponent16.css";

const FrameComponent16 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onENGTextClick = useCallback(() => {
    navigate("/desktop-language");
  }, [navigate]);

  const onSIGNINTextClick = useCallback(() => {
    navigate("/desktop-sign-in");
  }, [navigate]);

  return (
    <section className={`frame-parent58 ${className}`}>
      <div className="frame-parent59">
        <div className="inforootsroutescom-parent">
          <div className="inforootsroutescom1">{`INFO@ROOTS&ROUTES.COM`}</div>
          <div className="screenshot-352-ai-brush-remo-wrapper1">
            <img
              className="screenshot-352-ai-brush-remo-icon9"
              alt=""
              src="/screenshot--352-aibrushremovebgtxorkjjb-1@2x.png"
            />
          </div>
        </div>
        <a className="a1">+91- 200-352-4121</a>
      </div>
      <div className="eng-parent">
        <a className="eng1" onClick={onENGTextClick}>{`ENG `}</a>
        <a className="sign-in3" onClick={onSIGNINTextClick}>
          SIGN IN
        </a>
      </div>
      <div className="user-icon-background-parent">
        <div className="user-icon-background" />
        <img
          className="email-icon1"
          loading="lazy"
          alt=""
          src="/email@2x.png"
        />
        <div className="phone-parent">
          <img className="phone-icon1" alt="" src="/phone@2x.png" />
          <div className="ellipse-div" />
        </div>
        <img className="user-icon1" loading="lazy" alt="" src="/user@2x.png" />
        <img className="earth-globe-icon1" alt="" src="/earth-globe@2x.png" />
      </div>
    </section>
  );
};

FrameComponent16.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent16;
