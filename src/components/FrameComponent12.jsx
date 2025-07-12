import { useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./FrameComponent12.css";

const FrameComponent12 = ({ className = "", phoneIconBackgroundImage }) => {
  const userDropdownSubmenuContentStyle = useMemo(() => {
    return {
      backgroundImage: phoneIconBackgroundImage,
    };
  }, [phoneIconBackgroundImage]);

  const navigate = useNavigate();

  const onHOMETextClick = useCallback(() => {
    navigate("/desktop-homepage");
  }, [navigate]);

  const onABOUTUSTextClick = useCallback(() => {
    navigate("/desktop-about-us");
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
    <section className={`frame-parent51 ${className}`}>
      <div className="frame-wrapper17">
        <div className="logo-rect-wrapper">
          <div className="logo-rect" />
        </div>
      </div>
      <header className="email-parent">
        <img className="email-icon" loading="lazy" alt="" src="/email@2x.png" />
        <div className="user-dropdown">
          <div className="user-dropdown-menu">
            <div className="user-dropdown-items">
              <div className="user-dropdown-item">
                <div className="user-dropdown-submenu">
                  <div className="user-dropdown-submenu-item">
                    <div
                      className="user-dropdown-submenu-content"
                      style={userDropdownSubmenuContentStyle}
                    >
                      <img className="phone-icon" alt="" src="/phone@2x.png" />
                      <div className="user-dropdown-submenu-icon" />
                    </div>
                    <div className="wrapper1">
                      <a className="a">+91- 200-352-4121</a>
                    </div>
                  </div>
                </div>
                <div className="links-container-parent">
                  <nav className="links-container">
                    <div className="home2" onClick={onHOMETextClick}>
                      HOME
                    </div>
                    <div className="main-links">
                      <div className="about-us16" onClick={onABOUTUSTextClick}>
                        ABOUT US
                      </div>
                    </div>
                    <div className="main-links">
                      <div className="shop3">SHOP</div>
                    </div>
                    <div className="destnations3">DESTNATIONS</div>
                  </nav>
                  <div
                    className="culture-calender3"
                    onClick={onCULTURECALENDERTextClick}
                  >{`CULTURE CALENDER `}</div>
                </div>
              </div>
            </div>
            <div className="inforootsroutescom">{`INFO@ROOTS&ROUTES.COM`}</div>
          </div>
        </div>
        <div className="content4">
          <div className="hero-content-group">
            <div className="hero-content">
              <img
                className="earth-globe-icon"
                alt=""
                src="/earth-globe@2x.png"
              />
              <div className="language">
                <a className="eng" onClick={onENGTextClick}>{`ENG `}</a>
              </div>
            </div>
            <div className="user-account">
              <img
                className="user-icon"
                loading="lazy"
                alt=""
                src="/user@2x.png"
              />
              <div className="signin-btn">
                <a className="eng" onClick={onSIGNINTextClick}>
                  SIGN IN
                </a>
              </div>
            </div>
          </div>
          <div className="cart1">
            <div className="cart-content">
              <div className="cart-content-child" />
              <div className="items4">0 Items</div>
              <div className="cart-item-divider">
                <div className="cart-item-divider-child" />
              </div>
              <div className="cart-total">
                <div className="rs003">Rs.00</div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </section>
  );
};

FrameComponent12.propTypes = {
  className: PropTypes.string,

  /** Style props */
  phoneIconBackgroundImage: PropTypes.any,
};

export default FrameComponent12;
