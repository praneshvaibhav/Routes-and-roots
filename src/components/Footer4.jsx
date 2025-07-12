import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./Footer4.css";

const Footer4 = ({ className = "" }) => {
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
    <section className={`footer8 ${className}`}>
      <div className="footer-content4">
        <div className="footer-content-inner" />
        <div className="footer-contact-wrapper">
          <div className="about-us-group">
            <div className="about-us33">{`About us `}</div>
            <div className="faqs-wrapper">
              <div className="faqs20">FAQ’s</div>
            </div>
            <div className="e-visa-wrapper">
              <div
                className="e-visa20"
                onClick={onEVisaTextClick}
              >{`e-Visa `}</div>
            </div>
            <div className="terms-condition20">{`Terms & Condition`}</div>
          </div>
        </div>
        <div className="footer-social">
          <div className="footer-social-content">
            <div className="footer-social-links">
              <div className="footer-contact-wrapper">
                <div className="footer-contact">
                  <div className="about-us33">complain</div>
                  <div className="privacy-policy20">Privacy Policy</div>
                </div>
              </div>
              <div className="footer-social-title-parent">
                <div className="footer-social-title">
                  <div className="connect-with-us21">Connect with us :</div>
                </div>
                <div className="footer-social-icons">
                  <div className="facebook-icon17">
                    <img
                      className="facebook-icon18"
                      loading="lazy"
                      alt=""
                      src="/facebook@2x.png"
                      onClick={onFacebookImageClick}
                    />
                  </div>
                  <div className="twitter-icon3">
                    <img
                      className="twitterx-icon13"
                      loading="lazy"
                      alt=""
                      src="/twitterx@2x.png"
                    />
                  </div>
                  <img
                    className="instagram-icon21"
                    loading="lazy"
                    alt=""
                    src="/instagram@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className="about-us33">Careers</div>
          </div>
          <div className="help-center20">Help center</div>
        </div>
      </div>
      <div className="copyright3">
        <div className="copyright-2024-rootsroutes14">{`Copyright    2024 Roots&Routes.`}</div>
        <img
          className="copyright-all-rights-reserved22"
          loading="lazy"
          alt=""
          src="/copyright-all-rights-reserved@2x.png"
        />
      </div>
    </section>
  );
};

Footer4.propTypes = {
  className: PropTypes.string,
};

export default Footer4;
