import { useCallback } from "react";
import InfoSignIn from "./InfoSignIn";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./FrameComponent20.css";

const FrameComponent20 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onMultiplicationImageClick = useCallback(() => {
    navigate("/desktop-homepage");
  }, [navigate]);

  return (
    <header className={`info-sign-in-parent ${className}`}>
      <InfoSignIn />
      <div className="evisa-description-wrapper">
        <div className="evisa-description">
          <div className="evisa-title">
            <div className="e-visa-facility-wrapper">
              <div className="e-visa-facility">
                <p className="p1"> </p>
                <p className="e-visa-facility1">E-VISA FACILITY</p>
              </div>
            </div>
            <div className="e-visa-facility-is">
              e-Visa Facility is available for nationals of following
              countries/territories
            </div>
          </div>
          <div className="multiplication-container">
            <img
              className="multiplication-icon7"
              loading="lazy"
              alt=""
              src="/multiplication@2x.png"
              onClick={onMultiplicationImageClick}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

FrameComponent20.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent20;
