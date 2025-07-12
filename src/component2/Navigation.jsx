import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import InfoSignIn from "./InfoSignIn";
import FooterNavigation from "./FooterNavigation";
import PropTypes from "prop-types";
import "./Navigation.css";

const Navigation = ({ className = "" }) => {
  const navigate = useNavigate();

  const onBackIconClick = useCallback(() => {
    navigate("/desktop-shop");
  }, [navigate]);

  const onCULTURECALENDERTextClick = useCallback(() => {
    navigate("/desktop-culture-calender");
  }, [navigate]);

  const onSearchInputClick = useCallback(() => {
    navigate("/desktop-state-search");
  }, [navigate]);

  const onArtistImageClick = useCallback(() => {
    navigate("/desktop-shop-3");
  }, [navigate]);

  return (
    <section className={`navigation1 ${className}`}>
      <InfoSignIn
        propAlignSelf="unset"
        propPosition="absolute"
        propTop="0px"
        propLeft="0px"
        propBackgroundImage="unset"
      />
      <a className="shop1">SHOP</a>
      <div className="destnations1">DESTNATIONS</div>
      <div
        className="culture-calender1"
        onClick={onCULTURECALENDERTextClick}
      >{`CULTURE CALENDER `}</div>
      <img
        className="expand-arrow-icon1"
        loading="lazy"
        alt=""
        src="/expand-arrow@2x.png"
      />
      <div className="cart">
        <div className="cart-child" />
        <div className="items2">0 Items</div>
        <div className="cart-inner">
          <div className="frame-child12" />
        </div>
        <div className="price">
          <div className="rs001">Rs.00</div>
        </div>
        <img
          className="shopping-bag-icon"
          loading="lazy"
          alt=""
          src="/shopping-bag@2x.png"
        />
      </div>
      <div className="search-bar">
        <div className="search-input" onClick={onSearchInputClick} />
        <img
          className="google-web-search"
          loading="lazy"
          alt=""
          src="/google-web-search@2x.png"
        />
      </div>
      <h2 className="kashmiri-oudh">Kashmiri Oudh</h2>
      <b className="this-attar-is">This attar is a non-alcoholic perfume.</b>
      <div className="artist">
        <div className="artist-image" onClick={onArtistImageClick} />
        <b className="about-artist">
          <p className="about">About</p>
          <p className="about"> Artist</p>
        </b>
      </div>
      <FooterNavigation
        screenshotAiBrushRemovebg="/screenshot--352-aibrushremovebgtxorkjjb-1@2x.png"
        onBackIconClick={onBackIconClick}
      />
    </section>
  );
};

Navigation.propTypes = {
  className: PropTypes.string,
};

export default Navigation;
