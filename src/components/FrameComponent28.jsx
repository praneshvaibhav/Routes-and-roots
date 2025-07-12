import { useCallback } from "react";
import FrameComponent6 from "./FrameComponent6";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./FrameComponent28.css";

const FrameComponent28 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onHOMETextClick = useCallback(() => {
    navigate("/desktop-homepage");
  }, [navigate]);

  const onPrevImageClick = useCallback(() => {
    navigate("/desktop-culture-calender");
  }, [navigate]);

  return (
    <section className={`frame-parent38 ${className}`}>
      <div className="screenshot-352-ai-brush-remo-frame">
        <img
          className="screenshot-352-ai-brush-remo-icon7"
          alt=""
          src="/screenshot--352-aibrushremovebgtxorkjjb-1@2x.png"
        />
      </div>
      <header className="frame-parent39">
        <FrameComponent6 appIconBackgroundImage="unset" />
        <div className="frame-wrapper15">
          <div className="frame-parent40">
            <div className="menu-parent">
              <nav className="menu">
                <div className="home1" onClick={onHOMETextClick}>
                  HOME
                </div>
                <div className="menu-options">
                  <div className="about-us15">ABOUT US</div>
                </div>
                <div className="menu-options">
                  <div className="shop2">SHOP</div>
                </div>
                <div className="destnations2">DESTNATIONS</div>
              </nav>
              <div className="culture-calender-parent">
                <div className="culture-calender2">{`CULTURE CALENDER `}</div>
                <img
                  className="expand-arrow-icon3"
                  loading="lazy"
                  alt=""
                  src="/expand-arrow@2x.png"
                />
              </div>
            </div>
            <div className="items-row-wrapper">
              <div className="items-row">
                <div className="items-row-child" />
                <div className="items3">0 Items</div>
                <div className="items-row-inner">
                  <div className="frame-child20" />
                </div>
                <div className="rs00-container">
                  <div className="rs002">Rs.00</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="october-2024">October, 2024</div>
      <img
        className="multiplication-icon4"
        loading="lazy"
        alt=""
        src="/multiplication1@2x.png"
        onClick={onHOMETextClick}
      />
      <img className="group-icon" loading="lazy" alt="" src="/group-2@2x.png" />
      <img
        className="prev-icon1"
        loading="lazy"
        alt=""
        src="/prev@2x.png"
        onClick={onPrevImageClick}
      />
    </section>
  );
};

FrameComponent28.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent28;
