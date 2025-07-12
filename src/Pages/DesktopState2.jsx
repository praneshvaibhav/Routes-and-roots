import { useCallback } from "react";
import FrameComponent from "../components/FrameComponent";
import FrameComponent2 from "../components/FrameComponent2";
import { useNavigate } from "react-router-dom";
import FrameComponent3 from "../components/FrameComponent3";
import HeritageIcons from "../components/HeritageIcons";
import HeritageIcons2 from "../components/HeritageIcons2";
import HeritageIcons3 from "../components/HeritageIcons3";
import Footer from "../components/Footer";
import "./DesktopState2.css";

const DesktopState2 = () => {
  const navigate = useNavigate();

  const onVisitNowTextClick = useCallback(() => {
    navigate("/desktop-tajmahal");
  }, [navigate]);

  const onXTextClick = useCallback(() => {
    navigate("/desktop-state");
  }, [navigate]);

  const onAgraTextClick = useCallback(() => {
    navigate("/desktop-state-3");
  }, [navigate]);

  const onRectangleClick = useCallback(() => {
    navigate("/spritiual");
  }, [navigate]);

  const onRectangleClick1 = useCallback(() => {
    navigate("/museums");
  }, [navigate]);

  return (
    <div className="desktop-state-2">
      <div className="desktop-state-2-child" />
      <img className="desktop-state-2-item" alt="" src="/ellipse-51@2x.png" />
      <div className="i-visited-fort">{`I visited Fort through Roots and Routes. The culture and the hindu tradition just blew my mind. #Wonderful_experience `}</div>
      <div className="dianne-russell">Dianne Russell</div>
      <img className="desktop-state-2-inner" alt="" src="/line-11.svg" />
      <footer className="rectangle-footer" />
      <div className="about-us8">{`About us `}</div>
      <div className="about-us8">complain</div>
      <div className="privacy-policy8">Privacy Policy</div>
      <div className="about-us8">Careers</div>
      <div className="help-center8">Help center</div>
      <div className="connect-with-us8">Connect with us :</div>
      <div className="about-us8">FAQ’s</div>
      <div className="about-us8">{`e-Visa `}</div>
      <div className="terms-condition8">{`Terms & Condition`}</div>
      <img className="instagram-icon8" alt="" src="/instagram@2x.png" />
      <img
        className="copyright-all-rights-reserved8"
        alt=""
        src="/copyright-all-rights-reserved@2x.png"
      />
      <main className="frame-parent4">
        <FrameComponent
          headerMinHeight="unset"
          phoneIconBackgroundImage="unset"
          frameDivTextDecoration="unset"
          dESTNATIONSTextDecoration="unset"
          searchbarTextDecoration="unset"
        />
        <section className="frame-parent5">
          <FrameComponent2
            screenshotAiBrushRemovebg="/screenshot--352-aibrushremovebgtxorkjjb-1@2x.png"
            amazingUp6777cdc32="/amazingup6777cdc3-2@2x.png"
          />
          <div className="frame-wrapper3">
            <div className="frame-parent6">
              <div className="frame-parent7">
                <div className="frame-wrapper4">
                  <div className="frame-parent8">
                    <div className="frame-parent9">
                      <div className="top-wrapper">
                        <h2 className="top1">TOP</h2>
                      </div>
                      <h1 className="r1">R</h1>
                      <div className="eviews-wrapper">
                        <h2 className="eviews1">EVIEWS</h2>
                      </div>
                    </div>
                    <div className="frame-wrapper5">
                      <div className="ellipse-group">
                        <img
                          className="ellipse-icon"
                          loading="lazy"
                          alt=""
                          src="/ellipse-41@2x.png"
                        />
                        <div className="rectangle-parent2">
                          <div className="desktop-state-2-child" />
                          <div className="cameron-williamson-parent">
                            <div className="cameron-williamson">
                              Cameron Williamson
                            </div>
                            <div className="line-frame">
                              <div className="frame-child6" />
                            </div>
                          </div>
                          <div className="visiting-taj-mahal-was-one-the-wrapper">
                            <div className="visiting-taj-mahal-container">
                              <p className="visiting-taj-mahal">{` Visiting Taj mahal `}</p>
                              <p className="visiting-taj-mahal">
                                was one the best experience. Got to know about
                                many much historic thinghs
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="frame-parent10">
                  <div className="frame-wrapper6">
                    <div className="rectangle-parent3">
                      <div className="palace-details-child" />
                      <img
                        className="taj-mahal-21"
                        loading="lazy"
                        alt=""
                        src="/taj-mahal-1@2x.png"
                      />
                      <div className="frame-wrapper7">
                        <div className="frame-parent11">
                          <div className="frame-parent12">
                            <div className="taj-mahal-wrapper">
                              <div className="taj-mahal">TAJ MAHAL</div>
                            </div>
                            <div className="agra-uttar-pradesh-parent">
                              <div className="agra-uttar">
                                Agra , Uttar Pradesh
                              </div>
                              <div className="ratings-4750-wrapper">
                                <div className="ratings-4750">
                                  Ratings : 4.7/5.0
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="frame-wrapper8">
                            <div className="visit-now-parent">
                              <div
                                className="visit-now"
                                onClick={onVisitNowTextClick}
                              >{`Visit now `}</div>
                              <img
                                className="forward-icon"
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
                  <div className="frame-parent13">
                    <div className="humayuns-tomb-parent">
                      <div className="humayuns-tomb">HUMAYUN'S TOMB</div>
                      <div className="frame-wrapper9">
                        <div className="frame-parent14">
                          <div className="delhi-wrapper">
                            <div className="delhi">DELHI</div>
                          </div>
                          <div className="ratings-4250">Ratings : 4.2/5.0</div>
                        </div>
                      </div>
                    </div>
                    <div className="visit-now-wrapper">
                      <div className="visit-now1">{`Visit now `}</div>
                    </div>
                    <div className="temple-image-container">
                      <div className="temple-image-background" />
                      <img
                        className="humayuns-tomb-2"
                        loading="lazy"
                        alt=""
                        src="/humayuns-tomb-1@2x.png"
                      />
                      <img
                        className="forward-icon1"
                        loading="lazy"
                        alt=""
                        src="/forward1@2x.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="reviews-container">
                <div className="tourist-reviews">
                  <h2 className="from1">FROM</h2>
                  <h1 className="tourists1">TOURISTS</h1>
                  <img
                    className="tourist-reviews-child"
                    loading="lazy"
                    alt=""
                  />
                  <div className="map-placeholder" />
                  <img
                    className="uttar-pradesh-map-1-icon"
                    loading="lazy"
                    alt=""
                    src="/uttarpradeshmap-1@2x.png"
                  />
                  <div className="state-map-background" />
                  <img
                    className="forward-icon2"
                    loading="lazy"
                    alt=""
                    src="/forward1@2x.png"
                  />
                  <img
                    className="forward-icon3"
                    loading="lazy"
                    alt=""
                    src="/forward1@2x.png"
                  />
                  <div className="cities-dropdown">
                    <div className="cities-dropdown-child" />
                    <div className="cities-container">
                      <div className="cities-header">
                        <div className="cities-of-uttar">
                          Cities of Uttar Pradesh
                        </div>
                        <div className="close-button">
                          <div className="close-icon" />
                          <div className="x" onClick={onXTextClick}>
                            X
                          </div>
                        </div>
                      </div>
                      <div className="agra" onClick={onAgraTextClick}>
                        Agra
                      </div>
                    </div>
                    <div className="aligarh-ambedkar-nagar-container">
                      <p className="visiting-taj-mahal">Aligarh</p>
                      <p className="visiting-taj-mahal">Ambedkar Nagar</p>
                      <p className="visiting-taj-mahal">Amethi</p>
                      <p className="visiting-taj-mahal">Amroha</p>
                      <p className="visiting-taj-mahal">Auraiya</p>
                      <p className="visiting-taj-mahal">Ayodhya</p>
                      <p className="visiting-taj-mahal">Azamgarh</p>
                      <p className="visiting-taj-mahal">Badaun</p>
                      <p className="visiting-taj-mahal">Baghpat</p>
                      <p className="visiting-taj-mahal">Bahraich</p>
                      <p className="visiting-taj-mahal">Ballia</p>
                      <p className="visiting-taj-mahal">Balrampur</p>
                      <p className="visiting-taj-mahal">Banda</p>
                      <p className="visiting-taj-mahal">Barabanki</p>
                      <p className="visiting-taj-mahal">Bareilly</p>
                      <p className="visiting-taj-mahal">Basti</p>
                      <p className="visiting-taj-mahal">Bhadohi</p>
                      <p className="visiting-taj-mahal">Bijnor</p>
                      <p className="visiting-taj-mahal">Budaun</p>
                      <p className="visiting-taj-mahal">Bulandshahr</p>
                      <p className="visiting-taj-mahal">Chandauli</p>
                      <p className="visiting-taj-mahal">Chitrakoot</p>
                      <p className="visiting-taj-mahal">Deoria</p>
                      <p className="visiting-taj-mahal">Etah</p>
                      <p className="visiting-taj-mahal">Etawah</p>
                      <p className="visiting-taj-mahal">Farrukhabad</p>
                      <p className="visiting-taj-mahal">Fatehpur</p>
                      <p className="visiting-taj-mahal">Firozabad</p>
                      <p className="visiting-taj-mahal">Gautam Buddha Nagar</p>
                      <p className="visiting-taj-mahal">Ghaziabad</p>
                      <p className="visiting-taj-mahal">Ghazipur</p>
                      <p className="visiting-taj-mahal">Gonda</p>
                      <p className="visiting-taj-mahal">Gorakhpur</p>
                      <p className="visiting-taj-mahal">Hamirpur</p>
                      <p className="visiting-taj-mahal">Hapur</p>
                      <p className="visiting-taj-mahal">Hardoi</p>
                      <p className="visiting-taj-mahal">Hathras</p>
                      <p className="visiting-taj-mahal">Jalaun</p>
                      <p className="visiting-taj-mahal">Jaunpur</p>
                      <p className="visiting-taj-mahal">Jhansi</p>
                      <p className="visiting-taj-mahal">Kannauj</p>
                      <p className="visiting-taj-mahal">Kanpur Dehat</p>
                      <p className="visiting-taj-mahal">Kanpur Nagar</p>
                      <p className="visiting-taj-mahal">Kasganj</p>
                      <p className="visiting-taj-mahal">Kaushambi</p>
                      <p className="visiting-taj-mahal">
                        Kheri (Lakhimpur Kheri)
                      </p>
                      <p className="visiting-taj-mahal">Kushinagar</p>
                      <p className="visiting-taj-mahal">Lalitpur</p>
                      <p className="visiting-taj-mahal">Lucknow</p>
                      <p className="visiting-taj-mahal">Maharajganj</p>
                      <p className="visiting-taj-mahal">Mahoba</p>
                      <p className="visiting-taj-mahal">Mainpuri</p>
                      <p className="visiting-taj-mahal">Mathura</p>
                      <p className="visiting-taj-mahal">Mau</p>
                      <p className="visiting-taj-mahal">Meerut</p>
                      <p className="visiting-taj-mahal">Mirzapur</p>
                      <p className="visiting-taj-mahal">Moradabad</p>
                      <p className="visiting-taj-mahal">Muzaffarnagar</p>
                      <p className="visiting-taj-mahal">Pilibhit</p>
                      <p className="visiting-taj-mahal">Pratapgarh</p>
                      <p className="visiting-taj-mahal">Prayagraj</p>
                      <p className="visiting-taj-mahal">Rae Bareli</p>
                      <p className="visiting-taj-mahal">Rampur</p>
                      <p className="visiting-taj-mahal">Saharanpur</p>
                      <p className="visiting-taj-mahal">Sambhal</p>
                      <p className="visiting-taj-mahal">Sant Kabir Nagar</p>
                      <p className="visiting-taj-mahal">Shahjahanpur</p>
                      <p className="visiting-taj-mahal">Shamli</p>
                      <p className="visiting-taj-mahal">Shravasti</p>
                      <p className="visiting-taj-mahal">Siddharthnagar</p>
                      <p className="visiting-taj-mahal">Sitapur</p>
                      <p className="visiting-taj-mahal">Sonbhadra</p>
                      <p className="visiting-taj-mahal">Sultanpur</p>
                      <p className="visiting-taj-mahal">Unnao</p>
                      <p className="visiting-taj-mahal">Varanasi</p>
                    </div>
                  </div>
                  <img className="tourist-reviews-item" loading="lazy" alt="" />
                </div>
              </div>
              <div className="map-and-account-parent">
                <div className="map-and-account">
                  <div className="map-container-wrapper">
                    <FrameComponent3
                      propWidth="unset"
                      propFlex="1"
                      propMinWidth="113px"
                    />
                  </div>
                  <div className="account-details-parent">
                    <div className="account-details">
                      <div className="account-icon-container">
                        <div className="account-circle" />
                        <img
                          className="account-icon"
                          loading="lazy"
                          alt=""
                          src="/account@2x.png"
                        />
                      </div>
                    </div>
                    <div className="rectangle-parent5">
                      <div className="desktop-state-2-child" />
                      <div className="sign-in-details">
                        <div className="sign-in-label-container">
                          <div className="sign-in">Sign In</div>
                        </div>
                        <img
                          className="sign-in-details-child"
                          alt=""
                          src="/line-11.svg"
                        />
                      </div>
                      <div className="add-yours-wrapper">
                        <div className="add-yours">+ Add yours</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="palace-container-wrapper">
                  <div className="palace-container">
                    <div className="palace-details">
                      <div className="palace-details-child" />
                      <img
                        className="mysore-palace-2"
                        loading="lazy"
                        alt=""
                        src="/mysore-palace-1@2x.png"
                      />
                      <div className="palace-info">
                        <div className="palace-name-and-rating">
                          <div className="palace-name-container">
                            <div className="palace-name-details">
                              <div className="mysore-palace">MYSORE PALACE</div>
                              <div className="palace-location">
                                <div className="mysore-karnataka">
                                  Mysore , Karnataka
                                </div>
                              </div>
                            </div>
                            <div className="palace-rating-container">
                              <div className="ratings-4750">
                                Ratings : 4.4/5.0
                              </div>
                            </div>
                          </div>
                          <div className="palace-visit-button">
                            <div className="palace-button-container">
                              <div className="taj-mahal">{`Visit now `}</div>
                              <img
                                className="forward-icon4"
                                loading="lazy"
                                alt=""
                                src="/forward1@2x.png"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="temple-container-parent">
                      <div className="temple-container">
                        <div className="konark-sun-temple">
                          KONARK SUN TEMPLE
                        </div>
                        <div className="temple-location-container">
                          <div className="delhi">Puri , Odisha</div>
                        </div>
                        <div className="temple-rating-container">
                          <div className="ratings-44501">Ratings : 4.4/5.0</div>
                        </div>
                      </div>
                      <div className="temple-visit-button-container">
                        <div className="visit-now1">{`Visit now `}</div>
                      </div>
                      <div className="temple-image-container">
                        <div className="temple-image-background" />
                        <img
                          className="konark-sun-temple-13e71cbb6e-2-icon"
                          loading="lazy"
                          alt=""
                          src="/konark-sun-temple-13e71cbb6e-1@2x.png"
                        />
                        <img
                          className="forward-icon5"
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
      </main>
      <div className="heritage-container-wrapper">
        <div className="heritage-container">
          <HeritageIcons heritage1="/heritage-4@2x.png" />
          <HeritageIcons2 iNDIANART1="/indian-art-4@2x.png" />
          <div className="image-type-container">
            <div
              className="image-type-container-child"
              onClick={onRectangleClick}
            />
            <img
              className="spritiual-1-icon1"
              loading="lazy"
              alt=""
              src="/spritiual-4@2x.png"
            />
            <div className="spiritual-container">
              <div className="spiritual2">SPIRITUAL</div>
              <div className="inner-peace-arises2">
                Inner peace arises from deep spiritual understanding.
              </div>
            </div>
          </div>
          <HeritageIcons3 bestIndianWildlifePhotographers="/bestindianwildlifephotographers01-4@2x.png" />
          <div className="image-type-container1">
            <div
              className="image-type-container-item"
              onClick={onRectangleClick1}
            />
            <img
              className="museum-mobile-414x233-1-icon1"
              loading="lazy"
              alt=""
              src="/museummobile414x233-4@2x.png"
            />
            <div className="museums-container">
              <div className="museums4">MUSEUMS</div>
              <div className="inner-peace-arises2">
                Preserving history, inspiring future generations.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="search-city-or">Search city or place</div>
      <div className="palace-details-child" />
      <img
        className="victoria-memorial-2"
        alt=""
        src="/victoria-memorial-1@2x.png"
      />
      <div className="visit-now4">{`Visit now `}</div>
      <div className="ratings-4650">Ratings : 4.6/5.0</div>
      <div className="madurai-tamil">Madurai , Tamil Nadu</div>
      <div className="meenakshi-temple">MEENAKSHI TEMPLE</div>
      <div className="visit-now4">{`Visit now `}</div>
      <div className="ratings-4650">Ratings : 4.0/5.0</div>
      <div className="madurai-tamil">Kolkata , West Bengal</div>
      <div className="victoria-memorial">VICTORIA MEMORIAL</div>
      <img
        className="victoria-memorial-2"
        alt=""
        src="/minakshi-temple-1@2x.png"
      />
      <Footer
        propTextDecoration="unset"
        instagram="/instagram@2x.png"
        propTextDecoration1="unset"
      />
    </div>
  );
};

export default DesktopState2;
