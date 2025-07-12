import { useMemo } from "react";
import PropTypes from "prop-types";
import "./ContentSeparator.css";

const ContentSeparator = ({
  className = "",
  propWidth,
  propAlignSelf,
  propFlex,
  propWidth1,
  contentDivider,
}) => {
  const contentSeparatorStyle = useMemo(() => {
    return {
      width: propWidth,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propAlignSelf]);

  const dividerContainerStyle = useMemo(() => {
    return {
      flex: propFlex,
      width: propWidth1,
    };
  }, [propFlex, propWidth1]);

  return (
    <div
      className={`content-separator ${className}`}
      style={contentSeparatorStyle}
    >
      <div className="divider-container" style={dividerContainerStyle}>
        <img
          className="content-divider-icon1"
          loading="lazy"
          alt=""
          src={contentDivider}
        />
        <div className="footer-description">
          <div className="the-taj-mahal-container">
            <p className="as-you-stroll">
              The Taj Mahal, an iconic symbol of love and architectural
              brilliance, stands majestically on the banks of the Yamuna River
              in Agra, India. This UNESCO World Heritage Site, built by Emperor
              Shah Jahan in the 17th century, is a testament to eternal love and
              artistic mastery. Its ethereal white marble façade, adorned with
              intricate inlay work of precious stones, captivates visitors with
              its elegance and grandeur. The Taj Mahal's symmetrical gardens,
              reflective pools, and towering minarets create a serene and
              enchanting atmosphere that leaves a lasting impression.
            </p>
            <p className="as-you-stroll">&nbsp;</p>
            <p className="as-you-stroll">
              As you stroll through the lush gardens and gaze upon the
              shimmering marble dome, you’ll feel a profound sense of
              tranquility and awe. The intricate craftsmanship of the marble
              carvings, coupled with the majestic dome's reflection in the
              surrounding pools, offers a glimpse into the opulent Mughal era.
              The Taj Mahal’s beauty is especially striking at sunrise and
              sunset, when the changing light transforms it into a breathtaking
              spectacle.
            </p>
            <p className="as-you-stroll">&nbsp;</p>
            <p className="as-you-stroll">
              Visiting the Taj Mahal is not just a visual feast but a journey
              into a romantic story enshrined in one of the world’s most
              exquisite monuments. It's a must-see experience that promises to
              leave you spellbound and deeply moved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

ContentSeparator.propTypes = {
  className: PropTypes.string,
  contentDivider: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propFlex: PropTypes.any,
  propWidth1: PropTypes.any,
};

export default ContentSeparator;
