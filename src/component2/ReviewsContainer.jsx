import { useCallback } from "react";
import User1 from "./User1";
import HeritageIcons from "./HeritageIcons";
import HeritageIcons2 from "./HeritageIcons2";
import { useNavigate } from "react-router-dom";
import HeritageIcons3 from "./HeritageIcons3";
import PropTypes from "prop-types";
import "./ReviewsContainer.css";

const ReviewsContainer = ({ className = "" }) => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/spritiual");
  }, [navigate]);

  const onRectangleClick1 = useCallback(() => {
    navigate("/museums");
  }, [navigate]);

  return (
    <section className={`reviews-container1 ${className}`}>
      <div className="reviews-title-parent">
        <div className="reviews-title">
          <div className="heading1">
            <h2 className="top5">TOP</h2>
          </div>
          <div className="letter-r">
            <h1 className="r4">R</h1>
            <div className="eviews5">
              <h2 className="eviews6">EVIEWS</h2>
            </div>
          </div>
          <div className="from5">
            <h2 className="from6">FROM</h2>
          </div>
          <div className="tourists5">
            <h1 className="tourists6">TOURISTS</h1>
          </div>
        </div>
        <div className="testimonial-container">
          <div className="testimonial">
            <div className="user-review">
              <User1
                propWidth="unset"
                propFlex="1"
                image="/ellipse-4@2x.png"
                avatar="/ellipse-5@2x.png"
                line11="/line-11.svg"
                account="/account@2x.png"
                line12="/line-11.svg"
              />
            </div>
            <div className="separator-parent">
              <img className="separator-icon1" loading="lazy" alt="" />
              <div className="heritage-types-wrapper">
                <div className="heritage-types3">
                  <HeritageIcons heritage1="/heritage-4@2x.png" />
                  <HeritageIcons2 iNDIANART1="/indian-art-4@2x.png" />
                  <div className="type-images">
                    <div
                      className="type-images-child"
                      onClick={onRectangleClick}
                    />
                    <img
                      className="spritiual-4-icon"
                      loading="lazy"
                      alt=""
                      src="/spritiual-4@2x.png"
                    />
                    <div className="spiritual-parent3">
                      <div className="spiritual5">SPIRITUAL</div>
                      <div className="inner-peace-arises5">
                        Inner peace arises from deep spiritual understanding.
                      </div>
                    </div>
                  </div>
                  <HeritageIcons3 bestIndianWildlifePhotographers="/bestindianwildlifephotographers01-4@2x.png" />
                  <div className="type-images1">
                    <div
                      className="type-images-item"
                      onClick={onRectangleClick1}
                    />
                    <img
                      className="museum-mobile-414x233-4-icon"
                      loading="lazy"
                      alt=""
                      src="/museummobile414x233-4@2x.png"
                    />
                    <div className="museums-parent3">
                      <div className="museums7">MUSEUMS</div>
                      <div className="inner-peace-arises5">
                        Preserving history, inspiring future generations.
                      </div>
                    </div>
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

ReviewsContainer.propTypes = {
  className: PropTypes.string,
};

export default ReviewsContainer;
