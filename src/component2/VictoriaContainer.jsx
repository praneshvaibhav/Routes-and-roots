import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import TajMahalContent from "./TajMahalContent";
import PropTypes from "prop-types";
import "./VictoriaContainer.css";

const VictoriaContainer = ({ className = "" }) => {
  const navigate = useNavigate();

  const onVisitNowTextClick = useCallback(() => {
    navigate("/desktop-tajmahal");
  }, [navigate]);

  const onRectangleClick = useCallback(() => {
    navigate("/desktop-state");
  }, [navigate]);

  return (
    <div className={`victoria-container ${className}`}>
      <div className="victoria-info">
        <div className="victoria-details">
          <div className="victoria-details-child" />
          <img
            className="victoria-memorial-12"
            loading="lazy"
            alt=""
            src="/victoria-memorial-1@2x.png"
          />
          <div className="victoria-title-parent">
            <div className="victoria-title">
              <div className="victoria-memorial3">VICTORIA MEMORIAL</div>
              <div className="victoria-location">
                <div className="kolkata-west3">Kolkata , West Bengal</div>
              </div>
              <div className="ratings-row">
                <div className="ratings-40503">Ratings : 4.0/5.0</div>
              </div>
            </div>
            <div className="visit-button2">
              <div className="visit-content">
                <div className="visit-now20">{`Visit now `}</div>
                <img
                  className="forward-icon21"
                  loading="lazy"
                  alt=""
                  src="/forward1@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="meenakshi-container">
          <div className="meenakshi-info">
            <div className="meenakshi-temple4">MEENAKSHI TEMPLE</div>
            <div className="meenakshi-location">
              <div className="meenakshi-details">
                <div className="madurai-tamil3">Madurai , Tamil Nadu</div>
                <div className="meenakshi-ratings">
                  <div className="ratings-46504">Ratings : 4.6/5.0</div>
                </div>
              </div>
            </div>
          </div>
          <div className="visit-meenakshi">
            <div className="visit-now21">{`Visit now `}</div>
          </div>
          <div className="meenakshi-image">
            <div className="meenakshi-bg" />
            <img
              className="minakshi-temple-12"
              loading="lazy"
              alt=""
              src="/minakshi-temple-1@2x.png"
            />
            <img className="forward-icon22" alt="" src="/forward1@2x.png" />
          </div>
        </div>
      </div>
      <div className="m-o-s-t-parent">
        <h1 className="m-o-s1">M O S T</h1>
        <div className="places-heading">
          <h1 className="p-l-a2">P L A C E S</h1>
          <div className="place-cards">
            <TajMahalContent
              propWidth="unset"
              propFlex="1"
              tAJMAHAL1="/taj-mahal-1@2x.png"
              onVisitNowTextClick={onVisitNowTextClick}
              humayunsTomb1="/humayuns-tomb-1@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="frame-parent95">
        <div className="state-grid-wrapper">
          <div className="state-grid">
            <div className="state-names">
              <div className="state-names-child" />
              <div className="top-states">27.</div>
              <div className="tripura">Tripura</div>
            </div>
            <div className="state-names1">
              <div className="state-names-item" onClick={onRectangleClick} />
              <div className="uttar-pradesh">Uttar Pradesh</div>
              <div className="block">28.</div>
            </div>
            <div className="state-names2">
              <div className="state-names-inner" />
              <div className="empty-cell-wrapper">
                <div className="empty-cell">29.</div>
              </div>
              <div className="uttarakhand">Uttarakhand</div>
            </div>
            <div className="state-names3">
              <div className="state-names-inner" />
              <div className="wrapper4">
                <div className="empty-cell">30.</div>
              </div>
              <div className="west-bengal">West Bengal</div>
            </div>
            <div className="state-names2">
              <div className="state-names-inner" />
              <div className="div53">31.</div>
              <div className="uttarakhand">Dadra and Nagar</div>
            </div>
            <div className="state-names3">
              <div className="state-names-inner" />
              <div className="div53">32.</div>
              <div className="west-bengal">Lakshadweep</div>
            </div>
            <div className="state-names2">
              <div className="state-names-inner" />
              <div className="div53">33.</div>
              <div className="delhi3">Delhi</div>
            </div>
            <div className="state-names3">
              <div className="state-names-inner" />
              <div className="div53">34.</div>
              <div className="uttarakhand">Puducherry</div>
            </div>
            <div className="state-names2">
              <div className="state-names-inner" />
              <div className="empty-cell-wrapper">
                <div className="empty-cell">35.</div>
              </div>
              <div className="west-bengal">Ladakh</div>
            </div>
            <div className="state-names9">
              <div className="state-names-child7" />
              <div className="div53">36.</div>
              <div className="jammu-and-kashmir-wrapper">
                <div className="jammu-and-kashmir">Jammu and Kashmir</div>
              </div>
            </div>
          </div>
        </div>
        <div className="mysore-info">
          <div className="place-names">
            <div className="victoria-details-child" />
            <img
              className="victoria-memorial-12"
              loading="lazy"
              alt=""
              src="/mysore-palace-1@2x.png"
            />
            <div className="place-locations">
              <div className="location-details">
                <div className="mysore-details">
                  <div className="mysore-palace-parent">
                    <div className="mysore-palace3">MYSORE PALACE</div>
                    <div className="mysore-location">
                      <div className="mysore-karnataka3">
                        Mysore , Karnataka
                      </div>
                    </div>
                  </div>
                  <div className="mysore-rating-row">
                    <div className="ratings-46504">Ratings : 4.4/5.0</div>
                  </div>
                </div>
                <div className="mysore-button-row">
                  <div className="mysore-visit-content">
                    <div className="visit-now20">{`Visit now `}</div>
                    <img
                      className="forward-icon23"
                      alt=""
                      src="/forward1@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mysore-info1">
          <div className="konark-sun-temple-group">
            <div className="konark-sun-temple3">KONARK SUN TEMPLE</div>
            <div className="puri-odisha-wrapper">
              <div className="kolkata-west3">Puri , Odisha</div>
            </div>
            <div className="konark-rating">
              <div className="ratings-40503">Ratings : 4.4/5.0</div>
            </div>
          </div>
          <div className="visit-konark">
            <div className="visit-now21">{`Visit now `}</div>
          </div>
          <div className="meenakshi-image">
            <div className="meenakshi-bg" />
            <img
              className="konark-sun-temple-13e71cbb6e-1-icon2"
              loading="lazy"
              alt=""
              src="/konark-sun-temple-13e71cbb6e-1@2x.png"
            />
            <img className="forward-icon24" alt="" src="/forward1@2x.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

VictoriaContainer.propTypes = {
  className: PropTypes.string,
};

export default VictoriaContainer;
