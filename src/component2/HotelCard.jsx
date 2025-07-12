import { useMemo } from "react";
import PropTypes from "prop-types";
import "./HotelCard.css";

const HotelCard = ({ className = "", hotelRianbow1, propMinWidth }) => {
  const priceKStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={`hotel-card ${className}`}>
      <div className="hotel-info">
        <div className="hotel-info-child" />
        <div className="hotel-image">
          <img
            className="hotel-rianbow-1"
            loading="lazy"
            alt=""
            src={hotelRianbow1}
          />
          <div className="hotel-details">
            <div className="hotel-rainbow">Hotel Rainbow</div>
            <div className="price-info1">
              <div className="price1">
                <div className="rs2578">Rs.2,578</div>
                <div className="price-details">
                  <div className="price-separator">{`4.0 `}</div>
                  <div className="single-star">
                    <img
                      className="star-icon3"
                      loading="lazy"
                      alt=""
                      src="/star@2x.png"
                    />
                  </div>
                  <div className="three-stars-wrapper">
                    <div className="three-stars">
                      <img className="star-icon4" alt="" src="/star@2x.png" />
                      <img className="star-icon5" alt="" src="/star@2x.png" />
                      <img
                        className="star-icon6"
                        loading="lazy"
                        alt=""
                        src="/star@2x.png"
                      />
                    </div>
                  </div>
                  <div className="three-stars-wrapper" style={priceKStyle}>
                    <div className="k1">(45k)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="deal-link">
          <div className="deal-button-container">
            <div className="deal-button-background" />
            <div className="view-deal1">{`View deal >`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

HotelCard.propTypes = {
  className: PropTypes.string,
  hotelRianbow1: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
};

export default HotelCard;
