import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./FooterNavigation.css";

const FooterNavigation = ({
  className = "",
  screenshotAiBrushRemovebg,
  onBackIconClick,
}) => {
  const navigate = useNavigate();

  const onABOUTUSTextClick = useCallback(() => {
    navigate("/desktop-about-us");
  }, [navigate]);

  const onBackIconClick1 = useCallback(() => {
    navigate("/desktop-shop");
  }, [navigate]);

  return (
    <div className={`footer-navigation ${className}`}>
      <div className="about-us-link">
        <img
          className="screenshot-352-ai-brush-remo-icon6"
          alt=""
          src={screenshotAiBrushRemovebg}
        />
        <div className="about-us14" onClick={onABOUTUSTextClick}>
          ABOUT US
        </div>
      </div>
      <div className="home-link">
        <div className="home">HOME</div>
      </div>
      <button className="back-link">
        <div className="back-icon2" onClick={onBackIconClick} />
        <div className="back">Back</div>
      </button>
    </div>
  );
};

FooterNavigation.propTypes = {
  className: PropTypes.string,
  screenshotAiBrushRemovebg: PropTypes.string,

  /** Action props */
  onBackIconClick: PropTypes.func,
};

export default FooterNavigation;
