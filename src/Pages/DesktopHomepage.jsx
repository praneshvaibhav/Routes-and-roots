import { useCallback } from "react";
import FrameComponent from "../components/FrameComponent";
import Content from "../components/Content";
import Popular from "../components/Popular";
import Content1 from "../components/Content1";
import Footer from "../components/Footer";
import "./DesktopHomepage.css";

const DesktopHomepage = () => {
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

  return (
    <div className="desktop-homepage1">
      <FrameComponent />
      <section className="banner">
        <img
          className="jaipur-template-13"
          alt=""
          src="/jaipur-template-11@2x.png"
        />
        <h1 className="o-u-r2">O U R</h1>
      </section>
      <Content />
      <Popular />
      <footer className="desktop-homepage-inner" />
      <div className="about-us9">{`About us `}</div>
      <div className="complain9">complain</div>
      <div className="privacy-policy9">Privacy Policy</div>
      <div className="careers9">Careers</div>
      <div className="help-center9">Help center</div>
      <div className="connect-with-us9">Connect with us :</div>
      <div className="faqs9">FAQ’s</div>
      <div className="e-visa9">{`e-Visa `}</div>
      <div className="terms-condition9">{`Terms & Condition`}</div>
      <img className="instagram-icon9" alt="" src="/instagram@2x.png" />
      <img
        className="copyright-all-rights-reserved9"
        alt=""
        src="/copyright-all-rights-reserved@2x.png"
      />
      <section className="reviews1">
        <div className="header1">
          <div className="top2">
            <h2 className="top3">TOP</h2>
          </div>
          <div className="reviews2">
            <h1 className="r2">R</h1>
            <div className="eviews2">
              <h2 className="eviews3">EVIEWS</h2>
            </div>
          </div>
          <div className="from2">
            <h2 className="from3">FROM</h2>
          </div>
          <div className="tourists2">
            <h1 className="tourists3">TOURISTS</h1>
          </div>
        </div>
      </section>
      <Content1 />
      <Footer
        onFacebookImageClick={onFacebookImageClick}
        onTwitterXImageClick={onTwitterXImageClick}
        instagram="/instagram@2x.png"
        onInstagramImageClick={onInstagramImageClick}
      />
    </div>
  );
};

export default DesktopHomepage;
