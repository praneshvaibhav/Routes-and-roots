import { useCallback } from "react";
import FrameComponent27 from "../components/FrameComponent27";
import WednesdayWeekRow from "../components/WednesdayWeekRow";
import FridayEvent from "../components/FridayEvent";
import DayNamesRow from "../components/DayNamesRow";
import VamanJayantiContainer from "../components/VamanJayantiContainer";
import SaturdayEvent from "../components/SaturdayEvent";
import CalendarDay from "../components/CalendarDay";
import CalendarDay1 from "../components/CalendarDay1";
import DayElements from "../components/DayElements";
import DateContainer from "../components/DateContainer";
import CalendarDay2 from "../components/CalendarDay2";
import { useNavigate } from "react-router-dom";
import FrameComponent7 from "../components/FrameComponent7";
import FrameComponent8 from "../components/FrameComponent8";
import FrameComponent9 from "../components/FrameComponent9";
import DayName from "../components/DayName";
import SaturdayDateInner from "../components/SaturdayDateInner";
import MondayDateInner from "../components/MondayDateInner";
import CalendarDayContainer from "../components/CalendarDayContainer";
import Footer1 from "../components/Footer1";
import "./DesktopCultureCalender.css";

const DesktopCultureCalender = () => {
  const navigate = useNavigate();

  const onFacebookImageClick = useCallback(() => {
    window.open(
      "https://www.facebook.com/profile.php?id=61551651067407&mibextid=ZbWKwL"
    );
  }, []);

  const onMonthBackgroundClick = useCallback(() => {
    navigate("/desktop-culture-calender-2");
  }, [navigate]);

  const onMultiplicationImageClick = useCallback(() => {
    navigate("/desktop-homepage");
  }, [navigate]);

  return (
    <div className="desktop-culture-calender">
      <main className="frame-parent15">
        <FrameComponent27 />
        <section className="frame-wrapper10">
          <div className="frame-parent16">
            <div className="september-calendar-wrapper">
              <div className="september-calendar">
                <div className="day-names-row">
                  <div className="day-names-row-child" />
                  <div className="first-week-row">
                    <div className="first-week-empty-cells">
                      <div className="first-empty-cell">1</div>
                      <div className="second-empty-cell">1</div>
                    </div>
                  </div>
                  <img className="first-week-separator" alt="" />
                  <WednesdayWeekRow wednesdaySeparator="pending_1064:304" />
                </div>
                <FridayEvent
                  fridayEmptyCell="6"
                  fridaySeparator="pending_1064:353"
                  friday="Friday"
                  radhastamiSeparator="pending_1064:357"
                  radhastami="Radhastami"
                />
                <DayNamesRow
                  line34="pending_1064:363"
                  line35="pending_1064:367"
                />
                <div className="monday-event">
                  <div className="monday-event-container">
                    <div className="day-names-row-child" />
                    <div className="first-week-row">
                      <div className="monday-empty-cell">16</div>
                    </div>
                    <VamanJayantiContainer vamanJayantiSeparator="pending_1064:453" />
                    <img
                      className="monday-event-separator"
                      loading="lazy"
                      alt=""
                    />
                  </div>
                </div>
                <SaturdayEvent
                  saturdayEmptyCell="21"
                  saturday="Saturday"
                  samvatsariSeparator="pending_1064:471"
                  secondSamvatsariSeparator="pending_1064:475"
                  samvatsari="Samvatsari"
                />
                <FridayEvent
                  propWidth="unset"
                  propAlignSelf="stretch"
                  propFlexDirection="row"
                  propFlex="1"
                  propAlignSelf1="unset"
                  fridayEmptyCell="26"
                  fridaySeparator="pending_1064:631"
                  friday="Thursday"
                  radhastamiSeparator="pending_1064:634"
                  radhastami="Navaratra"
                  propAlignSelf2="unset"
                  propWidth1="182px"
                />
              </div>
            </div>
            <div className="about-us-container-parent">
              <div className="about-us-container">
                <div className="about-us-container-inner">
                  <div className="about-us-parent">
                    <div className="about-us10">ABOUT US</div>
                    <div className="about-us-navigation">
                      <div className="navigation-buttons">
                        <div className="frame-child10" />
                        <img
                          className="prev-icon"
                          loading="lazy"
                          alt=""
                          src="/prev@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="october-calendar-container-wrapper">
                  <div className="october-calendar-container">
                    <CalendarDay
                      date="2"
                      dayName="pending_1064:309"
                      monday="Monday"
                      line24="pending_1064:313"
                      ganeshVisarjan="Ganesh Visarjan"
                    />
                    <CalendarDay1
                      prop="7"
                      saturday="Saturday"
                      line30="pending_1064:343"
                      line31="pending_1064:348"
                      kshamavani="Kshamavani"
                    />
                  </div>
                </div>
                <div className="calendar-day">
                  <div className="october-calendar-container">
                    <DayElements
                      line36="pending_1064:372"
                      line37="pending_1064:376"
                    />
                    <div className="day-elements">
                      <DateContainer
                        dateElements="17"
                        line50="pending_1064:435"
                        tuesday="Tuesday"
                        line51="pending_1064:439"
                        vishwakarmaPuja=" Vishwakarma Puja"
                      />
                    </div>
                  </div>
                </div>
                <CalendarDay2
                  line62="pending_1064:489"
                  line63="pending_1064:493"
                />
                <CalendarDay1
                  propAlignSelf="unset"
                  propWidth="236px"
                  prop="27"
                  saturday="Friday"
                  line30="pending_1064:617"
                  line31="pending_1064:614"
                  kshamavani=" Maha Ashtami"
                />
              </div>
              <div className="calendar-day1">
                <div className="day-details1">
                  <div className="navigation">
                    <div className="navigation-items">
                      <div className="shop">SHOP</div>
                    </div>
                    <div className="destnations">DESTNATIONS</div>
                    <div className="calendar-info">
                      <div className="culture-calender">{`CULTURE CALENDER `}</div>
                      <img
                        className="expand-arrow-icon"
                        loading="lazy"
                        alt=""
                        src="/expand-arrow@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="calendar-controls">
                  <div className="month-navigation">
                    <div className="month-container">
                      <div className="september-2024">September, 2024</div>
                    </div>
                    <div className="navigation-buttons">
                      <div
                        className="month-background"
                        onClick={onMonthBackgroundClick}
                      />
                      <img
                        className="right-button-icon"
                        loading="lazy"
                        alt=""
                        src="/group-2@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="calendar-grid">
                  <div className="calendar-days">
                    <div className="calendar-week">
                      <FrameComponent7
                        date="3"
                        tuesday="Tuesday"
                        line21="pending_1064:299"
                        onam=" Onam"
                      />
                      <FrameComponent8
                        date="8"
                        sunday="Sunday"
                        line29="pending_1064:338"
                        mahalaya=" Mahalaya"
                      />
                    </div>
                    <div className="calendar-week">
                      <FrameComponent9 line25="pending_1064:318" />
                      <div className="calendar-week-inner">
                        <div className="rectangle-parent7">
                          <div className="day-names-row-child" />
                          <div className="first-week-row">
                            <div className="empty-day">9</div>
                          </div>
                          <div className="monday-wrapper">
                            <div className="monday">Monday</div>
                          </div>
                          <div className="frame-parent17">
                            <div className="friday-date-wrapper">
                              <img
                                className="friday-date-icon"
                                loading="lazy"
                                alt=""
                              />
                            </div>
                            <div className="jivitputrika">Jivitputrika</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="date-container">
                  <div className="calendar-days">
                    <div className="date-content">
                      <div className="date-layout">
                        <div className="day-names-row-child" />
                        <div className="first-week-row">
                          <div className="day-icon-image">13</div>
                        </div>
                        <DayName dayNameSeparator="pending_1064:385" />
                        <div className="festival-name">
                          <div className="festival-name-container">
                            <div className="friday-date-wrapper">
                              <img
                                className="friday-date-icon"
                                loading="lazy"
                                alt=""
                              />
                            </div>
                            <div className="jivitputrika">Hartalika Teej</div>
                          </div>
                          <div className="festival-description">{` `}</div>
                        </div>
                      </div>
                      <div className="calendar-week-inner">
                        <div className="wednesday-date-inner">
                          <div className="day-names-row-child" />
                          <div className="wednesday-date-content">
                            <div className="wednesday-day-icon">
                              <div className="empty-day">1</div>
                              <div className="wednesday-day-icon2">18</div>
                            </div>
                          </div>
                          <div className="wednesday-day-info">
                            <div className="wednesday">Wednesday</div>
                            <div className="wednesday-day-separator">
                              <img className="friday-date-icon" alt="" />
                            </div>
                            <div className="wednesday-festival">
                              <div className="pitru-paksha">Pitru Paksha</div>
                            </div>
                          </div>
                          <img
                            className="date-separator-icon"
                            loading="lazy"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="saturday-date-container">
                      <SaturdayDateInner
                        line40="pending_1064:390"
                        thursdayDateInfo="pending_1064:394"
                      />
                      <DateContainer
                        propFlex="unset"
                        propAlignSelf="stretch"
                        dateElements="19"
                        line50="pending_1064:417"
                        tuesday="Thursday"
                        line51="pending_1064:421"
                        vishwakarmaPuja="Bhagat Singh Jayanti"
                      />
                    </div>
                  </div>
                </div>
                <div className="monday-date">
                  <MondayDateInner
                    mondayDaySeparator="pending_1064:511"
                    mondayFestivalSeparator="pending_1064:507"
                    line86="pending_1064:597"
                    saturdayFestivalSeparator="pending_1064:600"
                  />
                  <div className="tuesday-date-container">
                    <div className="tuesday-date-inner">
                      <div className="tuesday-date-inner-child" />
                      <div className="tuesday-icon">24</div>
                      <div className="tuesday-info">
                        <div className="tuesday">Tuesday</div>
                        <div className="tuesday-day-separator-containe">
                          <img className="tuesday-separator-icon" alt="" />
                        </div>
                      </div>
                      <div className="navaratra-mahotsav">
                        Navaratra Mahotsav
                      </div>
                      <img
                        className="tuesday-date-separator"
                        loading="lazy"
                        alt=""
                      />
                    </div>
                    <SaturdayEvent
                      propWidth="unset"
                      propAlignSelf="stretch"
                      propWidth1="161px"
                      saturdayEmptyCell="29"
                      saturday="Sunday"
                      samvatsariSeparator="pending_1064:583"
                      secondSamvatsariSeparator="pending_1064:580"
                      samvatsari=" Vijayadashami"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="item-container">
              <div className="item-inner-container">
                <div className="item-content">
                  <div className="item-details">
                    <div className="item-details-child" />
                    <div className="items1">0 Items</div>
                    <div className="item-separator-container">
                      <div className="item-separator" />
                    </div>
                    <div className="rs00-wrapper">
                      <div className="rs00">Rs.00</div>
                    </div>
                  </div>
                  <img
                    className="multiplication-icon"
                    loading="lazy"
                    alt=""
                    src="/multiplication1@2x.png"
                    onClick={onMultiplicationImageClick}
                  />
                </div>
                <div className="september-calendar-day">
                  <CalendarDayContainer eventSeparator="pending_1064:323" />
                  <FrameComponent8
                    date="10"
                    sunday="Tuesday"
                    line29="pending_1064:328"
                    mahalaya="Ganesh Visarjan"
                  />
                </div>
                <div className="september-calendar-day1">
                  <div className="october-calendar-container">
                    <div className="calendar-days1">
                      <div className="day-names-row-child" />
                      <div className="first-week-row">
                        <div className="wednesday-day-icon">
                          <div className="empty-day">1</div>
                          <div className="wednesday-day-icon2">15</div>
                        </div>
                      </div>
                      <div className="wednesday-day-info">
                        <div className="sunday-label">
                          <div className="monday">Sunday</div>
                        </div>
                        <div className="friday-date-wrapper">
                          <img className="friday-date-icon" alt="" />
                        </div>
                        <div className="kanya-sankranti"> Kanya Sankranti</div>
                      </div>
                      <img
                        className="date-separator-icon"
                        loading="lazy"
                        alt=""
                      />
                    </div>
                    <CalendarDay
                      propAlignSelf="stretch"
                      propWidth="unset"
                      date="20"
                      dayName="pending_1064:408"
                      monday="Friday"
                      line24="pending_1064:412"
                      ganeshVisarjan="Bhadrapada Amavasya"
                      propHeight="unset"
                      propDisplay="unset"
                    />
                  </div>
                </div>
                <div className="september-calendar-day2">
                  <div className="calendar-day-container1">
                    <div className="calendar-day-container-child" />
                    <div className="date-placeholder-wrapper">
                      <div className="date-placeholder">25</div>
                    </div>
                    <div className="weekday-name">
                      <div className="wednesday1">Wednesday</div>
                      <img className="weekday-name-child" alt="" />
                    </div>
                    <div className="event-container">
                      <div className="wednesday-day-icon">
                        <div className="bathukamma">Bathukamma</div>
                        <div className="sub-event-container">
                          <div className="friday-date-wrapper">
                            <img
                              className="tuesday-separator-icon"
                              loading="lazy"
                              alt=""
                            />
                          </div>
                          <div className="sub-event-label">{` `}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <SaturdayEvent
                  propWidth="274px"
                  propAlignSelf="unset"
                  propWidth1="161px"
                  saturdayEmptyCell="30"
                  saturday="Monday"
                  samvatsariSeparator="pending_1064:566"
                  secondSamvatsariSeparator="pending_1064:563"
                  samvatsari="Sharad Purnima"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="calendar-day-container-child" />
      <div className="div27">1</div>
      <div className="sunday25">Sunday</div>
      <img className="desktop-culture-calender-item" alt="" />
      <div className="ganesh-chaturthi24">Ganesh Chaturthi</div>
      <div className="div27">1</div>
      <div className="sunday25">Sunday</div>
      <img className="desktop-culture-calender-item" alt="" />
      <div className="ganesh-chaturthi24">Ganesh Chaturthi</div>
      <div className="calendar-day-container-child" />
      <div className="div27">1</div>
      <div className="sunday25">Sunday</div>
      <img className="desktop-culture-calender-item" alt="" />
      <div className="ganesh-chaturthi24">Ganesh Chaturthi</div>
      <div className="div27">1</div>
      <div className="sunday25">Sunday</div>
      <img className="desktop-culture-calender-item" alt="" />
      <div className="ganesh-chaturthi24">Ganesh Chaturthi</div>
      <div className="calendar-day-container-child" />
      <div className="div27">1</div>
      <div className="sunday25">Sunday</div>
      <img className="desktop-culture-calender-item" alt="" />
      <div className="ganesh-chaturthi24">Ganesh Chaturthi</div>
      <div className="div27">1</div>
      <div className="sunday25">Sunday</div>
      <img className="desktop-culture-calender-item" alt="" />
      <div className="ganesh-chaturthi24">Ganesh Chaturthi</div>
      <div className="calendar-day-container-child" />
      <div className="div27">1</div>
      <div className="sunday25">Sunday</div>
      <img className="desktop-culture-calender-item" alt="" />
      <div className="ganesh-chaturthi24">Ganesh Chaturthi</div>
      <div className="div27">1</div>
      <div className="sunday25">Sunday</div>
      <img className="desktop-culture-calender-item" alt="" />
      <div className="ganesh-chaturthi24">Ganesh Chaturthi</div>
      <div className="calendar-day-container-child" />
      <div className="div27">1</div>
      <div className="sunday25">Sunday</div>
      <img className="desktop-culture-calender-item" alt="" />
      <div className="ganesh-chaturthi24">Ganesh Chaturthi</div>
      <div className="div27">1</div>
      <div className="sunday25">Sunday</div>
      <img className="desktop-culture-calender-item" alt="" />
      <div className="ganesh-chaturthi24">Ganesh Chaturthi</div>
      <div className="calendar-day-container-child" />
      <div className="div27">1</div>
      <div className="sunday25">Sunday</div>
      <img className="desktop-culture-calender-item" alt="" />
      <div className="ganesh-chaturthi24">Ganesh Chaturthi</div>
      <div className="div27">1</div>
      <div className="sunday25">Sunday</div>
      <img className="desktop-culture-calender-item" alt="" />
      <div className="ganesh-chaturthi24">Ganesh Chaturthi</div>
      <div className="calendar-day-container-child" />
      <div className="div27">1</div>
      <div className="sunday25">Sunday</div>
      <img className="desktop-culture-calender-item" alt="" />
      <div className="ganesh-chaturthi24">Ganesh Chaturthi</div>
      <div className="div27">1</div>
      <div className="sunday25">Sunday</div>
      <img className="desktop-culture-calender-item" alt="" />
      <div className="ganesh-chaturthi24">Ganesh Chaturthi</div>
      <div className="calendar-day-container-child" />
      <div className="div27">1</div>
      <div className="sunday25">Sunday</div>
      <img className="desktop-culture-calender-item" alt="" />
      <div className="ganesh-chaturthi24">Ganesh Chaturthi</div>
      <div className="div27">1</div>
      <div className="sunday25">Sunday</div>
      <img className="desktop-culture-calender-item" alt="" />
      <div className="ganesh-chaturthi24">Ganesh Chaturthi</div>
      <div className="calendar-day-container-child" />
      <div className="div27">1</div>
      <div className="sunday25">Sunday</div>
      <img className="desktop-culture-calender-item" alt="" />
      <div className="ganesh-chaturthi24">Ganesh Chaturthi</div>
      <div className="div27">1</div>
      <div className="sunday25">Sunday</div>
      <img className="desktop-culture-calender-item" alt="" />
      <div className="ganesh-chaturthi24">Ganesh Chaturthi</div>
      <div className="calendar-day-container-child" />
      <div className="div27">1</div>
      <div className="sunday25">Sunday</div>
      <img className="desktop-culture-calender-item" alt="" />
      <div className="ganesh-chaturthi24">Ganesh Chaturthi</div>
      <div className="div27">1</div>
      <div className="sunday25">Sunday</div>
      <img className="desktop-culture-calender-item" alt="" />
      <div className="ganesh-chaturthi24">Ganesh Chaturthi</div>
      <div className="calendar-day-container-child" />
      <div className="div27">1</div>
      <div className="sunday25">Sunday</div>
      <img className="desktop-culture-calender-item" alt="" />
      <div className="ganesh-chaturthi24">Ganesh Chaturthi</div>
      <div className="div27">1</div>
      <div className="sunday25">Sunday</div>
      <img className="desktop-culture-calender-item" alt="" />
      <div className="ganesh-chaturthi24">Ganesh Chaturthi</div>
      <Footer1
        propPadding="0px 0px 0px 6px"
        propTextDecoration="unset"
        onFacebookImageClick={onFacebookImageClick}
        instagram="/instagram@2x.png"
        propTextDecoration1="unset"
        propWidth="639px"
      />
    </div>
  );
};

export default DesktopCultureCalender;
