import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./FrameComponent17.css";

const FrameComponent17 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onProductBackgroundClick = useCallback(() => {
    navigate("/desktop-shop-2");
  }, [navigate]);

  return (
    <div className={`frame-parent61 ${className}`}>
      <div className="product-background-parent">
        <div
          className="product-background"
          onClick={onProductBackgroundClick}
        />
        <div className="product-content">
          <div className="product-details1">
            <div className="product-info1">
              <div className="product-description">
                <h3 className="kashmiri-oudh1">Kashmiri Oudh</h3>
                <div className="this-attar-is-a-non-alcoholic-wrapper">
                  <b className="this-attar-is1">
                    This attar is a non-alcoholic perfume.
                  </b>
                </div>
              </div>
              <div className="rs-245-only-wrapper">
                <b className="this-attar-is1">Rs. 245 only/-</b>
              </div>
            </div>
            <div className="visit-button-content-wrapper">
              <div className="visit-button-content">
                <b className="visit-now12">Visit now</b>
                <img
                  className="forward-icon14"
                  loading="lazy"
                  alt=""
                  src="/forward2@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
        <img
          className="rpse-1-icon1"
          loading="lazy"
          alt=""
          src="/rpse-1@2x.png"
        />
      </div>
      <div className="frame-wrapper22">
        <div className="kashmiri-perfume-1-group">
          <img
            className="kashmiri-perfume-11"
            alt=""
            src="/kashmiri-perfume-1@2x.png"
          />
          <div className="discount-content">
            <div className="discount-background" />
            <img
              className="discount-1-icon1"
              loading="lazy"
              alt=""
              src="/discount-1@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent17.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent17;
