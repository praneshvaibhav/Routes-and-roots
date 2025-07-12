import { useMemo } from "react";
import PropTypes from "prop-types";
import "./HotelListing.css";

const HotelListing = ({ className = "", hotel31, propRowGap }) => {
  const starContainerStyle = useMemo(() => {
    return {
      rowGap: propRowGap,
    };
  }, [propRowGap]);

  return (
    <div className={`hotel-listing ${className}`}>
      <div className="hotel-card-container">
        <div className="hotel-card-container-child" />
        <div className="hotel-card-info">
          <img className="hotel-3-1" loading="lazy" alt="" src={hotel31} />
          <div className="card-content">
            <div className="card-details">
              <div className="hotel-rainbow1">Hotel Rainbow</div>
              <div className="pricing">
                <div className="rs25781">Rs.2,578</div>
                <div className="cost-breakdown">
                  <div className="star-container" style={starContainerStyle}>
                    <div className="star-container">
                      <div className="price-placeholder">{`3.8 `}</div>
                      <div className="rating-stars">
                        <img className="star-icon7" alt="" src="/star@2x.png" />
                      </div>
                      <div className="rating-stars">
                        <img className="star-icon8" alt="" src="/star@2x.png" />
                      </div>
                      <div className="rating-stars">
                        <img
                          className="star-icon9"
                          loading="lazy"
                          alt=""
                          src="/star@2x.png"
                        />
                      </div>
                    </div>
                    <div className="partial-star-container">
                      <img
                        className="star-half-empty1"
                        loading="lazy"
                        alt=""
                        src="/star-half-empty@2x.png"
                      />
                    </div>
                    <div className="k-value">
                      <div className="k2">(27k)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="view-deal-container-wrapper">
          <div className="view-deal-container">
            <div className="button-background" />
            <div className="view-deal2">{`View deal >`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

HotelListing.propTypes = {
  className: PropTypes.string,
  hotel31: PropTypes.string,

  /** Style props */
  propRowGap: PropTypes.any,
};

export default HotelListing;
