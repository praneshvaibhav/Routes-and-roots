import { useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({
  className = "",
  headerMinHeight,
  phoneIconBackgroundImage,
  onHOMETextClick,
  frameDivTextDecoration,
  dESTNATIONSTextDecoration,
  onDESTNATIONSTextClick,
  searchbarTextDecoration,
}) => {
  const frameHeaderStyle = useMemo(() => {
    return {
      minHeight: headerMinHeight,
    };
  }, [headerMinHeight]);

  const notificationStyle = useMemo(() => {
    return {
      backgroundImage: phoneIconBackgroundImage,
    };
  }, [phoneIconBackgroundImage]);

  const aBOUTUSStyle = useMemo(() => {
    return {
      textDecoration: frameDivTextDecoration,
    };
  }, [frameDivTextDecoration]);

  const sHOPStyle = useMemo(() => {
    return {
      textDecoration: dESTNATIONSTextDecoration,
    };
  }, [dESTNATIONSTextDecoration]);

  const dESTNATIONSStyle = useMemo(() => {
    return {
      textDecoration: searchbarTextDecoration,
    };
  }, [searchbarTextDecoration]);

  const navigate = useNavigate();

  const onENGTextClick = useCallback(() => {
    navigate("/desktop-language");
  }, [navigate]);

  const onSIGNINTextClick = useCallback(() => {
    navigate("/desktop-sign-in");
  }, [navigate]);

  const onABOUTUSTextClick = useCallback(() => {
    navigate("/desktop-about-us");
  }, [navigate]);

  const onSHOPTextClick = useCallback(() => {
    navigate("/desktop-shop");
  }, [navigate]);

  const onCULTURECALENDERTextClick = useCallback(() => {
    navigate("/desktop-culture-calender");
  }, [navigate]);

  const onSearchboxClick = useCallback(() => {
    navigate("/desktop-state-search");
  }, [navigate]);

  return (
    <header className={`header-parent ${className}`} style={frameHeaderStyle}>
      <div className="header3">
        <div className="login">
          <div className="inforootsroutescom9">{`INFO@ROOTS&ROUTES.COM`}</div>
          <a className="signin">+91- 200-352-4121</a>
        </div>
        <div className="login1">
          <a className="eng9" onClick={onENGTextClick}>{`ENG `}</a>
          <a className="sign-in11" onClick={onSIGNINTextClick}>
            SIGN IN
          </a>
        </div>
        <div className="profile">
          <div className="avatar1" />
          <img
            className="email-icon9"
            loading="lazy"
            alt=""
            src="/email@2x.png"
          />
          <div className="notification" style={notificationStyle}>
            <img className="phone-icon9" alt="" src="/phone@2x.png" />
            <div className="alert" />
          </div>
          <img
            className="user-icon9"
            loading="lazy"
            alt=""
            src="/user@2x.png"
          />
          <img className="earth-globe-icon9" alt="" src="/earth-globe@2x.png" />
        </div>
      </div>
      <div className="navigation6">
        <nav className="menubar">
          <div className="page-links1">
            <div className="primary-links">
              <div className="dropdown">
                <a className="home9" onClick={onHOMETextClick}>
                  HOME
                </a>
                <img
                  className="expand-arrow-icon9"
                  loading="lazy"
                  alt=""
                  src="/expand-arrow@2x.png"
                />
              </div>
              <div className="shop-frame">
                <div
                  className="about-us31"
                  onClick={onABOUTUSTextClick}
                  style={aBOUTUSStyle}
                >
                  ABOUT US
                </div>
              </div>
              <div className="shop-frame">
                <div
                  className="shop11"
                  onClick={onSHOPTextClick}
                  style={sHOPStyle}
                >
                  SHOP
                </div>
              </div>
              <div
                className="destnations11"
                onClick={onDESTNATIONSTextClick}
                style={dESTNATIONSStyle}
              >
                DESTNATIONS
              </div>
            </div>
          </div>
          <div className="searchbar">
            <div className="input">
              <div
                className="culture-calender11"
                onClick={onCULTURECALENDERTextClick}
              >{`CULTURE CALENDER `}</div>
            </div>
            <div className="query">
              <div className="searchbox" onClick={onSearchboxClick} />
              <img
                className="google-web-search3"
                loading="lazy"
                alt=""
                src="/google-web-search@2x.png"
              />
            </div>
          </div>
          <div className="cart2">
            <div className="rectangle-parent45">
              <div className="frame-child76" />
              <div className="items11">0 Items</div>
              <div className="itemdivider">
                <div className="divider2" />
              </div>
              <div className="pricerow">
                <div className="rs0011">Rs.00</div>
              </div>
              <img
                className="shopping-bag-icon3"
                loading="lazy"
                alt=""
                src="/shopping-bag@2x.png"
              />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,

  /** Style props */
  headerMinHeight: PropTypes.any,
  phoneIconBackgroundImage: PropTypes.any,
  frameDivTextDecoration: PropTypes.any,
  dESTNATIONSTextDecoration: PropTypes.any,
  searchbarTextDecoration: PropTypes.any,

  /** Action props */
  onHOMETextClick: PropTypes.func,
  onDESTNATIONSTextClick: PropTypes.func,
};

export default FrameComponent;
