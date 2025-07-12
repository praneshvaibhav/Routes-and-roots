import { useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./Footer1.css";

const Footer1 = ({
  className = "",
  propPadding,
  propTextDecoration,
  onEVisaTextClick,
  onFacebookImageClick,
  onTwitterXImageClick,
  instagram,
  onInstagramImageClick,
  propTextDecoration1,
  propWidth,
}) => {
  const footerStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const aboutUsStyle = useMemo(() => {
    return {
      textDecoration: propTextDecoration,
    };
  }, [propTextDecoration]);

  const careersStyle = useMemo(() => {
    return {
      textDecoration: propTextDecoration1,
    };
  }, [propTextDecoration1]);

  const frameDiv8Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const navigate = useNavigate();

  const onEVisaTextClick1 = useCallback(() => {
    navigate("/desktop-e-visa");
  }, [navigate]);

  const onFacebookImageClick1 = useCallback(() => {
    window.open(
      "https://www.facebook.com/profile.php?id=61551651067407&mibextid=ZbWKwL"
    );
  }, []);

  const onTwitterXImageClick1 = useCallback(() => {
    window.open("https://x.com/PraneshVaibhav?t=2g4i6vgKhNYFRnN9JpZBRA&s=09");
  }, []);

  const onInstagramImageClick1 = useCallback(() => {
    window.open(
      "https://www.instagram.com/praneshvaibhav?igsh=MXIyNXI0emh1eDI3bw=="
    );
  }, []);

  return (
    <footer className={`footer5 ${className}`} style={footerStyle}>
      <div className="footer-content2">
        <div className="footer-content-item" />
        <div className="links-and-socials">
          <div className="footer-links2">
            <a className="about-us21" style={aboutUsStyle}>{`About us `}</a>
            <div className="link-categories">
              <div className="faqs15">FAQ’s</div>
            </div>
            <div className="link-categories1">
              <div
                className="e-visa15"
                onClick={onEVisaTextClick}
              >{`e-Visa `}</div>
            </div>
            <div className="terms-condition15">{`Terms & Condition`}</div>
          </div>
        </div>
        <div className="social-and-help">
          <div className="social-links">
            <div className="links-and-socials">
              <div className="connect-options">
                <div className="complain17">complain</div>
                <div className="privacy-policy15">Privacy Policy</div>
              </div>
            </div>
            <div className="social-icons2">
              <div className="platform-icons">
                <div className="connect-with-us15">Connect with us :</div>
              </div>
              <div className="facebook-icon-parent">
                <div className="facebook-icon6">
                  <img
                    className="facebook-icon7"
                    loading="lazy"
                    alt=""
                    src="/facebook@2x.png"
                    onClick={onFacebookImageClick}
                  />
                </div>
                <div className="twitter-icon1">
                  <img
                    className="facebook-icon7"
                    loading="lazy"
                    alt=""
                    src="/twitterx@2x.png"
                    onClick={onTwitterXImageClick}
                  />
                </div>
                <img
                  className="instagram-icon16"
                  loading="lazy"
                  alt=""
                  src={instagram}
                  onClick={onInstagramImageClick}
                />
              </div>
            </div>
          </div>
          <div className="careers15">
            <a className="careers16" style={careersStyle}>
              Careers
            </a>
          </div>
          <div className="help-center15">Help center</div>
        </div>
      </div>
      <div
        className="copyright-2024-rootsroutes-parent1"
        style={frameDiv8Style}
      >
        <div className="copyright-2024-rootsroutes6">{`Copyright    2024 Roots&Routes.`}</div>
        <img
          className="copyright-all-rights-reserved17"
          loading="lazy"
          alt=""
          src="/copyright-all-rights-reserved@2x.png"
        />
      </div>
    </footer>
  );
};

Footer1.propTypes = {
  className: PropTypes.string,
  instagram: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
  propTextDecoration: PropTypes.any,
  propTextDecoration1: PropTypes.any,
  propWidth: PropTypes.any,

  /** Action props */
  onEVisaTextClick: PropTypes.func,
  onFacebookImageClick: PropTypes.func,
  onTwitterXImageClick: PropTypes.func,
  onInstagramImageClick: PropTypes.func,
};

export default Footer1;
