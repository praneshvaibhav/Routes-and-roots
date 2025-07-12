import FrameComponent13 from "../components/FrameComponent13";
import Slider from "../components/Slider";
import ReviewContent from "../components/ReviewContent";
import HotelOne from "../components/HotelOne";
import HotelCard from "../components/HotelCard";
import HotelListing from "../components/HotelListing";
import ReviewCard from "../components/ReviewCard";
import ContentSeparator from "../components/ContentSeparator";
import Footer3 from "../components/Footer3";
import "./DesktopTajmahal2.css";

const DesktopTajmahal2 = () => {
  return (
    <div className="desktop-tajmahal-3">
      <FrameComponent13 />
      <div className="hero">
        <h1 className="never-stop1">Never Stop</h1>
        <img className="taj-mahal-2" alt="" src="/taj-mahal-2@2x.png" />
      </div>
      <main className="content2">
        <section className="carousel">
          <Slider />
          <div className="attraction-details">
            <div className="user-details">
              <div className="user-details-child" />
              <ReviewContent destinationDivider="pending_1072:1152" />
              <img className="content-divider-icon" loading="lazy" alt="" />
              <div className="accommodation">
                <div className="hotel-list1">
                  <HotelOne
                    hotelTaj1="/hotel-taj-1@2x.png"
                    propMinWidth="99px"
                  />
                  <HotelCard
                    hotelRianbow1="/hotel-rianbow-1@2x.png"
                    propMinWidth="44px"
                  />
                  <HotelListing hotel31="/hotel-3-1@2x.png" propRowGap="20px" />
                  <div className="review-header-group">
                    <div className="review-header1">
                      <div className="top-reviews2">{`Top Reviews `}</div>
                    </div>
                    <img
                      className="review-divider-icon1"
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
              <div className="user-avatars">
                <div className="profile-pictures" />
                <img
                  className="user-male-icon4"
                  loading="lazy"
                  alt=""
                  src="/user-male@2x.png"
                />
              </div>
              <div className="user-avatars1">
                <div className="user-avatars-child" />
                <img
                  className="user-male-icon5"
                  loading="lazy"
                  alt=""
                  src="/user-male@2x.png"
                />
              </div>
            </div>
          </div>
          <ContentSeparator
            propWidth="1656px"
            propAlignSelf="unset"
            propFlex="unset"
            propWidth1="1444px"
            contentDivider="pending_1072:1112"
          />
        </section>
      </main>
      <div className="image-container-parent">
        <div className="image-container">
          <img
            className="screenshot-352-ai-brush-remo-icon3"
            alt=""
            src="/screenshot--352-aibrushremovebgtxorkjjb-1@2x.png"
          />
        </div>
        <img
          className="taj-mahal-3-1"
          loading="lazy"
          alt=""
          src="/taj-mahal-3-1@2x.png"
        />
      </div>
      <Footer3
        propBackgroundImage="unset"
        propBackgroundImage1="unset"
        propBackgroundImage2="unset"
        instagram="/instagram@2x.png"
        instagram1="/instagram@2x.png"
      />
    </div>
  );
};

export default DesktopTajmahal2;
