import ReviewContent from "./ReviewContent";
import HotelOne from "./HotelOne";
import HotelCard from "./HotelCard";
import HotelListing from "./HotelListing";
import ReviewCard from "./ReviewCard";
import ContentSeparator from "./ContentSeparator";
import PropTypes from "prop-types";
import "./SocialProof.css";

const SocialProof = ({ className = "" }) => {
  return (
    <section className={`social-proof ${className}`}>
      <div className="reviews-header-parent">
        <div className="reviews-header">
          <div className="reviews-header-child" />
          <ReviewContent destinationDivider="pending_1035:71" />
          <img className="reviews-header-item" loading="lazy" alt="" />
          <div className="accommodations">
            <div className="hotel-list2">
              <HotelOne hotelTaj1="/hotel-taj-1@2x.png" />
              <HotelCard hotelRianbow1="/hotel-rianbow-1@2x.png" />
              <HotelListing hotel31="/hotel-3-1@2x.png" />
              <div className="review-heading-parent">
                <div className="review-heading">
                  <div className="top-reviews4">{`Top Reviews `}</div>
                </div>
                <img className="review-separator-icon" loading="lazy" alt="" />
              </div>
              <ReviewCard
                mrJaden5628="Mr. Jaden5628"
                itWasGreatExperienceInIndia="It was great experience in India mainly in agra."
                touristGuideWasVeryKindAnd="Tourist guide was very kind and friendly."
                emptyRating="4.3"
              />
              <ReviewCard
                propPadding="0px 39px 15px"
                propMinWidth="183px"
                propWidth="171px"
                mrJaden5628="Ellisa396"
                propLeft="4px"
                propHeight="25px"
                itWasGreatExperienceInIndia="Me and my husband had one of the greatest joy"
                touristGuideWasVeryKindAnd="in India ,Taj mahal was one of them :)"
                propGap="3px"
                emptyRating="4.0"
              />
            </div>
          </div>
          <div className="reviews-authors">
            <div className="author-image" />
            <img
              className="user-male-icon6"
              loading="lazy"
              alt=""
              src="/user-male@2x.png"
            />
          </div>
          <div className="reviews-authors1">
            <div className="reviews-authors-child" />
            <img
              className="user-male-icon7"
              loading="lazy"
              alt=""
              src="/user-male@2x.png"
            />
          </div>
        </div>
        <ContentSeparator contentDivider="pending_1072:818" />
      </div>
    </section>
  );
};

SocialProof.propTypes = {
  className: PropTypes.string,
};

export default SocialProof;
