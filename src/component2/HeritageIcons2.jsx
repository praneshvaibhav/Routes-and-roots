import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./HeritageIcons2.css";

const HeritageIcons2 = ({ className = "", iNDIANART1 }) => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/art");
  }, [navigate]);

  return (
    <div className={`heritage-icons3 ${className}`}>
      <div className="heritage-icons-inner" onClick={onRectangleClick} />
      <div className="indian-art-1-wrapper">
        <img className="indian-art-1" loading="lazy" alt="" src={iNDIANART1} />
      </div>
      <div className="frame-parent98">
        <div className="art-container">
          <div className="art2">ART</div>
        </div>
        <div className="creative-expression">Creative expression.</div>
      </div>
    </div>
  );
};

HeritageIcons2.propTypes = {
  className: PropTypes.string,
  iNDIANART1: PropTypes.string,
};

export default HeritageIcons2;
