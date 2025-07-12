import PropTypes from "prop-types";
import "./FrameComponent21.css";

const FrameComponent21 = ({ className = "" }) => {
  return (
    <div className={`footer-content-parent ${className}`}>
      <div className="footer-content3">
        <div className="social-media-icons">
          <img className="facebook-icon9" alt="" src="/facebook@2x.png" />
          <img className="twitterx-icon7" alt="" src="/twitterx@2x.png" />
          <div className="footer-links3">
            <div className="footer-links-item" />
            <div className="about-us-links-wrapper">
              <div className="about-us-links2">
                <div className="about-us24">{`About us `}</div>
                <div className="about-us25">
                  <div className="faqs17">FAQ’s</div>
                </div>
                <div className="about-us26">
                  <div className="faqs17">{`e-Visa `}</div>
                </div>
                <div className="terms-condition17">{`Terms & Condition`}</div>
              </div>
            </div>
            <div className="frame-parent88">
              <div className="complain-policy-parent">
                <div className="about-us-links-wrapper">
                  <div className="complain-privacy">
                    <div className="about-us24">complain</div>
                    <div className="privacy-policy17">Privacy Policy</div>
                  </div>
                </div>
                <div className="connect-with-us17">
                  <div className="connect-with-us-title">
                    <div className="connect-with-us18">Connect with us :</div>
                  </div>
                  <div className="social-media-links">
                    <div className="facebook-link">
                      <img
                        className="facebook-icon10"
                        loading="lazy"
                        alt=""
                        src="/facebook@2x.png"
                      />
                    </div>
                    <div className="twitter-link">
                      <img
                        className="facebook-icon10"
                        loading="lazy"
                        alt=""
                        src="/twitterx@2x.png"
                      />
                    </div>
                    <img
                      className="instagram-icon18"
                      loading="lazy"
                      alt=""
                      src="/instagram@2x.png"
                    />
                  </div>
                </div>
              </div>
              <div className="careers18">
                <div className="faqs17">Careers</div>
              </div>
              <div className="help-center17">Help center</div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright2">
        <div className="copyright-2024-rootsroutes8">{`Copyright    2024 Roots&Routes.`}</div>
        <div className="copyright-info1">
          <div className="copyright-2024-rootsroutes9">{`Copyright    2024 Roots&Routes.`}</div>
          <img
            className="copyright-all-rights-reserved19"
            loading="lazy"
            alt=""
            src="/copyright-all-rights-reserved@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

FrameComponent21.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent21;
