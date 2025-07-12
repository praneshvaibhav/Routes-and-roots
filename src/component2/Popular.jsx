import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./Popular.css";

const Popular = ({ className = "" }) => {
  const navigate = useNavigate();

  const onVisitNowTextClick = useCallback(() => {
    navigate("/desktop-tajmahal");
  }, [navigate]);

  return (
    <section className={`popular ${className}`}>
      <div className="placesgrid">
        <div className="populartitle">
          <h1 className="m-o-s2">M O S T</h1>
          <h1 className="p-o-p2">P O P U L A R</h1>
        </div>
        <div className="placesheading">
          <h1 className="p-l-a3">P L A C E S</h1>
          <div className="landmark-wrapper">
            <div className="landmark4">
              <div className="tajmahalcontainer">
                <div className="tajmahalcard">
                  <div className="tajmahalinfo">
                    <div className="tajmahalinfo-child" />
                    <img
                      className="taj-mahal-12"
                      loading="lazy"
                      alt=""
                      src="/taj-mahal-1@2x.png"
                    />
                    <div className="tajmahaldetails">
                      <div className="location5">
                        <div className="city1">
                          <div className="taj-mahal4">TAJ MAHAL</div>
                        </div>
                        <div className="address2">
                          <div className="agra-uttar3">
                            Agra , Uttar Pradesh
                          </div>
                          <div className="ratingrow">
                            <div className="ratings-47503">
                              Ratings : 4.7/5.0
                            </div>
                          </div>
                        </div>
                        <div className="ctacontainer-wrapper">
                          <div className="ctacontainer">
                            <div
                              className="visit-now26"
                              onClick={onVisitNowTextClick}
                            >{`Visit now `}</div>
                            <img
                              className="forward-icon26"
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
                <div className="humayuns-tombcontainer">
                  <div className="humayunstombcard">
                    <div className="humayuns-tomb3">HUMAYUN'S TOMB</div>
                    <div className="humayunstombdetails">
                      <div className="humayunstomblocation">
                        <div className="humayunstombcity">
                          <div className="delhi4">DELHI</div>
                        </div>
                        <div className="ratings-42503">Ratings : 4.2/5.0</div>
                      </div>
                    </div>
                  </div>
                  <div className="tombvisit">
                    <div className="visit-now27">{`Visit now `}</div>
                  </div>
                  <div className="humayunstombcta">
                    <div className="tombplaceholder" />
                    <img
                      className="humayuns-tomb-12"
                      loading="lazy"
                      alt=""
                      src="/humayuns-tomb-1@2x.png"
                    />
                    <img
                      className="forward-icon27"
                      loading="lazy"
                      alt=""
                      src="/forward1@2x.png"
                    />
                  </div>
                </div>
              </div>
              <div className="victoria-memorialcontainer">
                <div className="victoriamemorialcard">
                  <div className="tajmahalinfo-child" />
                  <img
                    className="victoria-memorial-13"
                    loading="lazy"
                    alt=""
                    src="/victoria-memorial-1@2x.png"
                  />
                  <div className="memorial-details">
                    <div className="memorial-info">
                      <div className="victoria-memorial4">
                        VICTORIA MEMORIAL
                      </div>
                      <div className="location6">
                        <div className="delhi4">Kolkata , West Bengal</div>
                      </div>
                      <div className="rating4">
                        <div className="ratings-40504">Ratings : 4.0/5.0</div>
                      </div>
                    </div>
                    <div className="button6">
                      <div className="action3">
                        <div className="taj-mahal4">{`Visit now `}</div>
                        <img
                          className="forward-icon28"
                          loading="lazy"
                          alt=""
                          src="/forward1@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="temple-details">
                  <div className="humayunstombcard">
                    <div className="meenakshi-temple5">MEENAKSHI TEMPLE</div>
                    <div className="location7">
                      <div className="city2">
                        <div className="agra-uttar3">Madurai , Tamil Nadu</div>
                        <div className="rating5">
                          <div className="ratings-47503">Ratings : 4.6/5.0</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="button7">
                    <div className="visit-now27">{`Visit now `}</div>
                  </div>
                  <div className="humayunstombcta">
                    <div className="tombplaceholder" />
                    <img
                      className="minakshi-temple-13"
                      loading="lazy"
                      alt=""
                      src="/minakshi-temple-1@2x.png"
                    />
                    <img
                      className="forward-icon29"
                      loading="lazy"
                      alt=""
                      src="/forward1@2x.png"
                    />
                  </div>
                </div>
              </div>
              <div className="palace-details1">
                <div className="palace-info1">
                  <div className="tajmahalinfo-child" />
                  <img
                    className="victoria-memorial-13"
                    loading="lazy"
                    alt=""
                    src="/mysore-palace-1@2x.png"
                  />
                  <div className="description1">
                    <div className="name-parent">
                      <div className="name2">
                        <div className="palace-title">
                          <div className="mysore-palace4">MYSORE PALACE</div>
                          <div className="location8">
                            <div className="mysore-karnataka4">
                              Mysore , Karnataka
                            </div>
                          </div>
                        </div>
                        <div className="rating6">
                          <div className="ratings-47503">Ratings : 4.4/5.0</div>
                        </div>
                      </div>
                      <div className="button8">
                        <div className="action4">
                          <div className="taj-mahal4">{`Visit now `}</div>
                          <img
                            className="forward-icon30"
                            loading="lazy"
                            alt=""
                            src="/forward1@2x.png"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="temple-details1">
                  <div className="temple-info1">
                    <div className="konark-sun-temple4">KONARK SUN TEMPLE</div>
                    <div className="location9">
                      <div className="delhi4">Puri , Odisha</div>
                    </div>
                    <div className="rating7">
                      <div className="ratings-40504">Ratings : 4.4/5.0</div>
                    </div>
                  </div>
                  <div className="button9">
                    <div className="visit-now27">{`Visit now `}</div>
                  </div>
                  <div className="humayunstombcta">
                    <div className="tombplaceholder" />
                    <img
                      className="konark-sun-temple-13e71cbb6e-1-icon3"
                      loading="lazy"
                      alt=""
                      src="/konark-sun-temple-13e71cbb6e-1@2x.png"
                    />
                    <img
                      className="forward-icon31"
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
      </div>
    </section>
  );
};

Popular.propTypes = {
  className: PropTypes.string,
};

export default Popular;
