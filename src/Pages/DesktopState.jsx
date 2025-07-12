import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent from "../components/FrameComponent";
import FrameComponent2 from "../components/FrameComponent2";
import SearchContainer from "../components/SearchContainer";
import HeritageIcons from "../components/HeritageIcons";
import HeritageIcons2 from "../components/HeritageIcons2";
import HeritageIcons3 from "../components/HeritageIcons3";
import Footer from "../components/Footer";
import "./DesktopState.css";

const DesktopState = () => {
  const navigate = useNavigate();

  const onHOMETextClick = useCallback(() => {
    navigate("/desktop-homepage");
  }, [navigate]);

  const onDESTNATIONSTextClick = useCallback(() => {
    window.open(
      "https://www.google.com/maps/place/Taj+Mahal+Agra+Tour+Guide+(Govt.+approved)+English+%26+German+family/@27.1713486,78.0353724,17z/data=!3m1!4b1!4m6!3m5!1s0x39747123b369df2b:0x5b725845799ad853!8m2!3d27.1713439!4d78.0402433!16s%2Fg%2F11np248fh4?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
    );
  }, []);

  const onFacebookImageClick = useCallback(() => {
    window.open(
      "https://www.facebook.com/profile.php?id=61551651067407&mibextid=ZbWKwL"
    );
  }, []);

  const onRectangleClick = useCallback(() => {
    navigate("/spritiual");
  }, [navigate]);

  const onRectangleClick1 = useCallback(() => {
    navigate("/museums");
  }, [navigate]);

  return (
    <div className="desktop-state">
      <footer className="desktop-state-child" />
      <div className="about-us11">{`About us `}</div>
      <div className="about-us11">complain</div>
      <div className="privacy-policy10">Privacy Policy</div>
      <div className="about-us11">Careers</div>
      <div className="help-center10">Help center</div>
      <div className="connect-with-us10">Connect with us :</div>
      <div className="about-us11">FAQ’s</div>
      <div className="about-us11">{`e-Visa `}</div>
      <div className="terms-condition10">{`Terms & Condition`}</div>
      <img className="instagram-icon10" alt="" src="/instagram@2x.png" />
      <img
        className="copyright-all-rights-reserved10"
        alt=""
        src="/copyright-all-rights-reserved@2x.png"
      />
      <FrameComponent
        headerMinHeight="unset"
        phoneIconBackgroundImage="unset"
        onHOMETextClick={onHOMETextClick}
        frameDivTextDecoration="unset"
        dESTNATIONSTextDecoration="unset"
        onDESTNATIONSTextClick={onDESTNATIONSTextClick}
        searchbarTextDecoration="unset"
      />
      <main className="content3">
        <FrameComponent2
          screenshotAiBrushRemovebg="/screenshot--352-aibrushremovebgtxorkjjb-1@2x.png"
          amazingUp6777cdc32="/amazingup6777cdc3-2@2x.png"
        />
        <section className="search-container-wrapper">
          <SearchContainer />
        </section>
      </main>
      <div className="heritage-header-wrapper">
        <div className="heritage-header">
          <HeritageIcons heritage1="/heritage-4@2x.png" />
          <HeritageIcons2 iNDIANART1="/indian-art-4@2x.png" />
          <div className="heritage-icons">
            <div className="heritage-icons-child" onClick={onRectangleClick} />
            <img
              className="spritiual-1-icon2"
              loading="lazy"
              alt=""
              src="/spritiual-4@2x.png"
            />
            <div className="spiritual-parent2">
              <div className="spiritual4">SPIRITUAL</div>
              <div className="inner-peace-arises4">
                Inner peace arises from deep spiritual understanding.
              </div>
            </div>
          </div>
          <HeritageIcons3 bestIndianWildlifePhotographers="/bestindianwildlifephotographers01-4@2x.png" />
          <div className="heritage-icons1">
            <div className="heritage-icons-item" onClick={onRectangleClick1} />
            <img
              className="museum-mobile-414x233-1-icon2"
              loading="lazy"
              alt=""
              src="/museummobile414x233-4@2x.png"
            />
            <div className="museums-parent2">
              <div className="museums6">MUSEUMS</div>
              <div className="inner-peace-arises4">
                Preserving history, inspiring future generations.
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer
        propTextDecoration="unset"
        onFacebookImageClick={onFacebookImageClick}
        instagram="/instagram@2x.png"
        propTextDecoration1="unset"
      />
    </div>
  );
};

export default DesktopState;
