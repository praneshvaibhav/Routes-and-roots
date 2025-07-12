import { useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./Footer3.css";

const Footer3 = ({
  className = "",
  propBackgroundImage,
  propBackgroundImage1,
  propBackgroundImage2,
  instagram,
  instagram1,
}) => {
  const facebookStyle = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  const twitterStyle = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage1,
    };
  }, [propBackgroundImage1]);

  const instagramIconStyle = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage2,
    };
  }, [propBackgroundImage2]);

  const navigate = useNavigate();

  const onEVisaTextClick = useCallback(() => {
    navigate("/desktop-e-visa");
  }, [navigate]);

  return (
    <footer className={`footer2 ${className}`}>
      <div className="footer-links">
        <div className="footer-links-child" />
        <div className="links-column">
          <div className="links-parent">
            <div className="links">
              <div className="about-us12">{`About us `}</div>
              <div className="about-us13">{`About us `}</div>
            </div>
            <div className="links1">
              <div className="about-us12">FAQ’s</div>
              <div className="about-us13">FAQ’s</div>
            </div>
            <div className="links2">
              <div className="about-us12">{`e-Visa `}</div>
              <div
                className="e-visa12"
                onClick={onEVisaTextClick}
              >{`e-Visa `}</div>
            </div>
            <div className="links3">
              <div className="terms-condition11">{`Terms & Condition`}</div>
              <div className="terms-condition12">{`Terms & Condition`}</div>
            </div>
          </div>
        </div>
        <div className="links-column1">
          <div className="links-column2">
            <div className="links-column">
              <div className="links4">
                <div className="links">
                  <div className="about-us12">complain</div>
                  <div className="about-us13">complain</div>
                </div>
                <div className="complain14">
                  <div className="about-us12">Privacy Policy</div>
                  <div className="privacy-policy12">Privacy Policy</div>
                </div>
              </div>
            </div>
            <div className="links-group">
              <div className="links5">
                <div className="connect">
                  <div className="terms-condition11">Connect with us :</div>
                  <div className="connect-with-us12">Connect with us :</div>
                </div>
              </div>
              <div className="social-icons1">
                <div className="facebook-icon1">
                  <div className="facebook" style={facebookStyle}>
                    <img
                      className="facebook-icon2"
                      alt=""
                      src="/facebook@2x.png"
                    />
                    <img
                      className="facebook-icon3"
                      loading="lazy"
                      alt=""
                      src="/facebook@2x.png"
                    />
                  </div>
                </div>
                <div className="twitter-icon">
                  <div className="facebook" style={twitterStyle}>
                    <img
                      className="facebook-icon2"
                      alt=""
                      src="/twitterx@2x.png"
                    />
                    <img
                      className="facebook-icon3"
                      loading="lazy"
                      alt=""
                      src="/twitterx@2x.png"
                    />
                  </div>
                </div>
                <div className="instagram-icon11" style={instagramIconStyle}>
                  <img className="instagram-icon12" alt="" src={instagram} />
                  <img
                    className="instagram-icon13"
                    loading="lazy"
                    alt=""
                    src={instagram1}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="links6">
            <div className="about-us12">Careers</div>
            <div className="about-us13">Careers</div>
          </div>
          <div className="links7">
            <div className="about-us12">Help center</div>
            <div className="help-center12">Help center</div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="copyright-2024-rootsroutes">{`Copyright    2024 Roots&Routes.`}</div>
        <div className="copyright-info">
          <div className="copyright-2024-rootsroutes1">{`Copyright    2024 Roots&Routes.`}</div>
          <div className="rights">
            <img
              className="copyright-all-rights-reserved11"
              alt=""
              src="/copyright-all-rights-reserved@2x.png"
            />
            <img
              className="copyright-all-rights-reserved12"
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

Footer3.propTypes = {
  className: PropTypes.string,
  instagram: PropTypes.string,
  instagram1: PropTypes.string,

  /** Style props */
  propBackgroundImage: PropTypes.any,
  propBackgroundImage1: PropTypes.any,
  propBackgroundImage2: PropTypes.any,
};

export default Footer3;
