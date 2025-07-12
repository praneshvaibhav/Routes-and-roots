import { useCallback } from "react";
import FrameComponent from "../components/FrameComponent";
import FrameComponent2 from "../components/FrameComponent2";
import ExploreDestinations from "../components/ExploreDestinations";
import HeritageIcons from "../components/HeritageIcons";
import HeritageIcons2 from "../components/HeritageIcons2";
import { useNavigate } from "react-router-dom";
import HeritageIcons3 from "../components/HeritageIcons3";
import Footer from "../components/Footer";
import "./DesktopState1.css";

const DesktopState1 = () => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/spritiual");
  }, [navigate]);

  const onRectangleClick1 = useCallback(() => {
    navigate("/museums");
  }, [navigate]);

  return (
    <div className="desktop-state-3">
      <footer className="desktop-state-3-child" />
      <div className="about-us2">{`About us `}</div>
      <div className="about-us2">complain</div>
      <div className="privacy-policy2">Privacy Policy</div>
      <div className="about-us2">Careers</div>
      <div className="help-center2">Help center</div>
      <div className="connect-with-us2">Connect with us :</div>
      <div className="about-us2">FAQ’s</div>
      <div className="about-us2">{`e-Visa `}</div>
      <div className="terms-condition2">{`Terms & Condition`}</div>
      <img className="instagram-icon2" alt="" src="/instagram@2x.png" />
      <img
        className="copyright-all-rights-reserved2"
        alt=""
        src="/copyright-all-rights-reserved@2x.png"
      />
      <FrameComponent
        headerMinHeight="unset"
        phoneIconBackgroundImage="unset"
        frameDivTextDecoration="none"
        dESTNATIONSTextDecoration="none"
        searchbarTextDecoration="none"
      />
      <main className="hero-content-parent">
        <FrameComponent2
          screenshotAiBrushRemovebg="/screenshot--352-aibrushremovebgtxorkjjb-1@2x.png"
          amazingUp6777cdc32="/amazingup6777cdc3-2@2x.png"
        />
        <ExploreDestinations />
      </main>
      <div className="footer1">
        <div className="heritage-types1">
          <HeritageIcons heritage1="/heritage-4@2x.png" />
          <HeritageIcons2 iNDIANART1="/indian-art-4@2x.png" />
          <div className="heritage-types-content">
            <div
              className="heritage-types-content-child"
              onClick={onRectangleClick}
            />
            <img
              className="spritiual-1-icon"
              loading="lazy"
              alt=""
              src="/spritiual-4@2x.png"
            />
            <div className="spiritual-group">
              <div className="spiritual1">SPIRITUAL</div>
              <div className="inner-peace-arises1">
                Inner peace arises from deep spiritual understanding.
              </div>
            </div>
          </div>
          <HeritageIcons3 bestIndianWildlifePhotographers="/bestindianwildlifephotographers01-4@2x.png" />
          <div className="heritage-types-content1">
            <div
              className="heritage-types-content-item"
              onClick={onRectangleClick1}
            />
            <img
              className="museum-mobile-414x233-1-icon"
              loading="lazy"
              alt=""
              src="/museummobile414x233-4@2x.png"
            />
            <div className="museums-group">
              <div className="museums1">MUSEUMS</div>
              <div className="inner-peace-arises1">
                Preserving history, inspiring future generations.
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer
        propTextDecoration="none"
        instagram="/instagram@2x.png"
        propTextDecoration1="none"
      />
    </div>
  );
};

export default DesktopState1;
