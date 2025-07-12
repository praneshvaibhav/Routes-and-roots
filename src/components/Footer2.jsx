import { useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./Footer2.css";

const Footer2 = ({
  className = "",
  propBackgroundImage,
  propBackgroundImage1,
  propBackgroundImage2,
  instagram,
  instagram1,
}) => {
  const frameDiv2Style = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  const frameDiv3Style = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage1,
    };
  }, [propBackgroundImage1]);

  const frameDiv4Style = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage2,
    };
  }, [propBackgroundImage2]);

  const navigate = useNavigate();

  const onEVisaTextClick = useCallback(() => {
    navigate("/desktop-e-visa");
  }, [navigate]);

  return (
    <footer className={`footer4 ${className}`}>
      <div className="footer-content1">
        <div className="footer-content-child" />
        <div className="footer-links1">
          <div className="link-columns-parent">
            <div className="link-columns">
              <div className="about-us17">{`About us `}</div>
              <div className="about-us18">{`About us `}</div>
            </div>
            <div className="link-columns1">
              <div className="about-us17">FAQ’s</div>
              <div className="about-us18">FAQ’s</div>
            </div>
            <div className="link-columns2">
              <div className="about-us17">{`e-Visa `}</div>
              <div
                className="e-visa14"
                onClick={onEVisaTextClick}
              >{`e-Visa `}</div>
            </div>
            <div className="link-columns3">
              <div className="terms-condition13">{`Terms & Condition`}</div>
              <div className="terms-condition14">{`Terms & Condition`}</div>
            </div>
          </div>
        </div>
        <div className="additional-links">
          <div className="frame-parent54">
            <div className="footer-links1">
              <div className="frame-parent55">
                <div className="link-columns">
                  <div className="about-us17">complain</div>
                  <div className="about-us18">complain</div>
                </div>
                <div className="privacy-policy-parent">
                  <div className="about-us17">Privacy Policy</div>
                  <div className="privacy-policy14">Privacy Policy</div>
                </div>
              </div>
            </div>
            <div className="frame-parent56">
              <div className="frame-wrapper19">
                <div className="connect-with-us-parent">
                  <div className="terms-condition13">Connect with us :</div>
                  <div className="connect-with-us14">Connect with us :</div>
                </div>
              </div>
              <div className="frame-parent57">
                <div className="frame-wrapper20">
                  <div className="facebook-parent" style={frameDiv2Style}>
                    <img
                      className="facebook-icon4"
                      alt=""
                      src="/facebook@2x.png"
                    />
                    <img
                      className="facebook-icon5"
                      loading="lazy"
                      alt=""
                      src="/facebook@2x.png"
                    />
                  </div>
                </div>
                <div className="frame-wrapper21">
                  <div className="facebook-parent" style={frameDiv3Style}>
                    <img
                      className="facebook-icon4"
                      alt=""
                      src="/twitterx@2x.png"
                    />
                    <img
                      className="facebook-icon5"
                      loading="lazy"
                      alt=""
                      src="/twitterx@2x.png"
                    />
                  </div>
                </div>
                <div className="instagram-parent" style={frameDiv4Style}>
                  <img className="instagram-icon14" alt="" src={instagram} />
                  <img
                    className="instagram-icon15"
                    loading="lazy"
                    alt=""
                    src={instagram1}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="career-help-center">
            <div className="about-us17">Careers</div>
            <div className="about-us18">Careers</div>
          </div>
          <div className="career-help-center1">
            <div className="about-us17">Help center</div>
            <div className="help-center14">Help center</div>
          </div>
        </div>
      </div>
      <div className="copyright-2024-rootsroutes-parent">
        <div className="copyright-2024-rootsroutes3">{`Copyright    2024 Roots&Routes.`}</div>
        <div className="copyright-2024-rootsroutes-group">
          <div className="copyright-2024-rootsroutes4">{`Copyright    2024 Roots&Routes.`}</div>
          <div className="copyright-all-rights-reserved-parent">
            <img
              className="copyright-all-rights-reserved14"
              alt=""
              src="/copyright-all-rights-reserved@2x.png"
            />
            <img
              className="copyright-all-rights-reserved15"
              loading="lazy"
              alt=""
              src="/copyright-all-rights-reserved@2x.png"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer2.propTypes = {
  className: PropTypes.string,
  instagram: PropTypes.string,
  instagram1: PropTypes.string,

  /** Style props */
  propBackgroundImage: PropTypes.any,
  propBackgroundImage1: PropTypes.any,
  propBackgroundImage2: PropTypes.any,
};

export default Footer2;
