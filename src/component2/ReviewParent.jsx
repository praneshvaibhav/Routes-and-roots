import { useCallback } from "react";
import User1 from "./User1";
import HeritageIcons from "./HeritageIcons";
import HeritageIcons2 from "./HeritageIcons2";
import { useNavigate } from "react-router-dom";
import HeritageIcons3 from "./HeritageIcons3";
import PropTypes from "prop-types";
import "./ReviewParent.css";

const ReviewParent = ({ className = "" }) => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/spritiual");
  }, [navigate]);

  const onRectangleClick1 = useCallback(() => {
    navigate("/museums");
  }, [navigate]);

  return (
    <section className={`review-parent ${className}`}>
      <div className="top-reviews-parent-parent">
        <div className="top-reviews-parent1">
          <div className="top-review-parent">
            <div className="top-container">
              <h2 className="top7">TOP</h2>
            </div>
            <div className="r-group">
              <h1 className="r6">R</h1>
              <div className="eviews-frame">
                <h2 className="eviews8">EVIEWS</h2>
              </div>
            </div>
            <div className="from-parent">
              <h2 className="from8">FROM</h2>
            </div>
            <div className="tourists-parent">
              <h1 className="tourists8">TOURISTS</h1>
            </div>
          </div>
        </div>
        <div className="card-parent">
          <User1
            propWidth="1674px"
            propFlex="unset"
            image="/ellipse-4@2x.png"
            avatar="/ellipse-5@2x.png"
            line11="/line-11.svg"
            account="/account@2x.png"
            line12="/line-11.svg"
          />
          <div className="third-card-parent">
            <div className="third-card-parent-inner">
              <img className="frame-child72" loading="lazy" alt="" />
            </div>
            <div className="heritages-parent">
              <HeritageIcons heritage1="/heritage-4@2x.png" />
              <HeritageIcons2 iNDIANART1="/indian-art-4@2x.png" />
              <div className="heritage-container1">
                <div
                  className="heritage-container-child"
                  onClick={onRectangleClick}
                />
                <img
                  className="spritiual-1-icon3"
                  loading="lazy"
                  alt=""
                  src="/spritiual-4@2x.png"
                />
                <div className="spiritual-parent4">
                  <div className="spiritual6">SPIRITUAL</div>
                  <div className="inner-peace-arises6">
                    Inner peace arises from deep spiritual understanding.
                  </div>
                </div>
              </div>
              <HeritageIcons3 bestIndianWildlifePhotographers="/bestindianwildlifephotographers01-4@2x.png" />
              <div className="heritage-container2">
                <div
                  className="heritage-container-item"
                  onClick={onRectangleClick1}
                />
                <img
                  className="museum-mobile-414x233-1-icon3"
                  loading="lazy"
                  alt=""
                  src="/museummobile414x233-4@2x.png"
                />
                <div className="museums-parent4">
                  <div className="museums8">MUSEUMS</div>
                  <div className="inner-peace-arises6">
                    Preserving history, inspiring future generations.
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

ReviewParent.propTypes = {
  className: PropTypes.string,
};

export default ReviewParent;
