import { useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./Footer.css";

const Footer = ({
  className = "",
  propTextDecoration,
  onFacebookImageClick,
  onTwitterXImageClick,
  instagram,
  onInstagramImageClick,
  propTextDecoration1,
}) => {
  const aboutUs1Style = useMemo(() => {
    return {
      textDecoration: propTextDecoration,
    };
  }, [propTextDecoration]);

  const careers1Style = useMemo(() => {
    return {
      textDecoration: propTextDecoration1,
    };
  }, [propTextDecoration1]);

  const navigate = useNavigate();

  const onEVisaTextClick = useCallback(() => {
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
    <section className={`footer7 ${className}`}>
      <div className="social-media-links1">
        <img className="facebook-icon12" alt="" src="/facebook@2x.png" />
        <img className="twitterx-icon10" alt="" src="/twitterx@2x.png" />
        <div className="footer-links4">
          <div className="footer-links-inner" />
          <div className="connect-us-title">
            <div className="navigation-links4">
              <div
                className="about-us32"
                style={aboutUs1Style}
              >{`About us `}</div>
              <div className="about-us-navigation2">
                <div className="faqs19">FAQ’s</div>
              </div>
              <div className="about-us-navigation3">
                <div
                  className="e-visa19"
                  onClick={onEVisaTextClick}
                >{`e-Visa `}</div>
              </div>
              <div className="terms-condition19">{`Terms & Condition`}</div>
            </div>
          </div>
          <div className="connect-links">
            <div className="connect-us-title-parent">
              <div className="connect-us-title">
                <div className="connect-us">
                  <div className="about-us32">complain</div>
                  <div className="privacy-policy19">Privacy Policy</div>
                </div>
              </div>
              <div className="social-media-title-parent">
                <div className="social-media-title">
                  <div className="connect-with-us20">Connect with us :</div>
                </div>
                <div className="facebook-icon-group">
                  <div className="facebook-icon13">
                    <img
                      className="facebook-icon14"
                      loading="lazy"
                      alt=""
                      src="/facebook@2x.png"
                      onClick={onFacebookImageClick}
                    />
                  </div>
                  <div className="twitter-icon2">
                    <img
                      className="facebook-icon14"
                      loading="lazy"
                      alt=""
                      src="/twitterx@2x.png"
                      onClick={onTwitterXImageClick}
                    />
                  </div>
                  <img
                    className="instagram-icon20"
                    loading="lazy"
                    alt=""
                    src={instagram}
                    onClick={onInstagramImageClick}
                  />
                </div>
              </div>
            </div>
            <div className="careers21">
              <div className="faqs19" style={careers1Style}>
                Careers
              </div>
            </div>
            <div className="help-center19">Help center</div>
          </div>
        </div>
      </div>
      <div className="copyright-2024-rootsroutes-parent5">
        <div className="copyright-2024-rootsroutes12">{`Copyright    2024 Roots&Routes.`}</div>
        <div className="copyright-details">
          <div className="copyright-2024-rootsroutes13">{`Copyright    2024 Roots&Routes.`}</div>
          <img
            className="copyright-all-rights-reserved21"
            loading="lazy"
            alt=""
            src="/copyright-all-rights-reserved@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
  instagram: PropTypes.string,

  /** Style props */
  propTextDecoration: PropTypes.any,
  propTextDecoration1: PropTypes.any,

  /** Action props */
  onFacebookImageClick: PropTypes.func,
  onTwitterXImageClick: PropTypes.func,
  onInstagramImageClick: PropTypes.func,
};

export default Footer;
