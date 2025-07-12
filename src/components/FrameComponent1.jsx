import { useMemo } from "react";
import PropTypes from "prop-types";
import "./FrameComponent1.css";

const FrameComponent1 = ({
  className = "",
  frameDivAlignSelf,
  frameDivFlex,
  onEVisaTextClick,
  onFacebookImageClick,
  instagram,
}) => {
  const frameDiv10Style = useMemo(() => {
    return {
      alignSelf: frameDivAlignSelf,
      flex: frameDivFlex,
    };
  }, [frameDivAlignSelf, frameDivFlex]);

  return (
    <div className={`rectangle-parent39 ${className}`} style={frameDiv10Style}>
      <div className="frame-child66" />
      <div className="about-us-navigation1">
        <div className="about-us-links3">
          <div className="about-us27">{`About us `}</div>
          <div className="terms">
            <div className="faqs18">FAQ’s</div>
          </div>
          <div className="terms1">
            <div className="faqs18" onClick={onEVisaTextClick}>{`e-Visa `}</div>
          </div>
          <div className="terms-condition18">{`Terms & Condition`}</div>
        </div>
      </div>
      <div className="frame-parent91">
        <div className="complain-policy-group">
          <div className="about-us-navigation1">
            <div className="policies">
              <div className="about-us27">complain</div>
              <div className="privacy-policy18">Privacy Policy</div>
            </div>
          </div>
          <div className="frame-parent92">
            <div className="connect-with-us-container">
              <div className="connect-with-us19">Connect with us :</div>
            </div>
            <div className="social-links1">
              <div className="facebook-container">
                <img
                  className="facebook-icon11"
                  loading="lazy"
                  alt=""
                  src="/facebook@2x.png"
                  onClick={onFacebookImageClick}
                />
              </div>
              <div className="twitterx-container">
                <img
                  className="facebook-icon11"
                  loading="lazy"
                  alt=""
                  src="/twitterx@2x.png"
                />
              </div>
              <img
                className="instagram-icon19"
                loading="lazy"
                alt=""
                src={instagram}
              />
            </div>
          </div>
        </div>
        <div className="careers-container">
          <div className="faqs18">Careers</div>
        </div>
        <div className="help-center18">Help center</div>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
  instagram: PropTypes.string,

  /** Style props */
  frameDivAlignSelf: PropTypes.any,
  frameDivFlex: PropTypes.any,

  /** Action props */
  onEVisaTextClick: PropTypes.func,
  onFacebookImageClick: PropTypes.func,
};

export default FrameComponent1;
