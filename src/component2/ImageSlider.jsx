import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./ImageSlider.css";

const ImageSlider = ({ className = "" }) => {
  const navigate = useNavigate();

  const onPreviousButtonClick = useCallback(() => {
    navigate("/desktop-tajmahal-3");
  }, [navigate]);

  const onForwardAreaClick = useCallback(() => {
    navigate("/desktop-tajmahal-2");
  }, [navigate]);

  const onForwardImageClick = useCallback(() => {
    navigate("/desktop-tajmahal");
  }, [navigate]);

  return (
    <div className={`image-slider ${className}`}>
      <div className="image-container1">
        <h1 className="never-stop2">Never Stop</h1>
        <div className="image-options">
          <img className="taj-mahal-23" alt="" src="/taj-mahal-2@2x.png" />
          <img className="tajmahal-2-11" alt="" src="/tajmahal-2-1@2x.png" />
          <img
            className="taj-mahal-3-11"
            loading="lazy"
            alt=""
            src="/taj-mahal-3-1@2x.png"
          />
          <div className="image-four-container">
            <div className="image-four">
              <img
                className="screenshot-352-ai-brush-remo-icon5"
                alt=""
                src="/screenshot--352-aibrushremovebgtxorkjjb-1@2x.png"
              />
            </div>
            <img className="tajmahal-4-1" alt="" src="/tajmahal-4-1@2x.png" />
          </div>
        </div>
        <div className="navigation-buttons1">
          <div className="previous-button" onClick={onPreviousButtonClick} />
          <img
            className="back-icon1"
            loading="lazy"
            alt=""
            src="/back@2x.png"
          />
        </div>
      </div>
      <div className="next-button-container">
        <div className="next-button1">
          <img
            className="multiplication-icon2"
            loading="lazy"
            alt=""
            src="/multiplication@2x.png"
          />
        </div>
        <div className="forward-button">
          <div className="forward-area" onClick={onForwardAreaClick} />
          <img
            className="forward-icon7"
            loading="lazy"
            alt=""
            src="/forward@2x.png"
            onClick={onForwardImageClick}
          />
        </div>
      </div>
    </div>
  );
};

ImageSlider.propTypes = {
  className: PropTypes.string,
};

export default ImageSlider;
