import FrameComponent16 from "../components/FrameComponent16";
import NavigationContent from "../components/NavigationContent";
import FrameComponent17 from "../components/FrameComponent17";
import ProductGridItems from "../components/ProductGridItems";
import FrameComponent18 from "../components/FrameComponent18";
import Footer from "../components/Footer";
import "./DesktopSHOP.css";

const DesktopSHOP = () => {
  return (
    <div className="desktop-shop">
      <FrameComponent16 />
      <section className="desktop-shop-inner">
        <div className="navigation-content-parent">
          <NavigationContent />
          <FrameComponent17 />
        </div>
      </section>
      <footer className="desktop-shop-child" />
      <div className="about-us1">{`About us `}</div>
      <div className="complain1">complain</div>
      <div className="privacy-policy1">Privacy Policy</div>
      <div className="careers1">Careers</div>
      <div className="help-center1">Help center</div>
      <div className="connect-with-us1">Connect with us :</div>
      <div className="faqs1">FAQ’s</div>
      <div className="e-visa1">{`e-Visa `}</div>
      <div className="terms-condition1">{`Terms & Condition`}</div>
      <img className="instagram-icon1" alt="" src="/instagram@2x.png" />
      <img
        className="copyright-all-rights-reserved1"
        alt=""
        src="/copyright-all-rights-reserved@2x.png"
      />
      <section className="frame-section">
        <div className="other-products-header-parent">
          <div className="other-products-header">
            <img className="other-products-header-child" alt="" />
          </div>
          <div className="other-products">Other Products</div>
          <div className="line-wrapper">
            <img className="frame-item" loading="lazy" alt="" />
          </div>
        </div>
      </section>
      <section className="product-grid">
        <div className="product-grid-content">
          <ProductGridItems />
          <FrameComponent18 />
        </div>
      </section>
      <Footer
        propTextDecoration="unset"
        instagram="/instagram@2x.png"
        propTextDecoration1="unset"
      />
    </div>
  );
};

export default DesktopSHOP;
