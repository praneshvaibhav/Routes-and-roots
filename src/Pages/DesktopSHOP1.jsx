import Navigation from "../components/Navigation";
import ProductInfo from "../components/ProductInfo";
import Footer from "../components/Footer";
import "./DesktopSHOP1.css";

const DesktopSHOP1 = () => {
  return (
    <div className="desktop-shop-2">
      <Navigation />
      <footer className="desktop-shop-2-child" />
      <div className="about-us">{`About us `}</div>
      <div className="about-us">complain</div>
      <div className="privacy-policy">Privacy Policy</div>
      <div className="about-us">Careers</div>
      <div className="help-center">Help center</div>
      <div className="connect-with-us">Connect with us :</div>
      <div className="about-us">FAQ’s</div>
      <div className="about-us">{`e-Visa `}</div>
      <div className="terms-condition">{`Terms & Condition`}</div>
      <img className="instagram-icon" alt="" src="/instagram@2x.png" />
      <img
        className="copyright-all-rights-reserved"
        alt=""
        src="/copyright-all-rights-reserved@2x.png"
      />
      <section className="product-details">
        <ProductInfo />
      </section>
      <Footer
        propTextDecoration="unset"
        instagram="/instagram@2x.png"
        propTextDecoration1="unset"
      />
    </div>
  );
};

export default DesktopSHOP1;
