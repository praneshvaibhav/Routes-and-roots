import FrameComponent36 from "../components/FrameComponent36";
import FrameComponent35 from "../components/FrameComponent35";
import FrameComponent37 from "../components/FrameComponent37";
import PlacesContainer from "../components/PlacesContainer";
import ReviewsContainer from "../components/ReviewsContainer";
import Footer5 from "../components/Footer5";
import "./DesktopSignInTwo.css";

const DesktopSignInTwo = () => {
  return (
    <div className="desktop-sign-in-two">
      <img
        className="screenshot-352-ai-brush-remo-icon"
        alt=""
        src="/screenshot--352-aibrushremovebgtxorkjjb-11@2x.png"
      />
      <img
        className="jaipur-template-1"
        alt=""
        src="/jaipur-template-1@2x.png"
      />
      <FrameComponent36 />
      <section className="desktop-sign-in-two-inner">
        <div className="frame-parent">
          <FrameComponent35 />
          <FrameComponent37 />
        </div>
      </section>
      <PlacesContainer />
      <ReviewsContainer />
      <Footer5 />
    </div>
  );
};

export default DesktopSignInTwo;
