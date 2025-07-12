import { useCallback } from "react";
import DestinationHeader from "./DestinationHeader";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./MainContent.css";

const MainContent = ({ className = "" }) => {
  const navigate = useNavigate();

  const onDestinationIndicatorClick = useCallback(() => {
    navigate("/desktop-tajmahal-4");
  }, [navigate]);

  const onDestinationIndicatorClick1 = useCallback(() => {
    navigate("/desktop-tajmahal-2");
  }, [navigate]);

  return (
    <section className={`main-content1 ${className}`}>
      <div className="destination-details">
        <DestinationHeader screenshotAiBrushRemovebg="/screenshot--352-aibrushremovebgtxorkjjb-1@2x.png" />
        <div className="destination-title-container-wrapper">
          <div className="destination-title-container">
            <img
              className="taj-mahal-24"
              loading="lazy"
              alt=""
              src="/taj-mahal-2@2x.png"
            />
            <div className="destination-indicators">
              <div
                className="destination-indicator"
                onClick={onDestinationIndicatorClick}
              />
              <div
                className="destination-indicator"
                onClick={onDestinationIndicatorClick1}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

MainContent.propTypes = {
  className: PropTypes.string,
};

export default MainContent;
