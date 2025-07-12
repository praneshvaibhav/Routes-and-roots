import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./FrameComponent33.css";

const FrameComponent33 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onEVisaTextClick = useCallback(() => {
    navigate("/desktop-e-visa");
  }, [navigate]);

  return (
    <section className={`frame-parent82 ${className}`}>
      <div className="rectangle-parent35">
        <div className="frame-child61" />
        <div className="links-column-wrapper">
          <div className="links-column3">
            <div className="about-us22">{`About us `}</div>
            <div className="about-us-links">
              <div className="faqs16">FAQ’s</div>
            </div>
            <div className="about-us-links1">
              <div
                className="e-visa16"
                onClick={onEVisaTextClick}
              >{`e-Visa `}</div>
            </div>
            <div className="terms-condition16">{`Terms & Condition`}</div>
          </div>
        </div>
        <div className="frame-parent83">
          <div className="frame-parent84">
            <div className="links-column-wrapper">
              <div className="complain-group">
                <div className="about-us22">complain</div>
                <div className="privacy-policy16">Privacy Policy</div>
              </div>
            </div>
            <div className="frame-parent85">
              <div className="connect-with-us-wrapper">
                <div className="connect-with-us16">Connect with us :</div>
              </div>
              <div className="frame-parent86">
                <div className="facebook-wrapper">
                  <img
                    className="facebook-icon8"
                    loading="lazy"
                    alt=""
                    src="/facebook@2x.png"
                  />
                </div>
                <div className="twitterx-wrapper">
                  <img
                    className="facebook-icon8"
                    loading="lazy"
                    alt=""
                    src="/twitterx@2x.png"
                  />
                </div>
                <img
                  className="instagram-icon17"
                  loading="lazy"
                  alt=""
                  src="/instagram@2x.png"
                />
              </div>
            </div>
          </div>
          <div className="careers-wrapper">
            <div className="faqs16">Careers</div>
          </div>
          <div className="help-center16">Help center</div>
        </div>
        <div className="museums-in-india-container">
          <p className="museums-in-india">
            Museums in India are vital cultural institutions that preserve,
            showcase, and interpret the country's rich and diverse heritage.
            They offer glimpses into India’s history, art, culture, science, and
            natural history, serving as educational resources and places of
            inspiration for millions of visitors each year. With collections
            ranging from ancient artifacts to contemporary art, Indian museums
            provide a window into the country’s past and present.
          </p>
          <p className="historical-museumsone-of-the">
            <span className="historical-museums">Historical Museums:</span>
            <span className="indias-art-museums">
              One of the most prominent historical museums in India is the
              **National Museum** in New Delhi, which houses an extensive
              collection of artifacts from various periods of Indian history.
              Established in 1949, it displays over 200,000 objects, including
              sculptures, paintings, manuscripts, and textiles, covering over
              5,000 years of Indian civilization. The museum’s highlights
              include the relics from the Indus Valley Civilization, Buddhist
              art, and treasures from the Mughal era.
            </span>
          </p>
          <p className="museums-in-india">
            Another significant historical museum is the **Chhatrapati Shivaji
            Maharaj Vastu Sangrahalaya** (formerly known as the Prince of Wales
            Museum) in Mumbai. It showcases a rich collection of art, sculpture,
            and textiles, along with exhibits on the natural history and
            archaeology of the region. The museum's Indo-Saracenic architecture
            is itself a historical landmark, reflecting the cultural fusion that
            characterizes much of India’s heritage.
          </p>
          <p className="historical-museumsone-of-the">
            <span className="historical-museums">{`Art Museums: `}</span>
            <span className="indias-art-museums">
              India’s art museums play a crucial role in preserving and
              promoting the country’s artistic heritage. The National Gallery of
              Modern Art (NGMA), with branches in New Delhi, Mumbai, and
              Bangalore, is dedicated to modern and contemporary Indian art. The
              gallery's collection includes works by some of India’s most
              celebrated artists, such as Raja Ravi Varma, Rabindranath Tagore,
              Amrita Sher-Gil, and M.F. Husain. NGMA provides a comprehensive
              view of the evolution of Indian art from the colonial period to
              the present day.
            </span>
          </p>
          <p className="museums-in-india">
            The Victoria Memorial in Kolkata is another iconic museum that
            combines historical significance with artistic splendor. Built in
            memory of Queen Victoria, the museum houses an impressive collection
            of paintings, sculptures, and manuscripts, offering insights into
            British colonial history and Indian art traditions. The memorial’s
            sprawling gardens and marble architecture make it a popular
            attraction.
          </p>
          <p className="historical-museumsone-of-the">
            <span className="historical-museums">{`Science and Natural History Museums: `}</span>
            <span className="indias-art-museums">
              India also has several museums dedicated to science, technology,
              and natural history. The Indian Museum in Kolkata, established in
              1814, is the oldest museum in India and one of the oldest in the
              world. It has a vast collection of fossils, minerals, and cultural
              artifacts, including the famous skeleton of the prehistoric
              elephant, the Brachiosaurus.
            </span>
          </p>
          <p className="museums-in-india">
            The Birla Industrial and Technological Museum in Kolkata, the first
            science museum in India, aims to popularize science and technology
            through interactive exhibits and demonstrations. Similarly, the
            **Visvesvaraya Industrial and Technological Museum** in Bangalore is
            dedicated to the memory of Sir M. Visvesvaraya, an Indian engineer
            and statesman, and features exhibits on space, biotechnology, and
            engineering.
          </p>
          <p className="historical-museumsone-of-the">
            <span className="historical-museums">
              Regional and Specialized Museums:
            </span>
            <span className="indias-art-museums">
              Many regions in India have their own museums that focus on local
              history, culture, and traditions. The **Salar Jung Museum** in
              Hyderabad is renowned for its diverse collection, ranging from
              Indian art to European and Middle Eastern artifacts. The museum is
              particularly famous for its collection of clocks and the Veiled
              Rebecca, a stunning marble sculpture.
            </span>
          </p>
          <p className="museums-in-india">&nbsp;</p>
        </div>
      </div>
      <div className="copyright-2024-rootsroutes-parent2">
        <div className="copyright-2024-rootsroutes7">{`Copyright    2024 Roots&Routes.`}</div>
        <img
          className="copyright-all-rights-reserved18"
          loading="lazy"
          alt=""
          src="/copyright-all-rights-reserved@2x.png"
        />
      </div>
    </section>
  );
};

FrameComponent33.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent33;
