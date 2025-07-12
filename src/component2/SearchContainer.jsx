import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent3 from "./FrameComponent3";
import FrameComponent4 from "./FrameComponent4";
import PropTypes from "prop-types";
import "./SearchContainer.css";

const SearchContainer = ({ className = "" }) => {
  const navigate = useNavigate();

  const onSearchIconClick = useCallback(() => {
    navigate("/desktop-state-2");
  }, [navigate]);

  return (
    <div className={`search-container ${className}`}>
      <div className="input-container">
        <div className="input-wrapper-parent">
          <div className="input-wrapper">
            <div className="search-input-box">
              <div className="search-field">
                <div className="search-icon1" onClick={onSearchIconClick} />
                <div className="search-city-or1">Search city or place</div>
              </div>
            </div>
            <FrameComponent3 />
          </div>
          <div className="review-container-wrapper">
            <div className="review-container3">
              <div className="top-frame">
                <h2 className="top8">TOP</h2>
              </div>
              <div className="review-count">
                <h1 className="r7">R</h1>
                <div className="review-word">
                  <h2 className="eviews9">EVIEWS</h2>
                </div>
              </div>
              <div className="review-source">
                <h2 className="from9">FROM</h2>
              </div>
              <div className="reviewer-type">
                <h1 className="tourists9">TOURISTS</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="search-container-inner">
        <img className="frame-child95" loading="lazy" alt="" />
      </div>
      <FrameComponent4
        account="/account@2x.png"
        line12="/line-11.svg"
        mysorePalace2="/mysore-palace-1@2x.png"
        konarkSunTempleecbbe="/konark-sun-temple-13e71cbb6e-1@2x.png"
        avatar="/ellipse-51@2x.png"
        uttarPradeshMap1="/uttarpradeshmap-1@2x.png"
        line11="/line-11.svg"
        victoriaMemorial2="/victoria-memorial-1@2x.png"
        minakshiTemple2="/minakshi-temple-1@2x.png"
        avatarTwo="/ellipse-41@2x.png"
        tAJMAHAL2="/taj-mahal-1@2x.png"
        humayunsTomb2="/humayuns-tomb-1@2x.png"
      />
    </div>
  );
};

SearchContainer.propTypes = {
  className: PropTypes.string,
};

export default SearchContainer;
