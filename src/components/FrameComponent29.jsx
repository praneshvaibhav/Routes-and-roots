import SaturdayEvent from "./SaturdayEvent";
import FrameComponent10 from "./FrameComponent10";
import CalendarDay2 from "./CalendarDay2";
import CalendarDay1 from "./CalendarDay1";
import MondayDateInner from "./MondayDateInner";
import PropTypes from "prop-types";
import "./FrameComponent29.css";

const FrameComponent29 = ({ className = "" }) => {
  return (
    <div className={`frame-parent46 ${className}`}>
      <div className="saturday-parent">
        <div className="saturday">
          <SaturdayEvent
            propWidth="236px"
            propAlignSelf="unset"
            propWidth1="155px"
            saturdayEmptyCell="21"
            saturday="Saturday"
            samvatsariSeparator="pending_1064:830"
            secondSamvatsariSeparator="pending_1064:829"
            samvatsari="Samvatsari"
          />
          <FrameComponent10
            propWidth="unset"
            propFlexDirection="row"
            propAlignSelf="stretch"
            propPadding="0px 0px 0px 6px"
            propWidth1="unset"
            propFlex="1"
            firstMondayPlaceholderContent="26"
            monday="Thursday"
            line23="pending_1064:966"
            ganeshVisarjan="Navaratra"
            propAlignSelf1="unset"
            propWidth2="182px"
            mondayWeekSeparator="pending_1064:968"
          />
          <div className="rectangle-parent21">
            <div className="frame-child40" />
            <div className="frame">
              <div className="div51">31</div>
            </div>
            <div className="monday-parent">
              <div className="monday2">Monday</div>
              <img className="frame-child41" alt="" />
            </div>
            <div className="frame-parent47">
              <div className="line-wrapper6">
                <img className="frame-child42" loading="lazy" alt="" />
              </div>
              <div className="sharad-purnima">Sharad Purnima</div>
            </div>
          </div>
        </div>
        <div className="frame-parent48">
          <CalendarDay2
            propWidth="unset"
            propAlignSelf="stretch"
            line62="pending_1064:843"
            line63="pending_1064:846"
          />
          <CalendarDay1
            propAlignSelf="stretch"
            propWidth="unset"
            prop="27"
            saturday="Friday"
            line30="pending_1064:953"
            line31="pending_1064:951"
            kshamavani=" Maha Ashtami"
          />
        </div>
      </div>
      <div className="frame-parent49">
        <MondayDateInner
          mondayDaySeparator="pending_1064:862"
          mondayFestivalSeparator="pending_1064:860"
          line86="pending_1064:936"
          saturdayFestivalSeparator="pending_1064:938"
        />
        <div className="tuesday-container1">
          <div className="day-container">
            <div className="tuesday-content">
              <div className="tuesday-content-child" />
              <div className="empty">24</div>
              <img className="horizontal-divider-icon" alt="" />
              <div className="navaratra-mahotsav1">Navaratra Mahotsav</div>
              <div className="tuesday-sub-container">
                <div className="tuesday4">Tuesday</div>
                <div className="tuesday-sub-container-inner">
                  <img className="frame-child42" loading="lazy" alt="" />
                </div>
              </div>
            </div>
            <SaturdayEvent
              propWidth="unset"
              propAlignSelf="stretch"
              propWidth1="161px"
              saturdayEmptyCell="29"
              saturday="Sunday"
              samvatsariSeparator="pending_1064:923"
              secondSamvatsariSeparator="pending_1064:921"
              samvatsari=" Vijayadashami"
            />
          </div>
          <div className="wednesday-container">
            <div className="day-container1">
              <div className="day-container-child" />
              <div className="wednesday-content">
                <div className="div51">25</div>
              </div>
              <div className="wednesday-label">
                <div className="monday2">Wednesday</div>
              </div>
              <img className="horizontal-divider-icon1" alt="" />
              <div className="bathukamma1">Bathukamma</div>
              <div className="day-container-inner">
                <div className="frame-parent50">
                  <div className="line-wrapper6">
                    <img className="frame-child42" loading="lazy" alt="" />
                  </div>
                  <div className="placeholder10">{` `}</div>
                </div>
              </div>
            </div>
            <SaturdayEvent
              propWidth="unset"
              propAlignSelf="stretch"
              propWidth1="161px"
              saturdayEmptyCell="30"
              saturday="Monday"
              samvatsariSeparator="pending_1064:908"
              secondSamvatsariSeparator="pending_1064:906"
              samvatsari="Sharad Purnima"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent29.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent29;
