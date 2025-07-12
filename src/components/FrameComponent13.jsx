import { useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./FrameComponent13.css";

const FrameComponent13 = ({ className = "", phoneIconBackgroundImage }) => {
  const profileDropdownStyle = useMemo(() => {
    return {
      backgroundImage: phoneIconBackgroundImage,
    };
  }, [phoneIconBackgroundImage]);

  const navigate = useNavigate();

  const onENGTextClick = useCallback(() => {
    navigate("/desktop-language");
  }, [navigate]);

  const onSIGNINTextClick = useCallback(() => {
    navigate("/desktop-sign-in");
  }, [navigate]);

  const onHOMETextClick = useCallback(() => {
    navigate("/desktop-homepage");
  }, [navigate]);

  const onABOUTUSTextClick = useCallback(() => {
    navigate("/desktop-about-us");
  }, [navigate]);

  const onCULTURECALENDERTextClick = useCallback(() => {
    navigate("/desktop-culture-calender");
  }, [navigate]);

  return (
    <header className={`top-bar-parent ${className}`}>
      <div className="top-bar">
        <div className="bar-links">
          <div className="inforootsroutescom8">{`INFO@ROOTS&ROUTES.COM`}</div>
          <a className="auth">+91- 200-352-4121</a>
        </div>
        <div className="bar-links1">
          <a className="eng8" onClick={onENGTextClick}>{`ENG `}</a>
          <a className="sign-in10" onClick={onSIGNINTextClick}>
            SIGN IN
          </a>
        </div>
        <div className="user-profile">
          <div className="image-placeholder" />
          <img
            className="email-icon8"
            loading="lazy"
            alt=""
            src="/email@2x.png"
          />
          <div className="profile-dropdown" style={profileDropdownStyle}>
            <img className="phone-icon8" alt="" src="/phone@2x.png" />
            <div className="unread" />
          </div>
          <img
            className="user-icon8"
            loading="lazy"
            alt=""
            src="/user@2x.png"
          />
          <img className="earth-globe-icon8" alt="" src="/earth-globe@2x.png" />
        </div>
      </div>
      <div className="navigation5">
        <div className="nav-links1">
          <div className="menu-links">
            <nav className="page-links">
              <div className="home8" onClick={onHOMETextClick}>
                HOME
              </div>
              <div className="page-names">
                <div className="about-us30" onClick={onABOUTUSTextClick}>
                  ABOUT US
                </div>
              </div>
              <div className="page-names">
                <div className="shop10">SHOP</div>
              </div>
              <div className="destnations10">DESTNATIONS</div>
            </nav>
            <div
              className="culture-calender10"
              onClick={onCULTURECALENDERTextClick}
            >{`CULTURE CALENDER `}</div>
          </div>
          <div className="search-bar2">
            <div className="search-input1">
              <div className="search-input-child" />
              <div className="items10">0 Items</div>
              <div className="search-icon">
                <div className="divider1" />
              </div>
              <div className="price-filter">
                <div className="rs0010">Rs.00</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

FrameComponent13.propTypes = {
  className: PropTypes.string,

  /** Style props */
  phoneIconBackgroundImage: PropTypes.any,
};

export default FrameComponent13;
