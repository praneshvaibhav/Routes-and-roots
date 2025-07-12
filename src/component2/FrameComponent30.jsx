import { useCallback } from "react";
import InfoSignIn from "./InfoSignIn";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./FrameComponent30.css";

const FrameComponent30 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onHOMETextClick = useCallback(() => {
    navigate("/desktop-homepage");
  }, [navigate]);

  const onABOUTUSTextClick = useCallback(() => {
    navigate("/desktop-about-us");
  }, [navigate]);

  const onCULTURECALENDERTextClick = useCallback(() => {
    navigate("/desktop-culture-calender");
  }, [navigate]);

  return (
    <header className={`frame-parent87 ${className}`}>
      <InfoSignIn
        propAlignSelf="stretch"
        propPosition="relative"
        propTop="unset"
        propLeft="unset"
        propBackgroundImage="unset"
      />
      <div className="frame-wrapper29">
        <div className="menu-options-parent">
          <div className="menu-options2">
            <nav className="navigation2">
              <a className="home5" onClick={onHOMETextClick}>
                HOME
              </a>
              <div className="navigation-links1">
                <a className="about-us23" onClick={onABOUTUSTextClick}>
                  ABOUT US
                </a>
              </div>
              <div className="navigation-links1">
                <a className="shop6">SHOP</a>
              </div>
              <a className="destnations6">DESTNATIONS</a>
            </nav>
            <div
              className="culture-calender6"
              onClick={onCULTURECALENDERTextClick}
            >
              <span>CULTURE CALENDER</span>
              <span className="span2">{` `}</span>
            </div>
          </div>
          <div className="frame-wrapper30">
            <div className="rectangle-parent36">
              <div className="frame-child62" />
              <div className="rs006">Rs.00</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

FrameComponent30.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent30;
