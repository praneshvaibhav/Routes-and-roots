import { useCallback } from "react";
import DestinationHeader from "./DestinationHeader";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./Placeholder.css";

const Placeholder = ({ className = "" }) => {
  const navigate = useNavigate();

  const onBackButtonClick = useCallback(() => {
    navigate("/desktop-tajmahal");
  }, [navigate]);

  const onNextButtonClick = useCallback(() => {
    navigate("/desktop-tajmahal-3");
  }, [navigate]);

  return (
    <div className={`placeholder2 ${className}`}>
      <div className="placeholder3">
        <div className="placeholder4">
          <DestinationHeader screenshotAiBrushRemovebg="/screenshot--352-aibrushremovebgtxorkjjb-1@2x.png" />
          <div className="taj-mahal-2-parent">
            <img className="taj-mahal-22" alt="" src="/taj-mahal-2@2x.png" />
            <img
              className="tajmahal-2-1"
              loading="lazy"
              alt=""
              src="/tajmahal-2-1@2x.png"
            />
          </div>
          <div className="back-button-parent">
            <div className="back-button" onClick={onBackButtonClick} />
            <img
              className="back-icon"
              loading="lazy"
              alt=""
              src="/back@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="frame-parent18">
        <div className="multiplication-wrapper">
          <img
            className="multiplication-icon1"
            loading="lazy"
            alt=""
            src="/multiplication@2x.png"
          />
        </div>
        <div className="next-button-parent">
          <div className="next-button" onClick={onNextButtonClick} />
          <img
            className="back-icon"
            loading="lazy"
            alt=""
            src="/forward@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

Placeholder.propTypes = {
  className: PropTypes.string,
};

export default Placeholder;
