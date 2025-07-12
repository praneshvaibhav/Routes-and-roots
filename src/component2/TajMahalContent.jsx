import { useMemo } from "react";
import PropTypes from "prop-types";
import "./TajMahalContent.css";

const TajMahalContent = ({
  className = "",
  propWidth,
  propFlex,
  tAJMAHAL1,
  onVisitNowTextClick,
  humayunsTomb1,
}) => {
  const tajMahalContentStyle = useMemo(() => {
    return {
      width: propWidth,
      flex: propFlex,
    };
  }, [propWidth, propFlex]);

  return (
    <div
      className={`taj-mahal-content ${className}`}
      style={tajMahalContentStyle}
    >
      <div className="taj-mahal-details">
        <div className="taj-mahal-info1">
          <div className="taj-mahal-info-child" />
          <img className="taj-mahal-13" loading="lazy" alt="" src={tAJMAHAL1} />
          <div className="taj-mahal-description1">
            <div className="taj-mahal-name-parent">
              <div className="taj-mahal-name">
                <div className="taj-mahal5">TAJ MAHAL</div>
              </div>
              <div className="taj-mahal-location">
                <div className="agra-uttar4">Agra , Uttar Pradesh</div>
                <div className="rating8">
                  <div className="ratings-47504">Ratings : 4.7/5.0</div>
                </div>
              </div>
              <div className="visit-button4">
                <div className="visit-button5">
                  <div
                    className="taj-mahal5"
                    onClick={onVisitNowTextClick}
                  >{`Visit now `}</div>
                  <img
                    className="forward-icon32"
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
      <div className="frame-parent99">
        <div className="humayuns-tomb-container">
          <div className="humayuns-tomb4">HUMAYUN'S TOMB</div>
          <div className="delhi-rating">
            <div className="delhi-rating1">
              <div className="delhi5">
                <div className="delhi6">DELHI</div>
              </div>
              <div className="ratings-42504">Ratings : 4.2/5.0</div>
            </div>
          </div>
        </div>
        <div className="visit-button6">
          <div className="visit-now33">{`Visit now `}</div>
        </div>
        <div className="humayun-tomb-image1">
          <div className="image-placeholder1" />
          <img
            className="humayuns-tomb-13"
            loading="lazy"
            alt=""
            src={humayunsTomb1}
          />
          <img
            className="forward-icon33"
            loading="lazy"
            alt=""
            src="/forward1@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

TajMahalContent.propTypes = {
  className: PropTypes.string,
  tAJMAHAL1: PropTypes.string,
  humayunsTomb1: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propFlex: PropTypes.any,

  /** Action props */
  onVisitNowTextClick: PropTypes.func,
};

export default TajMahalContent;
