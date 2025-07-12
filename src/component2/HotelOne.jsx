import { useMemo } from "react";
import PropTypes from "prop-types";
import "./HotelOne.css";

const HotelOne = ({ className = "", hotelTaj1, propMinWidth }) => {
  const ratingCountStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={`hotel-one ${className}`}>
      <div className="hotel-one-details">
        <div className="hotels-available-">Hotels Available -</div>
        <div className="hotel-one-info">
          <div className="hotel-one-info-child" />
          <div className="hotel-one-image-container">
            <img
              className="hotel-taj-1"
              loading="lazy"
              alt=""
              src={hotelTaj1}
            />
            <div className="hotel-one-title-wrapper">
              <div className="hotel-one-title">
                <div className="hotel-taj-resort">Hotel Taj Resort</div>
                <div className="rs3359">Rs.3,359</div>
                <div className="hotel-one-price">
                  <div className="hotel-one-price1">{`4.3 `}</div>
                  <div className="rating-count" style={ratingCountStyle}>
                    <div className="star-rating">
                      <div className="stars">
                        <img className="star-icon" alt="" src="/star@2x.png" />
                        <img className="star-icon1" alt="" src="/star@2x.png" />
                        <div className="half-star-container">
                          <img
                            className="star-icon2"
                            alt=""
                            src="/star@2x.png"
                          />
                        </div>
                        <img
                          className="star-half-empty"
                          alt=""
                          src="/star-half-empty@2x.png"
                        />
                      </div>
                      <div className="k">(32k)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hotel-deal">
            <div className="deal-button">
              <div className="deal-background" />
              <div className="view-deal">{`View deal >`}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

HotelOne.propTypes = {
  className: PropTypes.string,
  hotelTaj1: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
};

export default HotelOne;
