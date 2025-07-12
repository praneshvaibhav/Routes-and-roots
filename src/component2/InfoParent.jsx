import { useCallback } from "react";
import InfoSignIn from "./InfoSignIn";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./InfoParent.css";

const InfoParent = ({ className = "" }) => {
  const navigate = useNavigate();

  const onABOUTUSTextClick = useCallback(() => {
    navigate("/desktop-about-us");
  }, [navigate]);

  const onCULTURECALENDERTextClick = useCallback(() => {
    navigate("/desktop-culture-calender");
  }, [navigate]);

  const onRectangleClick = useCallback(() => {
    navigate("/desktop-homepage");
  }, [navigate]);

  return (
    <header className={`info-parent ${className}`}>
      <InfoSignIn
        propAlignSelf="stretch"
        propPosition="relative"
        propTop="unset"
        propLeft="unset"
        propBackgroundImage="unset"
      />
      <div className="nav-links-parent">
        <div className="nav-link-parent">
          <nav className="nav-links">
            <div className="home-parent1">
              <a className="home7">HOME</a>
              <img
                className="expand-arrow-icon7"
                loading="lazy"
                alt=""
                src="/expand-arrow@2x.png"
              />
            </div>
            <div className="about-us-frame">
              <div className="about-us29" onClick={onABOUTUSTextClick}>
                ABOUT US
              </div>
            </div>
            <div className="about-us-frame">
              <div className="shop8">SHOP</div>
            </div>
            <div className="destnations8">DESTNATIONS</div>
          </nav>
          <div className="calendar-parent">
            <div className="culture-calender-group">
              <div
                className="culture-calender8"
                onClick={onCULTURECALENDERTextClick}
              >{`CULTURE CALENDER `}</div>
              <div className="items-parent">
                <div className="cart-parent">
                  <div className="cart-parent-child" />
                  <div className="items8">0 Items</div>
                  <div className="cart-parent-inner">
                    <div className="frame-child69" />
                  </div>
                  <div className="rupees-parent">
                    <div className="rs008">Rs.00</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="states-parent1">
              <div className="state-image-parent-parent">
                <div className="state-image-parent">
                  <div className="state-and-territories-parent">
                    <div className="state-and-territories">
                      State and territories
                    </div>
                    <div className="rectangle-parent42">
                      <div className="frame-child70" />
                      <div
                        className="frame-child71"
                        onClick={onRectangleClick}
                      />
                    </div>
                  </div>
                  <img
                    className="multiplication-icon9"
                    alt=""
                    src="/multiplication3@2x.png"
                  />
                </div>
                <div className="andhra-parent">
                  <div className="andhra-parent-child" />
                  <div className="div64">
                    <span>1</span>
                    <span className="span21">.</span>
                  </div>
                  <div className="andhra-pradesh">
                    <span>Andhra</span>
                    <span className="span22">{` `}</span>
                    <span>Pradesh</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

InfoParent.propTypes = {
  className: PropTypes.string,
};

export default InfoParent;
