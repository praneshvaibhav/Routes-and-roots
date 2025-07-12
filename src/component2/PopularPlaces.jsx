import TajMahalContent from "./TajMahalContent";
import PropTypes from "prop-types";
import "./PopularPlaces.css";

const PopularPlaces = ({ className = "" }) => {
  return (
    <section className={`popular-places1 ${className}`}>
      <div className="places-header-parent">
        <div className="places-header">
          <div className="popular-title1">
            <div className="popular-label">
              <h1 className="o-u-r3">O U R</h1>
              <h1 className="m-o-s3">M O S T</h1>
            </div>
            <div className="jaipur-content-wrapper">
              <div className="jaipur-content">
                <img
                  className="jaipur-template-14"
                  alt=""
                  src="/jaipur-template-11@2x.png"
                />
                <h1 className="p-o-p3">P O P U L A R</h1>
              </div>
            </div>
          </div>
          <div className="place-list">
            <h1 className="p-l-a4">P L A C E S</h1>
          </div>
        </div>
        <div className="place-items">
          <div className="taj-mahal-item">
            <TajMahalContent
              tAJMAHAL1="/taj-mahal-1@2x.png"
              humayunsTomb1="/humayuns-tomb-1@2x.png"
            />
            <div className="victoria-memorial-name-parent">
              <div className="victoria-memorial-name">
                <div className="victoria-memorial-name-child" />
                <img
                  className="victoria-memorial-14"
                  loading="lazy"
                  alt=""
                  src="/victoria-memorial-1@2x.png"
                />
                <div className="victoria-memorial-details">
                  <div className="victoria-memorial-details1">
                    <div className="victoria-memorial5">VICTORIA MEMORIAL</div>
                    <div className="kolkata-west-bengal-wrapper">
                      <div className="kolkata-west5">Kolkata , West Bengal</div>
                    </div>
                    <div className="rating9">
                      <div className="ratings-40505">Ratings : 4.0/5.0</div>
                    </div>
                  </div>
                  <div className="visit-button7">
                    <div className="visit-button8">
                      <div className="visit-now34">{`Visit now `}</div>
                      <img
                        className="forward-icon34"
                        loading="lazy"
                        alt=""
                        src="/forward1@2x.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="victoria-memorial-name1">
                <div className="victoria-memorial-name-child" />
                <img
                  className="minakshi-temple-14"
                  loading="lazy"
                  alt=""
                  src="/minakshi-temple-1@2x.png"
                />
                <div className="victoria-memorial-name-inner">
                  <div className="frame-parent100">
                    <div className="madurai-tamil-nadu-parent">
                      <div className="madurai-tamil5">Madurai , Tamil Nadu</div>
                      <div className="victoria-memorial-rating1">
                        <div className="ratings-46506">Ratings : 4.6/5.0</div>
                      </div>
                    </div>
                    <div className="frame-wrapper32">
                      <div className="visit-now-group">
                        <div className="visit-now34">{`Visit now `}</div>
                        <img
                          className="forward-icon35"
                          loading="lazy"
                          alt=""
                          src="/forward1@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-parent101">
              <div className="rectangle-parent46">
                <div className="victoria-memorial-name-child" />
                <img
                  className="victoria-memorial-14"
                  loading="lazy"
                  alt=""
                  src="/mysore-palace-1@2x.png"
                />
                <div className="mysore-palace-details">
                  <div className="mysore-palace-details1">
                    <div className="mysore-palace-details2">
                      <div className="mysore-palace-details3">
                        <div className="mysore-palace5">MYSORE PALACE</div>
                        <div className="mysore-location1">
                          <div className="mysore-karnataka5">
                            Mysore , Karnataka
                          </div>
                        </div>
                      </div>
                      <div className="rating10">
                        <div className="ratings-46506">Ratings : 4.4/5.0</div>
                      </div>
                    </div>
                    <div className="visit-button9">
                      <div className="visit-now-group">
                        <div className="visit-now34">{`Visit now `}</div>
                        <img
                          className="forward-icon36"
                          loading="lazy"
                          alt=""
                          src="/forward1@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame-parent102">
                <div className="konark-sun-temple-container">
                  <div className="konark-sun-temple5">KONARK SUN TEMPLE</div>
                  <div className="puri-location">
                    <div className="kolkata-west5">Puri , Odisha</div>
                  </div>
                  <div className="rating11">
                    <div className="ratings-40505">Ratings : 4.4/5.0</div>
                  </div>
                </div>
                <div className="visit-button11">
                  <div className="visit-now37">{`Visit now `}</div>
                </div>
                <div className="konark-sun-temple-image1">
                  <div className="image-placeholder2" />
                  <img
                    className="konark-sun-temple-13e71cbb6e-1-icon4"
                    loading="lazy"
                    alt=""
                    src="/konark-sun-temple-13e71cbb6e-1@2x.png"
                  />
                  <img
                    className="forward-icon37"
                    loading="lazy"
                    alt=""
                    src="/forward1@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

PopularPlaces.propTypes = {
  className: PropTypes.string,
};

export default PopularPlaces;
