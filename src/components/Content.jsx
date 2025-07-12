import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./Content.css";

const Content = ({ className = "" }) => {
  const navigate = useNavigate();

  const onClickareaClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <section className={`content5 ${className}`}>
      <div className="exploration">
        <div className="imagecontainer">
          <img
            className="screenshot-352-ai-brush-remo-icon15"
            alt=""
            src="/screenshot--352-aibrushremovebgtxorkjjb-1@2x.png"
          />
        </div>
      </div>
      <div className="description">
        <div className="description-child" />
        <div className="quote">
          <div className="slogan">
            <h1 className="never-stop6">Never Stop</h1>
          </div>
          <h1 className="exploring3">Exploring</h1>
        </div>
        <div className="travelinspiration">
          <div className="kerela">
            <div className="tradition1">
              <img
                className="kerela-tradition-13"
                loading="lazy"
                alt=""
                src="/kerela-tradition-1@2x.png"
              />
              <b className="indias-rich-culture-container3">
                <p className="indias-rich-culture3">
                  India's rich culture, a vibrant tapestry of traditions,
                </p>
                <p className="indias-rich-culture3">{` festivals, and diversity, offers an unforgettable `}</p>
                <p className="indias-rich-culture3">{`experience. From the colorful celebrations of Holi `}</p>
                <p className="indias-rich-culture3">
                  and Diwali to the spiritual serenity of temples and
                </p>
                <p className="indias-rich-culture3">{` historic monuments like the Taj Mahal, India `}</p>
                <p className="indias-rich-culture3">
                  captivates the soul. Explore its cuisine, art, and warm
                  hospitality—India awaits your discovery!
                </p>
              </b>
            </div>
            <div className="cta">
              <div className="button5">
                <div className="link">
                  <div className="link-child" />
                </div>
                <button className="action2">
                  <div className="clickarea" onClick={onClickareaClick} />
                  <b className="visit-now25">Visit now</b>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;
