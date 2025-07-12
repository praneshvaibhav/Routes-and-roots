import FrameComponent12 from "../components/FrameComponent12";
import Placeholder from "../components/Placeholder";
import ReviewContent from "../components/ReviewContent";
import HotelOne from "../components/HotelOne";
import HotelCard from "../components/HotelCard";
import HotelListing from "../components/HotelListing";
import ReviewCard from "../components/ReviewCard";
import ContentSeparator from "../components/ContentSeparator";
import Footer3 from "../components/Footer3";
import "./DesktopTajmahal1.css";

const DesktopTajmahal1 = () => {
  return (
    <div className="desktop-tajmahal-2">
      <FrameComponent12 phoneIconBackgroundImage="unset" />
      <main className="placeholder-wrapper">
        <section className="placeholder">
          <Placeholder />
          <div className="user-testimonials-wrapper">
            <div className="user-testimonials">
              <div className="user-testimonials-child" />
              <ReviewContent destinationDivider="pending_1072:1022" />
              <img className="user-testimonials-item" loading="lazy" alt="" />
              <div className="placeholder-container">
                <div className="placeholder1">
                  <HotelOne
                    hotelTaj1="/hotel-taj-1@2x.png"
                    propMinWidth="99px"
                  />
                  <HotelCard
                    hotelRianbow1="/hotel-rianbow-1@2x.png"
                    propMinWidth="44px"
                  />
                  <HotelListing hotel31="/hotel-3-1@2x.png" propRowGap="20px" />
                  <div className="review-header-parent">
                    <div className="review-header">
                      <div className="top-reviews">{`Top Reviews `}</div>
                    </div>
                    <img className="separator-icon" loading="lazy" alt="" />
                  </div>
                  <ReviewCard
                    propPadding="5px 40px 9px 44px"
                    propMinWidth="179px"
                    propWidth="167px"
                    mrJaden5628="Mr. Jaden5628"
                    propLeft="0px"
                    propHeight="100%"
                    itWasGreatExperienceInIndia="It was great experience in India mainly in agra."
                    touristGuideWasVeryKindAnd="Tourist guide was very kind and friendly."
                    propGap="unset"
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
              <div className="avatar-parent">
                <div className="avatar" />
                <img
                  className="user-male-icon"
                  loading="lazy"
                  alt=""
                  src="/user-male@2x.png"
                />
              </div>
              <div className="ellipse-parent">
                <div className="frame-child" />
                <img
                  className="user-male-icon1"
                  loading="lazy"
                  alt=""
                  src="/user-male@2x.png"
                />
              </div>
            </div>
          </div>
          <ContentSeparator
            propWidth="unset"
            propAlignSelf="stretch"
            propFlex="unset"
            propWidth1="1444px"
            contentDivider="pending_1072:982"
          />
        </section>
      </main>
      <Footer3 instagram="/instagram@2x.png" instagram1="/instagram@2x.png" />
    </div>
  );
};

export default DesktopTajmahal1;
