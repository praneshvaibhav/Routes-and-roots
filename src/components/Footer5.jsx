import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent1 from "./FrameComponent1";
import PropTypes from "prop-types";
import "./Footer5.css";

const Footer5 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onEVisaTextClick = useCallback(() => {
    navigate("/desktop-e-visa");
  }, [navigate]);

  const onFacebookImageClick = useCallback(() => {
    window.open(
      "https://www.facebook.com/profile.php?id=61551651067407&mibextid=ZbWKwL"
    );
  }, []);

  return (
    <footer className={`footer3 ${className}`}>
      <div className="footer-content">
        <FrameComponent1
          frameDivAlignSelf="unset"
          frameDivFlex="1"
          onEVisaTextClick={onEVisaTextClick}
          onFacebookImageClick={onFacebookImageClick}
          instagram="/instagram@2x.png"
        />
      </div>
      <div className="copyright1">
        <div className="copyright-2024-rootsroutes2">{`Copyright    2024 Roots&Routes.`}</div>
        <img
          className="copyright-all-rights-reserved13"
          loading="lazy"
          alt=""
          src="/copyright-all-rights-reserved@2x.png"
        />
      </div>
    </footer>
  );
};

Footer5.propTypes = {
  className: PropTypes.string,
};

export default Footer5;
