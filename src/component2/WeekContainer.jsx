import DayNamesRow from "./DayNamesRow";
import DayElements from "./DayElements";
import DayName from "./DayName";
import SaturdayDateInner from "./SaturdayDateInner";
import FrameComponent11 from "./FrameComponent11";
import VamanJayantiContainer from "./VamanJayantiContainer";
import CalendarDay from "./CalendarDay";
import PropTypes from "prop-types";
import "./WeekContainer.css";

const WeekContainer = ({ className = "" }) => {
  return (
    <div className={`week-container1 ${className}`}>
      <div className="weekdays">
        <div className="first-half">
          <DayNamesRow
            propWidth="unset"
            propAlignSelf="stretch"
            line34="pending_1064:741"
            line35="pending_1064:743"
          />
        </div>
        <div className="thursday-elements-wrapper">
          <DayElements
            propAlignSelf="unset"
            propWidth="236px"
            line36="pending_1064:747"
            line37="pending_1064:749"
          />
        </div>
        <div className="friday-elements-wrapper">
          <div className="friday-elements">
            <div className="friday-elements-child" />
            <div className="placeholder-frame">
              <div className="placeholder5">13</div>
            </div>
            <div className="hartalika-teej1">Hartalika Teej</div>
            <DayName dayNameSeparator="pending_1064:754" propBottom="11px" />
            <div className="frame-parent44">
              <div className="line-wrapper3">
                <img className="frame-child31" loading="lazy" alt="" />
              </div>
              <div className="text1">{` `}</div>
            </div>
          </div>
        </div>
        <SaturdayDateInner
          propAlignSelf="unset"
          propFlex="unset"
          propHeight="245px"
          propWidth="236px"
          line40="pending_1064:762"
          thursdayDateInfo="pending_1064:765"
        />
        <FrameComponent11
          sundaySemiColon="15"
          sunday="Sunday"
          line43="pending_1064:773"
          kanyaSankrantiFriday="pending_1064:770"
          kanyaSankranti=" Kanya Sankranti"
        />
      </div>
      <div className="weekdays1">
        <div className="weekdays-inner">
          <div className="rectangle-parent18">
            <div className="friday-elements-child" />
            <img className="frame-child33" alt="" />
            <div className="placeholder-wrapper1">
              <div className="placeholder6">16</div>
            </div>
            <VamanJayantiContainer vamanJayantiSeparator="pending_1064:816" />
          </div>
        </div>
        <div className="weekdays-child">
          <div className="rectangle-parent19">
            <div className="frame-child34" />
            <img className="frame-child35" alt="" />
            <div className="frame-wrapper16">
              <div className="tuesday-placeholder-parent">
                <div className="tuesday-placeholder">
                  <div className="placeholder5">17</div>
                </div>
                <div className="placeholder-container1">
                  <div className="placeholder8">1</div>
                  <div className="tuesday3">Tuesday</div>
                </div>
              </div>
            </div>
            <div className="line-wrapper3">
              <img className="frame-child31" loading="lazy" alt="" />
            </div>
            <div className="vishwakarma-puja"> Vishwakarma Puja</div>
          </div>
        </div>
        <div className="weekdays-inner1">
          <div className="rectangle-parent20">
            <div className="friday-elements-child" />
            <img className="frame-child35" alt="" />
            <div className="placeholder-wrapper2">
              <div className="placeholder5">18</div>
            </div>
            <div className="frame-parent45">
              <div className="parent">
                <div className="div50">1</div>
                <div className="tuesday3">Wednesday</div>
              </div>
              <div className="line-wrapper5">
                <img className="frame-child31" loading="lazy" alt="" />
              </div>
              <div className="pitru-paksha1">
                <div className="pitru-paksha2">Pitru Paksha</div>
              </div>
            </div>
          </div>
        </div>
        <FrameComponent11
          sundaySemiColon="19"
          sunday="Thursday"
          line43="pending_1064:783"
          kanyaSankrantiFriday="pending_1064:786"
          kanyaSankranti="Bhagat Singh Jayanti"
        />
        <CalendarDay
          propAlignSelf="unset"
          propWidth="236px"
          date="20"
          dayName="pending_1064:777"
          monday="Friday"
          line24="pending_1064:779"
          ganeshVisarjan="Bhadrapada Amavasya"
          propHeight="unset"
          propDisplay="unset"
        />
      </div>
    </div>
  );
};

WeekContainer.propTypes = {
  className: PropTypes.string,
};

export default WeekContainer;
