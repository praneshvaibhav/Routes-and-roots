import { useCallback } from "react";
import User1 from "./User1";
import HeritageIcons from "./HeritageIcons";
import HeritageIcons2 from "./HeritageIcons2";
import { useNavigate } from "react-router-dom";
import HeritageIcons3 from "./HeritageIcons3";
import PropTypes from "prop-types";
import "./Content1.css";

const Content1 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/spritiual");
  }, [navigate]);

  const onRectangleClick1 = useCallback(() => {
    navigate("/museums");
  }, [navigate]);

  return (
    <section className={`content7 ${className}`}>
      <div className="testimonial2">
        <User1
          image="/ellipse-4@2x.png"
          avatar="/ellipse-5@2x.png"
          line11="/line-11.svg"
          account="/account@2x.png"
          line12="/line-11.svg"
        />
        <div className="separator2">
          <div className="divider-wrapper">
            <img className="divider-icon" loading="lazy" alt="" />
          </div>
          <div className="heritage-categories1">
            <HeritageIcons heritage1="/heritage-4@2x.png" />
            <HeritageIcons2 iNDIANART1="/indian-art-4@2x.png" />
            <div className="heritage-icons5">
              <div
                className="heritage-icons-child2"
                onClick={onRectangleClick}
              />
              <img
                className="spritiual-1-icon4"
                loading="lazy"
                alt=""
                src="/spritiual-4@2x.png"
              />
              <div className="spiritual-parent5">
                <div className="spiritual7">SPIRITUAL</div>
                <div className="inner-peace-arises7">
                  Inner peace arises from deep spiritual understanding.
                </div>
              </div>
            </div>
            <HeritageIcons3 bestIndianWildlifePhotographers="/bestindianwildlifephotographers01-4@2x.png" />
            <div className="heritage-icons6">
              <div
                className="heritage-icons-child3"
                onClick={onRectangleClick1}
              />
              <img
                className="museum-mobile-414x233-1-icon4"
                loading="lazy"
                alt=""
                src="/museummobile414x233-4@2x.png"
              />
              <div className="museums-parent5">
                <div className="museums9">MUSEUMS</div>
                <div className="inner-peace-arises7">
                  Preserving history, inspiring future generations.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Content1.propTypes = {
  className: PropTypes.string,
};

export default Content1;
