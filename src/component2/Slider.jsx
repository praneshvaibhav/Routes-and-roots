import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./Slider.css";

const Slider = ({ className = "" }) => {
  const navigate = useNavigate();

  const onPreviousButtonClick = useCallback(() => {
    navigate("/desktop-tajmahal-2");
  }, [navigate]);

  const onPreviousClick = useCallback(() => {
    navigate("/desktop-tajmahal-4");
  }, [navigate]);

  return (
    <div className={`slider ${className}`}>
      <div className="slide">
        <div className="image-container3">
          <div className="navigation-buttons2">
            <div className="navigation-controls">
              <div
                className="previous-button1"
                onClick={onPreviousButtonClick}
              />
              <img
                className="back-icon3"
                loading="lazy"
                alt=""
                src="/back@2x.png"
              />
            </div>
          </div>
          <img className="tajmahal-2-12" alt="" src="/tajmahal-2-1@2x.png" />
        </div>
      </div>
      <div className="footer6">
        <div className="social">
          <img
            className="multiplication-icon11"
            loading="lazy"
            alt=""
            src="/multiplication@2x.png"
          />
        </div>
        <div className="navigation-controls">
          <div className="previous" onClick={onPreviousClick} />
          <img
            className="back-icon3"
            loading="lazy"
            alt=""
            src="/forward@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

Slider.propTypes = {
  className: PropTypes.string,
};

export default Slider;
