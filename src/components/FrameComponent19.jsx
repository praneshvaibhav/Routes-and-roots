import { useCallback } from "react";
import LeftContent from "./LeftContent";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./FrameComponent19.css";

const FrameComponent19 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onMultiplicationImageClick = useCallback(() => {
    navigate("/desktop-homepage");
  }, [navigate]);

  const onBecomeSellerTextClick = useCallback(() => {
    navigate("/desktop-sign-in-two");
  }, [navigate]);

  return (
    <section className={`left-content-parent ${className}`}>
      <LeftContent />
      <div className="navigation7">
        <div className="navigation-controls1">
          <div className="expand-arrow-frame">
            <img
              className="expand-arrow-icon10"
              loading="lazy"
              alt=""
              src="/expand-arrow@2x.png"
            />
          </div>
          <div className="multiplication-frame">
            <img
              className="multiplication-icon12"
              loading="lazy"
              alt=""
              src="/multiplication1@2x.png"
              onClick={onMultiplicationImageClick}
            />
          </div>
          <div className="login-form-wrapper">
            <div className="login-form">
              <div className="login-form-child" />
              <img
                className="arrow-icon1"
                loading="lazy"
                alt=""
                src="/arrow@2x.png"
              />
              <div className="form-fields">
                <div className="sign-in-label">
                  <div className="sign-in-label-inner">
                    <div className="frame-child78" />
                  </div>
                  <h2 className="sign-in15">Sign In</h2>
                  <div className="sign-in-label-child">
                    <div className="frame-child79" />
                  </div>
                </div>
              </div>
              <div className="email-field">
                <div className="email-input">
                  <div className="email-content">
                    <div className="email-input-container1">
                      <div className="e-mail-1">E- mail -</div>
                    </div>
                    <div className="password-field">
                      <div className="password-1">
                        <span>Password</span>
                        <span className="span23"> -</span>
                      </div>
                    </div>
                    <div className="seller-button">
                      <div className="seller-button-background" />
                      <div
                        className="become-seller1"
                        onClick={onBecomeSellerTextClick}
                      >{`Become Seller `}</div>
                    </div>
                  </div>
                  <div className="user-field">
                    <div className="user-content">
                      <div className="user-email">
                        <div className="user-email-child" />
                        <a
                          className="james6754gmailcom1"
                          href="mailto:james6754@gmail.com"
                          target="_blank"
                        >
                          james6754@gmail.com
                        </a>
                      </div>
                      <div className="user-email1">
                        <div className="user-email-child" />
                        <input
                          className="input1"
                          placeholder="***********"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="forgot-password-link-wrapper">
                      <div className="forgot-password-link">
                        <div className="forgot-password-content">
                          <div className="forgot-password-content-child" />
                        </div>
                        <div className="forgot-password-parent">
                          <div className="forgot-password">{`Forgot Password `}</div>
                          <div className="line-wrapper10">
                            <div className="frame-child80" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="social-login">
                  <div className="social-options">
                    <div className="social-buttons">
                      <div className="facebook-button">
                        <div className="facebook-icon15">
                          <div className="button-separator" />
                        </div>
                        <div className="other-options">
                          <h2 className="through-others">Through Others</h2>
                          <div className="option-separator" />
                        </div>
                      </div>
                    </div>
                    <div className="social-icons3">
                      <img
                        className="facebook-icon16"
                        loading="lazy"
                        alt=""
                        src="/facebook@2x.png"
                      />
                      <div className="google-button">
                        <img
                          className="google-plus-icon"
                          loading="lazy"
                          alt=""
                          src="/google-plus@2x.png"
                        />
                      </div>
                      <div className="twitter-button">
                        <img
                          className="google-plus-icon"
                          loading="lazy"
                          alt=""
                          src="/twitterx@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent19.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent19;
