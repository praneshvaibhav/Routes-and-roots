import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./HeritageIcons3.css";

const HeritageIcons3 = ({
  className = "",
  bestIndianWildlifePhotographers,
}) => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/wildlife");
  }, [navigate]);

  return (
    <div className={`heritage-icons4 ${className}`}>
      <div className="heritage-icons-child1" onClick={onRectangleClick} />
      <img
        className="best-indian-wildlife-photograp-icon"
        loading="lazy"
        alt=""
        src={bestIndianWildlifePhotographers}
      />
      <div className="wildlife-container">
        <div className="wildlife2"> WILDLIFE</div>
      </div>
      <div className="nature-description">
        <div className="natures-treasure">Nature's treasure.</div>
      </div>
    </div>
  );
};

HeritageIcons3.propTypes = {
  className: PropTypes.string,
  bestIndianWildlifePhotographers: PropTypes.string,
};

export default HeritageIcons3;
