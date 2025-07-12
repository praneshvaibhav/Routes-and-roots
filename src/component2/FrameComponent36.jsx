import { useCallback } from "react";
import LeftContent from "./LeftContent";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./FrameComponent36.css";

const FrameComponent36 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onMultiplicationImageClick = useCallback(() => {
    navigate("/desktop-homepage");
  }, [navigate]);

  return (
    <header className={`frame-header ${className}`}>
      <LeftContent
        emailDetailsTop="unset"
        emailDetailsPosition="unset"
        frameDivMinWidth="224px"
        aBackgroundImage="unset"
      />
      <div className="frame-wrapper11">
        <div className="frame-parent19">
          <div className="expand-arrow-wrapper">
            <img
              className="expand-arrow-icon2"
              loading="lazy"
              alt=""
              src="/expand-arrow@2x.png"
            />
          </div>
          <div className="frame-parent20">
            <div className="frame-wrapper12">
              <div className="note-content-parent">
                <div className="note-content">
                  <div className="note">{`Note: `}</div>
                  <div className="for-indian-sellers-only-wrapper">
                    <div className="for-indian-sellers">
                      For Indian sellers only!
                    </div>
                  </div>
                </div>
                <div className="frame-child14" />
              </div>
            </div>
            <img
              className="multiplication-icon3"
              loading="lazy"
              alt=""
              src="/multiplication1@2x.png"
              onClick={onMultiplicationImageClick}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

FrameComponent36.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent36;
