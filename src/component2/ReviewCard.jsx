import { useMemo } from "react";
import PropTypes from "prop-types";
import "./ReviewCard.css";

const ReviewCard = ({
  className = "",
  propPadding,
  propMinWidth,
  propWidth,
  mrJaden5628,
  propLeft,
  propHeight,
  itWasGreatExperienceInIndia,
  touristGuideWasVeryKindAnd,
  propGap,
  emptyRating,
}) => {
  const reviewContentStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const reviewerInfoStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const reviewerNameStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const mrJaden5628Style = useMemo(() => {
    return {
      left: propLeft,
      height: propHeight,
    };
  }, [propLeft, propHeight]);

  const ratingContainerStyle = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  return (
    <div className={`review-card ${className}`}>
      <div className="review-content1" style={reviewContentStyle}>
        <div className="review-content-child" />
        <div className="reviewer-info" style={reviewerInfoStyle}>
          <div className="reviewer-name" style={reviewerNameStyle}>
            <div className="mr-jaden5628" style={mrJaden5628Style}>
              {mrJaden5628}
            </div>
            <div className="name-separator" />
          </div>
          <div className="it-was-great-experience-in-ind-wrapper">
            <div className="it-was-great-container">
              <p className="it-was-great">{itWasGreatExperienceInIndia}</p>
              <p className="it-was-great">{touristGuideWasVeryKindAnd}</p>
            </div>
          </div>
        </div>
        <div className="rating-display">
          <div className="rating-container" style={ratingContainerStyle}>
            <div className="empty-rating">{emptyRating}</div>
            <div className="review-star">
              <img
                className="star-icon10"
                loading="lazy"
                alt=""
                src="/star-10@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ReviewCard.propTypes = {
  className: PropTypes.string,
  mrJaden5628: PropTypes.string,
  itWasGreatExperienceInIndia: PropTypes.string,
  touristGuideWasVeryKindAnd: PropTypes.string,
  emptyRating: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
  propMinWidth: PropTypes.any,
  propWidth: PropTypes.any,
  propLeft: PropTypes.any,
  propHeight: PropTypes.any,
  propGap: PropTypes.any,
};

export default ReviewCard;
