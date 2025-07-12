import { useCallback } from "react";
import FrameComponent19 from "../components/FrameComponent19";
import PopularPlaces from "../components/PopularPlaces";
import User1 from "../components/User1";
import HeritageIcons from "../components/HeritageIcons";
import HeritageIcons2 from "../components/HeritageIcons2";
import { useNavigate } from "react-router-dom";
import HeritageIcons3 from "../components/HeritageIcons3";
import Footer4 from "../components/Footer4";
import "./DesktopSignIn.css";

const DesktopSignIn = () => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/spritiual");
  }, [navigate]);

  const onRectangleClick1 = useCallback(() => {
    navigate("/museums");
  }, [navigate]);

  return (
    <div className="desktop-sign-in">
      <img
        className="screenshot-352-ai-brush-remo-icon4"
        alt=""
        src="/screenshot--352-aibrushremovebgtxorkjjb-1@2x.png"
      />
      <div className="meenakshi-temple1">MEENAKSHI TEMPLE</div>
      <FrameComponent19 />
      <PopularPlaces />
      <section className="desktop-sign-in-inner">
        <div className="top-reviews-parent">
          <div className="top-reviews3">
            <h2 className="top4">TOP</h2>
          </div>
          <div className="reviews-label">
            <h1 className="r3">R</h1>
            <div className="reviews-label1">
              <h2 className="eviews4">EVIEWS</h2>
            </div>
          </div>
          <div className="from-label">
            <h2 className="from4">FROM</h2>
          </div>
          <div className="tourists-label">
            <h1 className="tourists4">TOURISTS</h1>
          </div>
        </div>
      </section>
      <section className="review-container">
        <div className="review-container1">
          <User1
            propWidth="1674px"
            propFlex="unset"
            image="/ellipse-4@2x.png"
            avatar="/ellipse-5@2x.png"
            line11="/line-11.svg"
            account="/account@2x.png"
            line12="/line-11.svg"
          />
          <div className="heritage-content-container">
            <div className="heritage-content1">
              <img className="heritage-separator-icon" loading="lazy" alt="" />
              <div className="heritage-types2">
                <div className="heritage-type-examples">
                  <HeritageIcons heritage1="/heritage-4@2x.png" />
                  <HeritageIcons2 iNDIANART1="/indian-art-4@2x.png" />
                  <div className="heritage-type-example-list">
                    <div
                      className="heritage-type-example-list-child"
                      onClick={onRectangleClick}
                    />
                    <img
                      className="spritiual-3-icon"
                      loading="lazy"
                      alt=""
                      src="/spritiual-4@2x.png"
                    />
                    <div className="spiritual-parent1">
                      <div className="spiritual3">SPIRITUAL</div>
                      <div className="inner-peace-arises3">
                        Inner peace arises from deep spiritual understanding.
                      </div>
                    </div>
                  </div>
                  <HeritageIcons3 bestIndianWildlifePhotographers="/bestindianwildlifephotographers01-4@2x.png" />
                  <div className="heritage-type-example-list1">
                    <div
                      className="heritage-type-example-list-item"
                      onClick={onRectangleClick1}
                    />
                    <img
                      className="museum-mobile-414x233-3-icon"
                      loading="lazy"
                      alt=""
                      src="/museummobile414x233-4@2x.png"
                    />
                    <div className="museums-parent1">
                      <div className="museums5">MUSEUMS</div>
                      <div className="inner-peace-arises3">
                        Preserving history, inspiring future generations.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer4 />
    </div>
  );
};

export default DesktopSignIn;
