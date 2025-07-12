import PropTypes from "prop-types";
import "./FrameComponent2.css";

const FrameComponent2 = ({
  className = "",
  screenshotAiBrushRemovebg,
  amazingUp6777cdc32,
}) => {
  return (
    <section className={`frame-parent107 ${className}`}>
      <div className="banner-container-parent">
        <div className="banner-container">
          <div className="image-container4">
            <img
              className="screenshot-352-ai-brush-remo-icon17"
              alt=""
              src={screenshotAiBrushRemovebg}
            />
          </div>
        </div>
        <h1 className="uttar">UTTAR</h1>
      </div>
      <h1 className="prdesh">PRDESH</h1>
      <div className="uttar-pradesh-a-vibrant-tapes-parent">
        <b className="uttar-pradesh-a">
          Uttar Pradesh, a vibrant tapestry of history, culture, and
          spirituality, beckons travelers with its timeless allure. Home to the
          majestic Taj Mahal in Agra, one of the world's most iconic monuments,
          the state also boasts the ancient city of Varanasi, where the sacred
          Ganges flows, offering a spiritual experience like no other. From the
          grandeur of Lucknow's Mughal architecture to the vibrant festivals and
          bustling bazaars, Uttar Pradesh is a journey through India's
          heartland. Immerse yourself in its rich traditions, diverse cuisine,
          and the warmth of its people—discover the soul of India in Uttar
          Pradesh.
        </b>
        <div className="description-separator" />
      </div>
      <div className="social-media">
        <div className="social-icon" />
        <img
          className="amazing-up-6777cdc3-2-icon"
          loading="lazy"
          alt=""
          src={amazingUp6777cdc32}
        />
      </div>
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
  screenshotAiBrushRemovebg: PropTypes.string,
  amazingUp6777cdc32: PropTypes.string,
};

export default FrameComponent2;
