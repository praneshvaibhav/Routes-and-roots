import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent4 from "./FrameComponent4";
import PropTypes from "prop-types";
import "./ExploreDestinations.css";

const ExploreDestinations = ({ className = "" }) => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/desktop-state-2");
  }, [navigate]);

  const onRectangleClick1 = useCallback(() => {
    window.open(
      "https://www.google.com/maps/dir/ABESIT+GROUP+OF+INSTITUTIONS,+ABESIT+Campus+Road,+near+Crossing+Republik,+NE-3,+Crossings+Republik,+Ghaziabad,+Uttar+Pradesh/Agra,+Uttar+Pradesh/@27.9055457,77.1204495,9z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x390cee3d4e3485ed:0xe0fe1689b57c7d2e!2m2!1d77.4476854!2d28.6336112!1m5!1m1!1s0x39740d857c2f41d9:0x784aef38a9523b42!2m2!1d78.0080745!2d27.1766701?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
    );
  }, []);

  return (
    <section className={`explore-destinations ${className}`}>
      <div className="destinations-content">
        <div className="destinations-content-inner">
          <div className="frame-parent78">
            <div className="frame-parent79">
              <div className="frame-parent80">
                <div className="rectangle-parent32">
                  <div className="frame-child58" />
                  <div className="agra1">Agra</div>
                </div>
                <div className="frame-wrapper25">
                  <div className="rectangle-parent33">
                    <div className="frame-child59" onClick={onRectangleClick} />
                    <div className="x1">X</div>
                  </div>
                </div>
              </div>
              <div className="frame-wrapper26">
                <div className="frame-parent81">
                  <div className="rectangle-parent34">
                    <div
                      className="frame-child60"
                      onClick={onRectangleClick1}
                    />
                    <b className="map">Map</b>
                  </div>
                  <img
                    className="address-icon"
                    loading="lazy"
                    alt=""
                    src="/address@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className="frame-wrapper27">
              <div className="top-reviews-group">
                <div className="top-reviews5">
                  <h2 className="top6">TOP</h2>
                </div>
                <div className="r-parent">
                  <h1 className="r5">R</h1>
                  <div className="eviews-container">
                    <h2 className="eviews7">EVIEWS</h2>
                  </div>
                </div>
                <div className="reviews-source">
                  <h2 className="from7">FROM</h2>
                </div>
                <div className="tourists-wrapper">
                  <h1 className="tourists7">TOURISTS</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="destinations-divider">
          <img className="destinations-divider-child" loading="lazy" alt="" />
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
    </section>
  );
};

ExploreDestinations.propTypes = {
  className: PropTypes.string,
};

export default ExploreDestinations;
