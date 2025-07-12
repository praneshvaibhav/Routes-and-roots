import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./FrameComponent23.css";

const FrameComponent23 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onMultiplicationImageClick = useCallback(() => {
    navigate("/desktop-homepage");
  }, [navigate]);

  return (
    <section className={`frame-parent76 ${className}`}>
      <div className="image-container-wrapper">
        <div className="image-container2">
          <img
            className="screenshot-352-ai-brush-remo-icon11"
            alt=""
            src="/screenshot--352-aibrushremovebgtxorkjjb-1@2x.png"
          />
        </div>
      </div>
      <div className="rectangle-parent29">
        <div className="frame-child55" />
        <div className="slogan-container-parent">
          <div className="slogan-container">
            <h1 className="never-stop4">Never Stop</h1>
          </div>
          <h1 className="exploring1">Exploring</h1>
        </div>
        <div className="frame-wrapper24">
          <div className="frame-parent77">
            <div className="kerela-tradition-1-parent">
              <img
                className="kerela-tradition-11"
                loading="lazy"
                alt=""
                src="/kerela-tradition-1@2x.png"
              />
              <b className="indias-rich-culture-container1">
                <p className="festivals-and-diversity">
                  India's rich culture, a vibrant tapestry of traditions,
                </p>
                <p className="festivals-and-diversity">{` festivals, and diversity, offers an unforgettable `}</p>
                <p className="festivals-and-diversity">{`experience. From the colorful celebrations of Holi `}</p>
                <p className="festivals-and-diversity">
                  and Diwali to the spiritual serenity of temples and
                </p>
                <p className="festivals-and-diversity">{` historic monuments like the Taj Mahal, India `}</p>
                <p className="festivals-and-diversity">
                  captivates the soul. Explore its cuisine, art, and warm
                  hospitality—India awaits your discovery!
                </p>
              </b>
            </div>
            <div className="visit-button-wrapper">
              <div className="visit-button1">
                <div className="button-container1">
                  <div className="button-container-child" />
                </div>
                <button className="rectangle-parent30">
                  <div className="frame-child56" />
                  <b className="visit-now13">Visit now</b>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rectangle-parent31">
        <div className="frame-child57" />
        <div className="language-select">
          <img className="language-divider-icon" loading="lazy" alt="" />
          <a className="language1">Language</a>
          <img
            className="multiplication-icon6"
            loading="lazy"
            alt=""
            src="/multiplication2@2x.png"
            onClick={onMultiplicationImageClick}
          />
        </div>
        <div className="english-mandarin-spanish-hindi-wrapper">
          <div className="english-mandarin-spanish-container">
            <p className="english">{`English  `}</p>
            <p className="english">{`Mandarin  `}</p>
            <p className="english">{`Spanish  `}</p>
            <p className="english">{`Hindi  `}</p>
            <p className="english">{`French  `}</p>
            <p className="english">{`Arabic  `}</p>
            <p className="english">{`Bengali  `}</p>
            <p className="english">{`Russian  `}</p>
            <p className="english">{`Portuguese  `}</p>
            <p className="english">{`Indonesian  `}</p>
            <p className="english">{`Urdu  `}</p>
            <p className="english">{`German  `}</p>
            <p className="english">{`Japanese  `}</p>
            <p className="english">{`Swahili  `}</p>
            <p className="english">{`Marathi  `}</p>
            <p className="english">{`Telugu  `}</p>
            <p className="english">{`Turkish  `}</p>
            <p className="english">{`Tamil  `}</p>
            <p className="english">{`Korean  `}</p>
            <p className="english">{`Vietnamese  `}</p>
            <p className="english">{`Italian  `}</p>
            <p className="english">{`Polish  `}</p>
            <p className="english">{`Kannada  `}</p>
            <p className="english">{`Gujarati  `}</p>
            <p className="english">{`Persian  `}</p>
            <p className="english">{`Ukrainian  `}</p>
            <p className="english">{`Malay  `}</p>
            <p className="english">{`Romanian  `}</p>
            <p className="english">{`Dutch  `}</p>
            <p className="english">{`Tagalog  `}</p>
            <p className="english">{`Thai  `}</p>
            <p className="english">{`Pashto  `}</p>
            <p className="english">{`Hausa  `}</p>
            <p className="english">{`Greek  `}</p>
            <p className="english">{`Czech  `}</p>
            <p className="english">{`Hungarian  `}</p>
            <p className="english">{`Swedish  `}</p>
            <p className="english">{`Javanese  `}</p>
            <p className="english">{`Somali  `}</p>
            <p className="english">{`Bulgarian  `}</p>
            <p className="english">{`Amharic  `}</p>
            <p className="english">{`Hebrew  `}</p>
            <p className="english">{`Nepali  `}</p>
            <p className="english">{`Finnish  `}</p>
            <p className="english">{`Serbian  `}</p>
            <p className="english">{`Norwegian  `}</p>
            <p className="english">{`Danish  `}</p>
            <p className="english">{`Sinhala  `}</p>
            <p className="english">{`Khmer  `}</p>
            <p className="english">{`Uzbek  `}</p>
            <p className="festivals-and-diversity">Armenian</p>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent23.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent23;
