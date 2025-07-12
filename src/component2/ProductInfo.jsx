import PropTypes from "prop-types";
import "./ProductInfo.css";

const ProductInfo = ({ className = "" }) => {
  return (
    <div className={`product-info ${className}`}>
      <div className="discount-parent">
        <div className="discount">
          <img
            className="rpse-1-icon"
            loading="lazy"
            alt=""
            src="/rpse-1@2x.png"
          />
          <div className="kashmiri-perfume-1-parent">
            <img
              className="kashmiri-perfume-1"
              alt=""
              src="/kashmiri-perfume-1@2x.png"
            />
            <img
              className="discount-1-icon"
              loading="lazy"
              alt=""
              src="/discount-1@2x.png"
            />
          </div>
        </div>
        <div className="buttons">
          <div className="button-container">
            <div className="price-info">
              <b className="rs-245-only-">Rs. 245 only/-</b>
            </div>
            <div className="call-to-action">
              <button className="buy-add">
                <div className="buy-add-child" />
                <b className="buy-now">Buy Now</b>
              </button>
              <button className="buy-add1">
                <div className="buy-add-child" />
                <b className="add-to-cart">Add to cart</b>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="product-description-long">
        <b className="what-is-kashmiri-container">
          <p className="what-is-kashmiri">What is kashmiri oudh?</p>
          <p className="what-is-kashmiri">
            Al Nuaim Kashmiri oudh Floral Attar (Spicy) This attar is
            a non-alcoholic perfume made from perfume oil, essential oil,
            aromatic ingredients and it comes in liquid form. This product comes
            in an attractive bottle and measures 8 milliliters in volume. The
            package contains 1 attar bottle and 1 roll on cap
          </p>
          <p className="what-is-kashmiri"> </p>
          <p className="what-is-kashmiri">Which is the best oud Attar?</p>
          <p className="what-is-kashmiri">
            Best list of Top 7 Arabian Oud and its rates:-
          </p>
          <ul className="lailat-elomer-rasasi-attar-al">
            <li className="lailat-elomer">Lailat Elomer </li>
            <li className="lailat-elomer">Rasasi Attar al Oudh </li>
            <li className="lailat-elomer">Royal Oud 100 ml Spray Perfumes  </li>
            <li className="lailat-elomer">
              Afnan Dehn Al Oudh Abiyad (White oudh)
            </li>
            <li className="lailat-elomer">Ajmal Mizyaan </li>
            <li>Mukhallat Al Oudh </li>
          </ul>
        </b>
      </div>
      <div className="product-features">
        <div className="feature-title">
          <div className="feature-title-inner">
            <img className="frame-child13" loading="lazy" alt="" />
          </div>
          <b className="about-product">About Product</b>
          <div className="feature-details">
            <img className="feature-details-child" loading="lazy" alt="" />
          </div>
        </div>
        <div className="type-concentrated-oil-perfume-wrapper">
          <div className="type-concentrated-oil-perfume-container">
            <p className="what-is-kashmiri">Type: Concentrated Oil Perfume</p>
            <p className="what-is-kashmiri">Quantity: 10ml</p>
            <p className="what-is-kashmiri">
              Natural: Alcohol Free, 100% Natural Attar
            </p>
            <p className="what-is-kashmiri">
              Pros: Long-Lasting and Best-selling Attar
            </p>
            <p className="what-is-kashmiri">Ideal for: Men and women both</p>
            <p className="what-is-kashmiri">
              Ingredients:  Jasmine, lotus, cinnamon, gardenia, grass, woody
              notes, masala chai, herbal notes and rose.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductInfo.propTypes = {
  className: PropTypes.string,
};

export default ProductInfo;
