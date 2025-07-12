import { useCallback } from "react";
import FrameComponent5 from "./FrameComponent5";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./FrameComponent18.css";

const FrameComponent18 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onSellerImageClick = useCallback(() => {
    navigate("/desktop-sign-in-two");
  }, [navigate]);

  return (
    <div className={`frame-parent64 ${className}`}>
      <div className="rectangle-parent26">
        <div className="spoon-product-child" />
        <div className="jute-content">
          <img
            className="jute-jewellery-1"
            loading="lazy"
            alt=""
            src="/jute-jewellery-1@2x.png"
          />
        </div>
        <div className="jute-product">
          <div className="jute-title">
            <div className="jute-jewellery">Jute Jewellery</div>
          </div>
          <div className="jute-price">
            <div className="rs299-on-sale">Rs.299 (on sale)</div>
          </div>
          <button className="jute-cart">
            <div className="jute-cart-child" />
            <div className="add-to-cart4">Add to cart</div>
          </button>
        </div>
      </div>
      <div className="spoon-container">
        <div className="spoon-product">
          <div className="spoon-product-child" />
          <div className="spoon-image">
            <img
              className="wooden-spoon-1"
              loading="lazy"
              alt=""
              src="/wooden-spoon-1@2x.png"
            />
          </div>
          <div className="spoon-title">
            <div className="wooden-spoon">Wooden Spoon</div>
            <div className="spoon-price">
              <div className="rs299-on-sale">Rs.278</div>
            </div>
          </div>
          <button className="spoon-cart">
            <div className="jute-cart-child" />
            <div className="add-to-cart4">Add to cart</div>
          </button>
        </div>
      </div>
      <div className="lamp-container">
        <div className="lamp-product">
          <div className="spoon-product-child" />
          <img
            className="lamp-1-icon"
            loading="lazy"
            alt=""
            src="/lamp-1@2x.png"
          />
          <FrameComponent5
            propAlignSelf="unset"
            propGap="22px"
            propWidth="359px"
            propWidth1="318px"
            copperKada="Traditional Lamp"
            propAlignSelf1="unset"
            propWidth2="311px"
            propDisplay="inline-block"
            rs589="Rs.723 "
          />
        </div>
        <div className="seller-container">
          <div className="seller">
            <div className="seller-image" onClick={onSellerImageClick} />
            <div className="become-seller">Become Seller</div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent18.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent18;
