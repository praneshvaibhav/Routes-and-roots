import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./FrameComponent4.css";

const FrameComponent4 = ({
  className = "",
  account,
  line12,
  mysorePalace2,
  konarkSunTempleecbbe,
  avatar,
  uttarPradeshMap1,
  line11,
  victoriaMemorial2,
  minakshiTemple2,
  avatarTwo,
  tAJMAHAL2,
  humayunsTomb2,
}) => {
  const navigate = useNavigate();

  const onVisitNowTextClick = useCallback(() => {
    navigate("/desktop-tajmahal");
  }, [navigate]);

  return (
    <div className={`user-container-parent ${className}`}>
      <div className="user-container1">
        <div className="auth-container-parent">
          <div className="auth-container">
            <div className="profile-icon-parent">
              <div className="profile-icon" />
              <img
                className="account-icon2"
                loading="lazy"
                alt=""
                src={account}
              />
            </div>
          </div>
          <div className="rectangle-parent50">
            <div className="review-container-child" />
            <div className="sign-in-link">
              <div className="sign-in-button-container1">
                <div className="sign-in17">Sign In</div>
              </div>
              <img className="sign-in-link-child" alt="" src={line12} />
            </div>
            <div className="add-review">
              <div className="add-yours2">+ Add yours</div>
            </div>
          </div>
        </div>
        <div className="featured-container-wrapper">
          <div className="featured-container">
            <div className="attraction">
              <div className="attraction-child" />
              <img
                className="mysore-palace-21"
                loading="lazy"
                alt=""
                src={mysorePalace2}
              />
              <div className="attraction-info">
                <div className="info-container">
                  <div className="frame-parent108">
                    <div className="mysore-palace-group">
                      <div className="mysore-palace6">MYSORE PALACE</div>
                      <div className="mysore-karnataka-wrapper">
                        <div className="mysore-karnataka6">
                          Mysore , Karnataka
                        </div>
                      </div>
                    </div>
                    <div className="palace-rating">
                      <div className="ratings-445012">Ratings : 4.4/5.0</div>
                    </div>
                  </div>
                  <div className="palace-visit">
                    <div className="button10">
                      <div className="visit-now38">{`Visit now `}</div>
                      <img
                        className="forward-icon38"
                        alt=""
                        src="/forward1@2x.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="temple-card">
              <div className="temple-info2">
                <div className="konark-sun-temple6">KONARK SUN TEMPLE</div>
                <div className="temple-location">
                  <div className="puri-odisha6">Puri , Odisha</div>
                </div>
                <div className="sun-temple-rating">
                  <div className="ratings-445013">Ratings : 4.4/5.0</div>
                </div>
              </div>
              <div className="temple-visit">
                <div className="visit-now39">{`Visit now `}</div>
              </div>
              <div className="temple-image">
                <div className="temple-background" />
                <img
                  className="konark-sun-temple-13e71cbb6e-2-icon1"
                  loading="lazy"
                  alt=""
                  src={konarkSunTempleecbbe}
                />
                <img className="forward-icon39" alt="" src="/forward1@2x.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="user-review-card">
        <div className="user-avatar">
          <img className="avatar-icon1" loading="lazy" alt="" src={avatar} />
          <div className="review-image">
            <img
              className="uttar-pradesh-map-1-icon1"
              loading="lazy"
              alt=""
              src={uttarPradeshMap1}
            />
          </div>
        </div>
        <div className="review-content-parent">
          <div className="review-content2">
            <div className="review-container2">
              <div className="review-container-child" />
              <div className="review-padding">
                <div className="review-details1">
                  <div className="reviewer-name1">
                    <div className="visit-now38">Dianne Russell</div>
                  </div>
                  <img
                    className="sign-in-link-child"
                    loading="lazy"
                    alt=""
                    src={line11}
                  />
                </div>
              </div>
              <div className="i-visited-fort1">{`I visited Fort through Roots and Routes. The culture and the hindu tradition just blew my mind. #Wonderful_experience `}</div>
            </div>
          </div>
          <div className="memorial-card">
            <div className="memorial-info1">
              <div className="attraction-child" />
              <img
                className="mysore-palace-21"
                loading="lazy"
                alt=""
                src={victoriaMemorial2}
              />
              <div className="memorial-details1">
                <div className="details-container">
                  <div className="victoria-memorial6">VICTORIA MEMORIAL</div>
                  <div className="memorial-location">
                    <div className="puri-odisha6">Kolkata , West Bengal</div>
                  </div>
                  <div className="memorial-rating">
                    <div className="ratings-445013">Ratings : 4.0/5.0</div>
                  </div>
                </div>
                <div className="memorial-visit">
                  <div className="visit-container">
                    <div className="visit-now38">{`Visit now `}</div>
                    <img
                      className="forward-icon40"
                      loading="lazy"
                      alt=""
                      src="/forward1@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="temple-two-card">
              <div className="temple-two-info">
                <div className="i-visited-fort1">MEENAKSHI TEMPLE</div>
                <div className="temple-two-location">
                  <div className="location-container">
                    <div className="madurai-tamil6">Madurai , Tamil Nadu</div>
                    <div className="two-rating-container">
                      <div className="ratings-445012">Ratings : 4.6/5.0</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="two-temple-visit">
                <div className="visit-now39">{`Visit now `}</div>
              </div>
              <div className="temple-image">
                <div className="temple-background" />
                <img
                  className="minakshi-temple-21"
                  loading="lazy"
                  alt=""
                  src={minakshiTemple2}
                />
                <img
                  className="forward-icon41"
                  loading="lazy"
                  alt=""
                  src="/forward1@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="review-two-card">
        <div className="review-two-avatar">
          <img
            className="avatar-two-icon"
            loading="lazy"
            alt=""
            src={avatarTwo}
          />
          <div className="review-two-content">
            <div className="review-container-child" />
            <div className="review-two-details">
              <div className="cameron-williamson2">Cameron Williamson</div>
              <div className="review-two-details-inner">
                <div className="frame-child94" />
              </div>
            </div>
            <div className="visiting-taj-mahal-was-one-the-container">
              <div className="visiting-taj-mahal-container2">
                <p className="visiting-taj-mahal2">{` Visiting Taj mahal `}</p>
                <p className="visiting-taj-mahal2">
                  was one the best experience. Got to know about many much
                  historic thinghs
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="tajmahal-card">
          <div className="featured-container">
            <div className="image-container5">
              <div className="inner-image">
                <div className="attraction-child" />
                <img
                  className="taj-mahal-25"
                  loading="lazy"
                  alt=""
                  src={tAJMAHAL2}
                />
                <div className="tajmahal-details">
                  <div className="details6">
                    <div className="info-container1">
                      <div className="title-container">
                        <div className="visit-now38">TAJ MAHAL</div>
                      </div>
                      <div className="tajmahal-location">
                        <div className="madurai-tamil6">
                          Agra , Uttar Pradesh
                        </div>
                        <div className="taj-rating1">
                          <div className="ratings-445012">
                            Ratings : 4.7/5.0
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="visit-taj">
                      <div className="visit-button-container">
                        <div
                          className="visit-now42"
                          onClick={onVisitNowTextClick}
                        >{`Visit now `}</div>
                        <img
                          className="forward-icon42"
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
            <div className="tomb-card">
              <div className="temple-two-info">
                <div className="humayuns-tomb5">HUMAYUN'S TOMB</div>
                <div className="tomb-location1">
                  <div className="location-details1">
                    <div className="city3">
                      <div className="puri-odisha6">DELHI</div>
                    </div>
                    <div className="ratings-42505">Ratings : 4.2/5.0</div>
                  </div>
                </div>
              </div>
              <div className="tomb-visit">
                <div className="visit-now39">{`Visit now `}</div>
              </div>
              <div className="temple-image">
                <div className="temple-background" />
                <img
                  className="humayuns-tomb-21"
                  loading="lazy"
                  alt=""
                  src={humayunsTomb2}
                />
                <img
                  className="forward-icon43"
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
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
  account: PropTypes.string,
  line12: PropTypes.string,
  mysorePalace2: PropTypes.string,
  konarkSunTempleecbbe: PropTypes.string,
  avatar: PropTypes.string,
  uttarPradeshMap1: PropTypes.string,
  line11: PropTypes.string,
  victoriaMemorial2: PropTypes.string,
  minakshiTemple2: PropTypes.string,
  avatarTwo: PropTypes.string,
  tAJMAHAL2: PropTypes.string,
  humayunsTomb2: PropTypes.string,
};

export default FrameComponent4;
