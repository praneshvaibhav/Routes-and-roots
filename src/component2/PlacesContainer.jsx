import PropTypes from "prop-types";
import "./PlacesContainer.css";

const PlacesContainer = ({ className = "" }) => {
  return (
    <section className={`places-container ${className}`}>
      <div className="p-l-a-c-e-s-parent">
        <h1 className="p-l-a">P L A C E S</h1>
        <div className="places">
          <div className="frame-parent30">
            <div className="frame-parent31">
              <div className="frame-wrapper14">
                <div className="rectangle-parent10">
                  <div className="frame-child17" />
                  <img
                    className="taj-mahal-1"
                    loading="lazy"
                    alt=""
                    src="/taj-mahal-1@2x.png"
                  />
                  <div className="taj-mahal-info">
                    <div className="taj-mahal-title-parent">
                      <div className="taj-mahal-title">
                        <div className="taj-mahal1">TAJ MAHAL</div>
                      </div>
                      <div className="taj-mahal-description">
                        <div className="agra-uttar1">Agra , Uttar Pradesh</div>
                        <div className="taj-mahal-rating">
                          <div className="ratings-47501">Ratings : 4.7/5.0</div>
                        </div>
                      </div>
                      <div className="visit-button">
                        <div className="visit">
                          <div className="taj-mahal1">{`Visit now `}</div>
                          <img
                            className="forward-icon8"
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
              <div className="frame-parent32">
                <div className="humayuns-tomb-group">
                  <div className="humayuns-tomb1">HUMAYUN'S TOMB</div>
                  <div className="humayun-tomb-details">
                    <div className="humayun-tomb-info">
                      <div className="humayun-tomb-location">
                        <div className="delhi1">DELHI</div>
                      </div>
                      <div className="ratings-42501">Ratings : 4.2/5.0</div>
                    </div>
                  </div>
                </div>
                <div className="humayun-tomb-visit">
                  <div className="visit-now7">{`Visit now `}</div>
                </div>
                <div className="humayun-tomb-image">
                  <div className="humayun-tomb-placeholder" />
                  <img
                    className="humayuns-tomb-1"
                    loading="lazy"
                    alt=""
                    src="/humayuns-tomb-1@2x.png"
                  />
                  <img
                    className="forward-icon9"
                    loading="lazy"
                    alt=""
                    src="/forward1@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className="frame-parent33">
              <div className="rectangle-parent11">
                <div className="frame-child17" />
                <img
                  className="victoria-memorial-1"
                  loading="lazy"
                  alt=""
                  src="/victoria-memorial-1@2x.png"
                />
                <div className="victoria-memorial-info">
                  <div className="victoria-memorial-parent">
                    <div className="victoria-memorial1">VICTORIA MEMORIAL</div>
                    <div className="victoria-memorial-description">
                      <div className="delhi1">Kolkata , West Bengal</div>
                    </div>
                    <div className="victoria-memorial-rating">
                      <div className="ratings-40501">Ratings : 4.0/5.0</div>
                    </div>
                  </div>
                  <div className="victoria-memorial-visit">
                    <div className="victoria-memorial-button">
                      <div className="taj-mahal1">{`Visit now `}</div>
                      <img
                        className="forward-icon10"
                        loading="lazy"
                        alt=""
                        src="/forward1@2x.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame-parent34">
                <div className="humayuns-tomb-group">
                  <div className="meenakshi-temple2">MEENAKSHI TEMPLE</div>
                  <div className="meenakshi-temple-details">
                    <div className="meenakshi-temple-info">
                      <div className="agra-uttar1">Madurai , Tamil Nadu</div>
                      <div className="meenakshi-temple-rating">
                        <div className="ratings-47501">Ratings : 4.6/5.0</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="meenakshi-temple-visit">
                  <div className="visit-now7">{`Visit now `}</div>
                </div>
                <div className="humayun-tomb-image">
                  <div className="humayun-tomb-placeholder" />
                  <img
                    className="minakshi-temple-1"
                    loading="lazy"
                    alt=""
                    src="/minakshi-temple-1@2x.png"
                  />
                  <img
                    className="forward-icon11"
                    loading="lazy"
                    alt=""
                    src="/forward1@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className="frame-parent35">
              <div className="rectangle-parent12">
                <div className="frame-child17" />
                <img
                  className="victoria-memorial-1"
                  loading="lazy"
                  alt=""
                  src="/mysore-palace-1@2x.png"
                />
                <div className="mysore-palace-info">
                  <div className="frame-parent36">
                    <div className="mysore-palace-title-parent">
                      <div className="mysore-palace-title">
                        <div className="mysore-palace1">MYSORE PALACE</div>
                        <div className="mysore-palace-address">
                          <div className="mysore-karnataka1">
                            Mysore , Karnataka
                          </div>
                        </div>
                      </div>
                      <div className="mysore-palace-rating">
                        <div className="ratings-47501">Ratings : 4.4/5.0</div>
                      </div>
                    </div>
                    <div className="mysore-palace-visit">
                      <div className="mysore-palace-button">
                        <div className="taj-mahal1">{`Visit now `}</div>
                        <img
                          className="forward-icon12"
                          loading="lazy"
                          alt=""
                          src="/forward1@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame-parent37">
                <div className="konark-sun-temple-parent">
                  <div className="konark-sun-temple1">KONARK SUN TEMPLE</div>
                  <div className="konark-sun-temple-details">
                    <div className="delhi1">Puri , Odisha</div>
                  </div>
                  <div className="konark-sun-temple-rating">
                    <div className="ratings-40501">Ratings : 4.4/5.0</div>
                  </div>
                </div>
                <div className="konark-sun-temple-visit">
                  <div className="visit-now7">{`Visit now `}</div>
                </div>
                <div className="humayun-tomb-image">
                  <div className="humayun-tomb-placeholder" />
                  <img
                    className="konark-sun-temple-13e71cbb6e-1-icon"
                    loading="lazy"
                    alt=""
                    src="/konark-sun-temple-13e71cbb6e-1@2x.png"
                  />
                  <img
                    className="forward-icon13"
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

PlacesContainer.propTypes = {
  className: PropTypes.string,
};

export default PlacesContainer;
