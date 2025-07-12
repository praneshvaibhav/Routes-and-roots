import PropTypes from "prop-types";
import "./ReviewContent.css";

const ReviewContent = ({ className = "", destinationDivider }) => {
  return (
    <div className={`review-content ${className}`}>
      <div className="review-paragraph-parent">
        <div className="review-paragraph">
          <div className="review-details">
            <div className="taj-mahal2">TAJ MAHAL</div>
            <div className="agra-uttar-pradesh">Agra ,Uttar Pradesh</div>
          </div>
        </div>
        <div className="review-rating">
          <div className="ratings-46502">Ratings : 4.6/5.0</div>
        </div>
        <div className="review-description">
          <div className="the-taj-mahal">
            The Taj Mahal, a UNESCO World Heritage site, is a symbol of eternal
            love and one of the most stunning architectural marvels in the
            world. Nestled on the banks of the Yamuna River in Agra, India, this
            iconic white marble mausoleum was built by Emperor Shah Jahan in
            memory of his beloved wife, Mumtaz Mahal. The intricate inlay work
            of semi-precious stones, the symmetry of its gardens, and the
            mesmerizing play of light on its surface at sunrise and sunset make
            it a sight to behold. A visit to the Taj Mahal is a journey into the
            heart of India’s rich history and cultural heritage.
          </div>
        </div>
        <div className="other-destinations">
          <div className="other-places-to">{`Other places to visit in Agra `}</div>
          <div className="other-destinations-list">
            <div className="review-details">
              <img
                className="destination-divider-icon"
                loading="lazy"
                alt=""
                src={destinationDivider}
              />
              <div className="other-destination-details">
                <div className="other-destination-name">
                  <div className="mankameshwar-temple">Mankameshwar Temple</div>
                  <div className="other-destination-link">
                    <div className="other-destination-link-inner">
                      <div className="frame-parent52">
                        <div className="curved-arrow-parent">
                          <img
                            className="curved-arrow-icon"
                            loading="lazy"
                            alt=""
                            src="/curved-arrow@2x.png"
                          />
                          <img
                            className="curved-arrow-icon1"
                            loading="lazy"
                            alt=""
                            src="/curved-arrow@2x.png"
                          />
                        </div>
                        <img
                          className="curved-arrow-icon1"
                          loading="lazy"
                          alt=""
                          src="/curved-arrow@2x.png"
                        />
                        <div className="curved-arrow-group">
                          <img
                            className="curved-arrow-icon1"
                            loading="lazy"
                            alt=""
                            src="/curved-arrow@2x.png"
                          />
                          <img
                            className="curved-arrow-icon1"
                            loading="lazy"
                            alt=""
                            src="/curved-arrow@2x.png"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="frame-parent53">
                      <div className="agra-fort-parent">
                        <div className="agra-fort">Agra Fort</div>
                        <div className="mehtab-bagh">Mehtab Bagh</div>
                      </div>
                      <div className="fatehpur-sikri">Fatehpur Sikri</div>
                      <div className="mehtab-bagh">Chini ka Rauza</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ReviewContent.propTypes = {
  className: PropTypes.string,
  destinationDivider: PropTypes.string,
};

export default ReviewContent;
