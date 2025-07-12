import PropTypes from "prop-types";
import "./FrameComponent11.css";

const FrameComponent11 = ({
  className = "",
  sundaySemiColon,
  sunday,
  line43,
  kanyaSankrantiFriday,
  kanyaSankranti,
}) => {
  return (
    <div className={`rectangle-parent17 ${className}`}>
      <div className="frame-child29" />
      <div className="sunday-semi-colon-wrapper">
        <div className="sunday-semi-colon">{sundaySemiColon}</div>
      </div>
      <div className="frame-parent42">
        <div className="semi-colon-parent">
          <div className="semi-colon">1</div>
          <div className="sunday48">{sunday}</div>
        </div>
        <img className="frame-child30" alt="" src={line43} />
      </div>
      <div className="frame-parent43">
        <div className="kanya-sankranti-friday-wrapper">
          <img
            className="kanya-sankranti-friday"
            alt=""
            src={kanyaSankrantiFriday}
          />
        </div>
        <div className="kanya-sankranti1">{kanyaSankranti}</div>
      </div>
    </div>
  );
};

FrameComponent11.propTypes = {
  className: PropTypes.string,
  sundaySemiColon: PropTypes.string,
  sunday: PropTypes.string,
  line43: PropTypes.string,
  kanyaSankrantiFriday: PropTypes.string,
  kanyaSankranti: PropTypes.string,
};

export default FrameComponent11;
