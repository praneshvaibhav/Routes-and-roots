import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./FrameComponent27.css";

const FrameComponent27 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onHOMETextClick = useCallback(() => {
    navigate("/desktop-homepage");
  }, [navigate]);

  return (
    <header className={`rectangle-parent47 ${className}`}>
      <div className="frame-child82" />
      <div className="frame-parent103">
        <div className="email-parent3">
          <img
            className="email-icon11"
            loading="lazy"
            alt=""
            src="/email@2x.png"
          />
          <div className="inforootsroutescom-wrapper2">
            <div className="inforootsroutescom11">{`INFO@ROOTS&ROUTES.COM`}</div>
          </div>
        </div>
        <div className="frame-parent104">
          <div className="phone-parent1">
            <img className="phone-icon11" alt="" src="/phone@2x.png" />
            <div className="frame-child83" />
          </div>
          <div className="wrapper8">
            <a className="a6">+91- 200-352-4121</a>
          </div>
        </div>
      </div>
      <div className="frame-parent105">
        <div className="earth-globe-parent1">
          <img
            className="earth-globe-icon11"
            alt=""
            src="/earth-globe@2x.png"
          />
          <div className="eng-frame">
            <a className="eng11">{`ENG `}</a>
          </div>
        </div>
        <div className="user-parent3">
          <img
            className="user-icon12"
            loading="lazy"
            alt=""
            src="/user@2x.png"
          />
          <div className="sign-in-wrapper3">
            <a className="eng11">SIGN IN</a>
          </div>
        </div>
      </div>
      <div className="screenshot-352-ai-brush-remo-group">
        <img
          className="screenshot-352-ai-brush-remo-icon16"
          alt=""
          src="/screenshot--352-aibrushremovebgtxorkjjb-1@2x.png"
        />
        <div className="home10" onClick={onHOMETextClick}>
          HOME
        </div>
      </div>
    </header>
  );
};

FrameComponent27.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent27;
