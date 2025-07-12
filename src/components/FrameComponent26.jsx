import FrameComponent1 from "./FrameComponent1";
import PropTypes from "prop-types";
import "./FrameComponent26.css";

const FrameComponent26 = ({ className = "" }) => {
  return (
    <div className={`frame-parent93 ${className}`}>
      <FrameComponent1 instagram="/instagram@2x.png" />
      <div className="copyright-2024-rootsroutes-parent3">
        <div className="copyright-2024-rootsroutes10">{`Copyright    2024 Roots&Routes.`}</div>
        <div className="copyright-2024-rootsroutes-parent4">
          <div className="copyright-2024-rootsroutes11">{`Copyright    2024 Roots&Routes.`}</div>
          <img
            className="copyright-all-rights-reserved20"
            loading="lazy"
            alt=""
            src="/copyright-all-rights-reserved@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

FrameComponent26.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent26;
