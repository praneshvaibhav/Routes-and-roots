import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./FrameComponent25.css";

const FrameComponent25 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onHOMETextClick = useCallback(() => {
    navigate("/desktop-homepage");
  }, [navigate]);

  const onSHOPTextClick = useCallback(() => {
    navigate("/desktop-shop");
  }, [navigate]);

  const onCULTURECALENDERTextClick = useCallback(() => {
    navigate("/desktop-culture-calender");
  }, [navigate]);

  const onENGTextClick = useCallback(() => {
    navigate("/desktop-language");
  }, [navigate]);

  const onSIGNINTextClick = useCallback(() => {
    navigate("/desktop-sign-in");
  }, [navigate]);

  return (
    <section className={`frame-parent94 ${className}`}>
      <div className="frame-wrapper31">
        <div className="placeholder-wrapper3">
          <div className="placeholder11" />
        </div>
      </div>
      <header className="email-parent2">
        <img
          className="email-icon6"
          loading="lazy"
          alt=""
          src="/email@2x.png"
        />
        <div className="top-nav-wrapper">
          <div className="top-nav">
            <div className="home-link1">
              <div className="destination-link">
                <div className="about-link">
                  <div className="shop-link">
                    <div className="culture-link">
                      <img className="phone-icon6" alt="" src="/phone@2x.png" />
                      <div className="indicator" />
                    </div>
                    <div className="domain">
                      <a className="url">+91- 200-352-4121</a>
                    </div>
                  </div>
                </div>
                <div className="navigation-links-parent">
                  <div className="navigation-links3">
                    <div className="home6" onClick={onHOMETextClick}>
                      HOME
                    </div>
                    <div className="about-us-link-wrapper">
                      <div className="about-us-link1">
                        <a className="about-us28">ABOUT US</a>
                        <img
                          className="expand-arrow-icon6"
                          loading="lazy"
                          alt=""
                          src="/expand-arrow@2x.png"
                        />
                      </div>
                    </div>
                    <div className="shop-wrapper">
                      <div className="shop7" onClick={onSHOPTextClick}>
                        SHOP
                      </div>
                    </div>
                    <div className="destnations7">DESTNATIONS</div>
                  </div>
                  <div
                    className="culture-calender7"
                    onClick={onCULTURECALENDERTextClick}
                  >{`CULTURE CALENDER `}</div>
                </div>
              </div>
            </div>
            <div className="inforootsroutescom6">{`INFO@ROOTS&ROUTES.COM`}</div>
          </div>
        </div>
        <div className="language-options-parent">
          <div className="language-options">
            <div className="earth-globe-container">
              <img
                className="earth-globe-icon6"
                alt=""
                src="/earth-globe@2x.png"
              />
              <div className="language-code">
                <a className="eng6" onClick={onENGTextClick}>{`ENG `}</a>
              </div>
            </div>
            <div className="user-parent1">
              <img
                className="user-icon6"
                loading="lazy"
                alt=""
                src="/user@2x.png"
              />
              <div className="sign-in-wrapper1">
                <a className="eng6" onClick={onSIGNINTextClick}>
                  SIGN IN
                </a>
              </div>
            </div>
          </div>
          <div className="cart-details-wrapper">
            <div className="cart-details">
              <div className="cart-details-child" />
              <div className="items7">0 Items</div>
              <div className="separator">
                <div className="separator-child" />
              </div>
              <div className="rs00-wrapper2">
                <div className="rs007">Rs.00</div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </section>
  );
};

FrameComponent25.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent25;
