import FrameComponent5 from "./FrameComponent5";
import PropTypes from "prop-types";
import "./ProductGridItems.css";

const ProductGridItems = ({ className = "" }) => {
  return (
    <div className={`product-grid-items ${className}`}>
      <div className="grid-item-names">
        <div className="grid-item-names-child" />
        <div className="inner-grid-item-names">
          <img
            className="kolhapuri-chappal-1"
            loading="lazy"
            alt=""
            src="/kolhapuri-chappal-1@2x.png"
          />
        </div>
        <div className="assam-silk-chadar-name">
          <div className="kohlapuri-chappal">Kohlapuri Chappal</div>
          <div className="rs678-on-sale-wrapper">
            <div className="rs678-on-sale">Rs.678 (on sale)</div>
          </div>
        </div>
        <button className="add-cart-buttons">
          <div className="add-cart-buttons-child" />
          <div className="add-to-cart2">Add to cart</div>
        </button>
      </div>
      <div className="product-grid-items-inner">
        <div className="rectangle-parent24">
          <div className="grid-item-names-child" />
          <div className="kangan-content">
            <img
              className="kangan-1-icon"
              loading="lazy"
              alt=""
              src="/kangan-1@2x.png"
            />
          </div>
          <FrameComponent5 copperKada="Copper Kada" rs589="Rs.589 " />
        </div>
      </div>
      <div className="grid-item-names1">
        <div className="grid-item-names-child" />
        <div className="assam-silk-chadar-1-wrapper">
          <img
            className="assam-silk-chadar-1"
            loading="lazy"
            alt=""
            src="/assam-silk-chadar-1@2x.png"
          />
        </div>
        <div className="assam-silk-chadar-wrapper">
          <div className="assam-silk-chadar">Assam silk chadar</div>
        </div>
        <div className="frame-parent63">
          <div className="rs472-on-sale-wrapper">
            <div className="rs472-on-sale">Rs.472 (on sale)</div>
          </div>
          <button className="add-cart-buttons">
            <div className="add-cart-buttons-child" />
            <div className="add-to-cart2">Add to cart</div>
          </button>
        </div>
      </div>
    </div>
  );
};

ProductGridItems.propTypes = {
  className: PropTypes.string,
};

export default ProductGridItems;
