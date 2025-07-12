import { useCallback } from "react";
import VictoriaContainer from "../components/VictoriaContainer";
import States from "../components/States";
import InfoParent from "../components/InfoParent";
import ReviewParent from "../components/ReviewParent";
import Footer from "../components/Footer";
import "./DesktopStateSearch.css";

const DesktopStateSearch = () => {
  const onFacebookImageClick = useCallback(() => {
    window.open(
      "https://www.facebook.com/profile.php?id=61551651067407&mibextid=ZbWKwL"
    );
  }, []);

  return (
    <div className="desktop-state-search">
      <section className="homepage">
        <img
          className="jaipur-template-12"
          alt=""
          src="/jaipur-template-11@2x.png"
        />
        <h1 className="o-u-r1">O U R</h1>
      </section>
      <footer className="desktop-state-search-child" />
      <div className="about-us6">{`About us `}</div>
      <div className="complain6">complain</div>
      <div className="privacy-policy6">Privacy Policy</div>
      <div className="careers6">Careers</div>
      <div className="help-center6">Help center</div>
      <div className="connect-with-us6">Connect with us :</div>
      <div className="faqs6">FAQ’s</div>
      <div className="e-visa6">{`e-Visa `}</div>
      <div className="terms-condition6">{`Terms & Condition`}</div>
      <img className="instagram-icon6" alt="" src="/instagram@2x.png" />
      <img
        className="copyright-all-rights-reserved6"
        alt=""
        src="/copyright-all-rights-reserved@2x.png"
      />
      <section className="victoria-container-parent">
        <VictoriaContainer />
        <div className="states-parent">
          <States />
          <div className="sikkim-parent">
            <div className="sikkim-parent-child" />
            <div className="div24">24.</div>
            <div className="sikkim">Sikkim</div>
          </div>
          <div className="telangana-parent">
            <div className="telangana-parent-child" />
            <div className="telangana-empty-parent">
              <div className="div25">26.</div>
            </div>
            <div className="telangana">Telangana</div>
          </div>
          <InfoParent />
        </div>
      </section>
      <ReviewParent />
      <div className="desktop-state-search-item" />
      <div className="desktop-state-search-inner" />
      <Footer
        propTextDecoration="unset"
        onFacebookImageClick={onFacebookImageClick}
        instagram="/instagram@2x.png"
        propTextDecoration1="unset"
      />
    </div>
  );
};

export default DesktopStateSearch;
