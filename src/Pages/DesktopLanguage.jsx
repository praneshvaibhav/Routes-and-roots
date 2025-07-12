import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent22 from "../components/FrameComponent22";
import FrameComponent23 from "../components/FrameComponent23";
import FrameComponent24 from "../components/FrameComponent24";
import User1 from "../components/User1";
import HeritageIcons from "../components/HeritageIcons";
import HeritageIcons2 from "../components/HeritageIcons2";
import HeritageIcons3 from "../components/HeritageIcons3";
import Footer1 from "../components/Footer1";
import "./DesktopLanguage.css";

const DesktopLanguage = () => {
  const navigate = useNavigate();

  const onEVisaTextClick = useCallback(() => {
    navigate("/desktop-e-visa");
  }, [navigate]);

  const onFacebookImageClick = useCallback(() => {
    window.open(
      "https://www.facebook.com/profile.php?id=61551651067407&mibextid=ZbWKwL"
    );
  }, []);

  const onTwitterXImageClick = useCallback(() => {
    window.open("https://x.com/PraneshVaibhav?t=2g4i6vgKhNYFRnN9JpZBRA&s=09");
  }, []);

  const onInstagramImageClick = useCallback(() => {
    window.open(
      "https://www.instagram.com/praneshvaibhav?igsh=MXIyNXI0emh1eDI3bw=="
    );
  }, []);

  const onRectangleClick = useCallback(() => {
    navigate("/spritiual");
  }, [navigate]);

  const onRectangleClick1 = useCallback(() => {
    navigate("/museums");
  }, [navigate]);

  return (
    <div className="desktop-language">
      <FrameComponent22 />
      <FrameComponent23 />
      <section className="place-banner">
        <img
          className="jaipur-template-11"
          alt=""
          src="/jaipur-template-11@2x.png"
        />
        <h1 className="o-u-r">O U R</h1>
      </section>
      <FrameComponent24 />
      <section className="header-wrapper">
        <div className="header">
          <div className="title">
            <h2 className="top">TOP</h2>
          </div>
          <div className="word">
            <h1 className="r">R</h1>
            <div className="fragment">
              <h2 className="eviews">EVIEWS</h2>
            </div>
          </div>
          <div className="preposition">
            <h2 className="from">FROM</h2>
          </div>
          <div className="subject">
            <h1 className="tourists">TOURISTS</h1>
          </div>
        </div>
      </section>
      <div className="desktop-language-child" />
      <section className="reviews">
        <div className="list">
          <User1
            propWidth="1674px"
            propFlex="unset"
            image="/ellipse-4@2x.png"
            avatar="/ellipse-5@2x.png"
            line11="/line-11.svg"
            account="/account@2x.png"
            line12="/line-11.svg"
          />
          <div className="heritage-content-wrapper">
            <div className="heritage-content">
              <img className="heritage-content-child" loading="lazy" alt="" />
              <div className="heritage-types">
                <div className="heritage-categories">
                  <HeritageIcons heritage1="/heritage-4@2x.png" />
                  <HeritageIcons2 iNDIANART1="/indian-art-4@2x.png" />
                  <div className="category-icons">
                    <div
                      className="category-icons-child"
                      onClick={onRectangleClick}
                    />
                    <img
                      className="spritiual-2-icon"
                      loading="lazy"
                      alt=""
                      src="/spritiual-4@2x.png"
                    />
                    <div className="spiritual-parent">
                      <div className="spiritual">SPIRITUAL</div>
                      <div className="inner-peace-arises">
                        Inner peace arises from deep spiritual understanding.
                      </div>
                    </div>
                  </div>
                  <HeritageIcons3 bestIndianWildlifePhotographers="/bestindianwildlifephotographers01-4@2x.png" />
                  <div className="category-icons1">
                    <div
                      className="category-icons-item"
                      onClick={onRectangleClick1}
                    />
                    <img
                      className="museum-mobile-414x233-2-icon"
                      loading="lazy"
                      alt=""
                      src="/museummobile414x233-4@2x.png"
                    />
                    <div className="museums-parent">
                      <div className="museums">MUSEUMS</div>
                      <div className="inner-peace-arises">
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
      <Footer1
        onEVisaTextClick={onEVisaTextClick}
        onFacebookImageClick={onFacebookImageClick}
        onTwitterXImageClick={onTwitterXImageClick}
        instagram="/instagram@2x.png"
        onInstagramImageClick={onInstagramImageClick}
      />
    </div>
  );
};

export default DesktopLanguage;
