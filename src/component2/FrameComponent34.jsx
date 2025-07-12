import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import InfoSignIn from "./InfoSignIn";
import FooterNavigation from "./FooterNavigation";
import PropTypes from "prop-types";
import "./FrameComponent34.css";

const FrameComponent34 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/desktop-shop-2");
  }, [navigate]);

  const onCULTURECALENDERTextClick = useCallback(() => {
    navigate("/desktop-culture-calender");
  }, [navigate]);

  const onSearchBarClick = useCallback(() => {
    navigate("/desktop-state-search");
  }, [navigate]);

  return (
    <section className={`frame-parent96 ${className}`}>
      <InfoSignIn
        propAlignSelf="unset"
        propPosition="absolute"
        propTop="0px"
        propLeft="0px"
        propBackgroundImage="unset"
      />
      <a className="shop9">SHOP</a>
      <div className="destnations9">DESTNATIONS</div>
      <div
        className="culture-calender9"
        onClick={onCULTURECALENDERTextClick}
      >{`CULTURE CALENDER `}</div>
      <img
        className="expand-arrow-icon8"
        loading="lazy"
        alt=""
        src="/expand-arrow@2x.png"
      />
      <div className="rectangle-parent43">
        <div className="frame-child73" />
        <div className="items9">0 Items</div>
        <div className="line-wrapper9">
          <div className="frame-child74" />
        </div>
        <div className="rs00-wrapper3">
          <div className="rs009">Rs.00</div>
        </div>
        <img
          className="shopping-bag-icon2"
          loading="lazy"
          alt=""
          src="/shopping-bag@2x.png"
        />
      </div>
      <div className="search-bar-parent">
        <div className="search-bar1" onClick={onSearchBarClick} />
        <img
          className="google-web-search2"
          loading="lazy"
          alt=""
          src="/google-web-search@2x.png"
        />
      </div>
      <FooterNavigation
        screenshotAiBrushRemovebg="/screenshot--352-aibrushremovebgtxorkjjb-1@2x.png"
        onBackIconClick={onRectangleClick}
      />
      <img
        className="artist-1-icon"
        loading="lazy"
        alt=""
        src="/artist-1@2x.png"
      />
    </section>
  );
};

FrameComponent34.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent34;
