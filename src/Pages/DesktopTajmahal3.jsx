import FrameComponent13 from "../components/FrameComponent13";
import ImageSlider from "../components/ImageSlider";
import ReviewContent from "../components/ReviewContent";
import HotelOne from "../components/HotelOne";
import HotelCard from "../components/HotelCard";
import HotelListing from "../components/HotelListing";
import ReviewCard from "../components/ReviewCard";
import ContentSeparator from "../components/ContentSeparator";
import Footer2 from "../components/Footer2";
import "./DesktopTajmahal3.css";

const DesktopTajmahal3 = () => {
  return (
    <div className="desktop-tajmahal-4">
      <FrameComponent13 phoneIconBackgroundImage="unset" />
      <main className="content">
        <section className="content-container">
          <ImageSlider />
          <div className="footer">
            <div className="social-icons">
              <div className="social-icons-child" />
              <ReviewContent destinationDivider="pending_1072:1284" />
              <img className="social-icons-item" loading="lazy" alt="" />
              <div className="hotels">
                <div className="hotel-list">
                  <HotelOne
                    hotelTaj1="/hotel-taj-1@2x.png"
                    propMinWidth="99px"
                  />
                  <HotelCard
                    hotelRianbow1="/hotel-rianbow-1@2x.png"
                    propMinWidth="44px"
                  />
                  <HotelListing hotel31="/hotel-3-1@2x.png" propRowGap="20px" />
                  <div className="review-heading-container-parent">
                    <div className="review-heading-container">
                      <div className="top-reviews1">{`Top Reviews `}</div>
                    </div>
                    <img
                      className="review-divider-icon"
                      loading="lazy"
                      alt=""
                    />
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
              <div className="profile-icons">
                <div className="profile-picture-one" />
                <img
                  className="user-male-icon2"
                  loading="lazy"
                  alt=""
                  src="/user-male@2x.png"
                />
              </div>
              <div className="profile-icons1">
                <div className="profile-icons-child" />
                <img
                  className="user-male-icon3"
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
            contentDivider="pending_1072:1244"
          />
        </section>
      </main>
      <Footer2
        propBackgroundImage="unset"
        propBackgroundImage1="unset"
        propBackgroundImage2="unset"
        instagram="/instagram@2x.png"
        instagram1="/instagram@2x.png"
      />
    </div>
  );
};

export default DesktopTajmahal3;
