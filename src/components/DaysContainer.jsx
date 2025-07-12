import WednesdayWeekRow from "./WednesdayWeekRow";
import FrameComponent10 from "./FrameComponent10";
import FrameComponent9 from "./FrameComponent9";
import CalendarDayContainer from "./CalendarDayContainer";
import FridayEvent from "./FridayEvent";
import CalendarDay1 from "./CalendarDay1";
import FrameComponent7 from "./FrameComponent7";
import PropTypes from "prop-types";
import "./DaysContainer.css";

const DaysContainer = ({ className = "" }) => {
  return (
    <div className={`days-container ${className}`}>
      <div className="week-one">
        <div className="week-two">
          <div className="rectangle-parent14">
            <div className="sunday-elements-child" />
            <div className="first-sunday-placeholder-wrapper">
              <div className="first-sunday-placeholder">
                <div className="first-sunday-placeholder1">1</div>
                <div className="first-sunday-placeholder2">1</div>
              </div>
            </div>
            <WednesdayWeekRow wednesdaySeparator="pending_1064:694" />
            <img className="week-separator-icon" loading="lazy" alt="" />
          </div>
        </div>
        <FrameComponent10
          firstMondayPlaceholderContent="2"
          monday="Monday"
          line23="pending_1064:976"
          ganeshVisarjan="Ganesh Visarjan"
          mondayWeekSeparator="pending_1064:978"
        />
        <div className="week-one-child">
          <div className="sunday-elements">
            <div className="sunday-elements-child" />
            <div className="first-sunday-placeholder-wrapper">
              <div className="sunday-placeholder">3</div>
            </div>
            <div className="tuesday-wrapper">
              <div className="tuesday1">Tuesday</div>
            </div>
            <div className="tuesday-row">
              <div className="tuesday-row-inner">
                <img className="frame-child25" loading="lazy" alt="" />
              </div>
              <div className="onam"> Onam</div>
            </div>
          </div>
        </div>
        <FrameComponent9 line25="pending_1064:704" />
        <CalendarDayContainer eventSeparator="pending_1064:709" />
      </div>
      <div className="week-one">
        <FridayEvent
          propWidth="252px"
          propAlignSelf="unset"
          propFlexDirection="column"
          propFlex="unset"
          propAlignSelf1="stretch"
          fridayEmptyCell="6"
          fridaySeparator="pending_1064:735"
          friday="Friday"
          radhastamiSeparator="pending_1064:737"
          radhastami="Radhastami"
          propAlignSelf2="stretch"
          propWidth1="unset"
        />
        <div className="saturday-container">
          <CalendarDay1
            propAlignSelf="unset"
            propWidth="236px"
            prop="7"
            saturday="Saturday"
            line30="pending_1064:731"
            line31="pending_1064:729"
            kshamavani="Kshamavani"
          />
        </div>
        <div className="sunday-container">
          <div className="sunday-elements">
            <div className="sunday-elements-child" />
            <div className="first-sunday-placeholder-wrapper">
              <div className="sunday-placeholder">8</div>
            </div>
            <div className="sunday-name">
              <div className="tuesday-container">
                <div className="tuesday1">Sunday</div>
              </div>
              <div className="tuesday-row-inner">
                <img className="frame-child25" loading="lazy" alt="" />
              </div>
              <div className="mahalaya"> Mahalaya</div>
            </div>
          </div>
        </div>
        <FrameComponent7
          date="9"
          tuesday="Monday"
          line21="pending_1064:719"
          onam="Jivitputrika"
        />
        <div className="sunday-elements">
          <div className="sunday-elements-child" />
          <div className="first-sunday-placeholder-wrapper">
            <div className="sunday-placeholder">10</div>
          </div>
          <div className="sunday-name">
            <div className="tuesday-container">
              <div className="tuesday1">Tuesday</div>
            </div>
            <div className="tuesday-row-inner">
              <img className="frame-child25" alt="" />
            </div>
            <div className="mahalaya">Ganesh Visarjan</div>
          </div>
        </div>
      </div>
    </div>
  );
};

DaysContainer.propTypes = {
  className: PropTypes.string,
};

export default DaysContainer;
