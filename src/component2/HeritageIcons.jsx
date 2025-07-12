import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./HeritageIcons.css";

const HeritageIcons = ({ className = "", heritage1 }) => {
  const navigate = useNavigate();

  const onCategoryIconsClick = useCallback(() => {
    navigate("/heritage");
  }, [navigate]);

  return (
    <div className={`heritage-icons2 ${className}`}>
      <div className="category-icons2" onClick={onCategoryIconsClick} />
      <img className="heritage-1-icon" loading="lazy" alt="" src={heritage1} />
      <div className="heritage-headings">
        <div className="heritage2">HERITAGE</div>
        <div className="heritage-preserves-culture">
          Heritage preserves culture, traditions, and ancestral wisdom.
        </div>
      </div>
    </div>
  );
};

HeritageIcons.propTypes = {
  className: PropTypes.string,
  heritage1: PropTypes.string,
};

export default HeritageIcons;
