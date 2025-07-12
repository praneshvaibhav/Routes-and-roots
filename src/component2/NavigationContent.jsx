import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./NavigationContent.css";

const NavigationContent = ({ className = "" }) => {
  const navigate = useNavigate();

  const onHOMETextClick = useCallback(() => {
    navigate("/desktop-homepage");
  }, [navigate]);

  const onABOUTUSTextClick = useCallback(() => {
    navigate("/desktop-about-us");
  }, [navigate]);

  const onDESTNATIONSTextClick = useCallback(() => {
    window.open(
      "https://www.google.com/maps/place/Taj+Mahal+Agra+Tour+Guide+(Govt.+approved)+English+%26+German+family/@27.1713486,78.0353724,17z/data=!3m1!4b1!4m6!3m5!1s0x39747123b369df2b:0x5b725845799ad853!8m2!3d27.1713439!4d78.0402433!16s%2Fg%2F11np248fh4?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
    );
  }, []);

  const onCULTURECALENDERTextClick = useCallback(() => {
    navigate("/desktop-culture-calender");
  }, [navigate]);

  const onSearchBackgroundClick = useCallback(() => {
    navigate("/desktop-state-search");
  }, [navigate]);

  return (
    <header className={`navigation-content ${className}`}>
      <div className="navigation-links">
        <div className="destinations-link">
          <a className="home3" onClick={onHOMETextClick}>
            HOME
          </a>
          <div className="about-us-wrapper">
            <a className="about-us19" onClick={onABOUTUSTextClick}>
              ABOUT US
            </a>
          </div>
          <div className="shop-parent">
            <a className="shop4">SHOP</a>
            <div className="expand-arrow-container">
              <img
                className="expand-arrow-icon4"
                loading="lazy"
                alt=""
                src="/expand-arrow@2x.png"
              />
            </div>
          </div>
          <a className="destnations4" onClick={onDESTNATIONSTextClick}>
            DESTNATIONS
          </a>
        </div>
      </div>
      <div className="frame-parent60">
        <div className="culture-calender-wrapper">
          <div
            className="culture-calender4"
            onClick={onCULTURECALENDERTextClick}
          >{`CULTURE CALENDER `}</div>
        </div>
        <div className="search-background-parent">
          <div
            className="search-background"
            onClick={onSearchBackgroundClick}
          />
          <img
            className="google-web-search1"
            loading="lazy"
            alt=""
            src="/google-web-search@2x.png"
          />
        </div>
      </div>
      <div className="navigation-content-inner">
        <div className="rectangle-parent22">
          <div className="frame-child45" />
          <div className="items5">0 Items</div>
          <div className="line-wrapper8">
            <div className="frame-child46" />
          </div>
          <div className="rs00-frame">
            <div className="rs004">Rs.00</div>
          </div>
          <img
            className="shopping-bag-icon1"
            loading="lazy"
            alt=""
            src="/shopping-bag@2x.png"
          />
        </div>
      </div>
    </header>
  );
};

NavigationContent.propTypes = {
  className: PropTypes.string,
};

export default NavigationContent;
