import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent14 from "../components/FrameComponent14";
import Footer1 from "../components/Footer1";
import "./Art.css";

const Art = () => {
  const navigate = useNavigate();

  const onEVisaTextClick = useCallback(() => {
    navigate("/desktop-e-visa");
  }, [navigate]);

  return (
    <div className="art">
      <FrameComponent14
        screenshotAiBrushRemovebg="/screenshot--352-aibrushremovebgtxorkjjb-2@2x.png"
        iNDIANART2="/indian-art-2@2x.png"
      />
      <section className="introduction-parent">
        <div className="introduction">
          <div className="decorative-element" />
          <div className="art-wrapper">
            <h2 className="art1">ART</h2>
          </div>
          <div className="art-in-india-container">
            <p className="art-in-india">
              Art in India is a profound reflection of the country’s rich
              cultural heritage and diverse history, encompassing a wide range
              of forms and traditions. From ancient times to the modern era,
              Indian art has evolved through various phases, influenced by
              religious, political, and social changes.
            </p>
            <p className="ancient-and-classical-art-the">
              <span className="ancient-and-classical">
                {" "}
                Ancient and Classical Art :
              </span>
              <span className="the-earliest-examples">
                The earliest examples of Indian art are found in the prehistoric
                rock paintings of Bhimbetka, dating back thousands of years. The
                Indus Valley Civilization also left behind intricate seals and
                sculptures, showcasing the early artistic skills of the region.
                Classical Indian art is epitomized by the intricate carvings of
                the Ajanta and Ellora caves, which depict Buddhist, Hindu, and
                Jain themes. The Gupta period, often referred to as the golden
                age of Indian art, saw the flourishing of sculpture, painting,
                and architecture, with a strong emphasis on religious themes.
              </span>
            </p>
            <p className="ancient-and-classical-art-the">
              <span className="ancient-and-classical">{`Medieval and Mughal Art: `}</span>
              <span>
                During the medieval period, Indian art was heavily influenced by
                Islamic culture, especially during the Mughal era. Mughal
                miniature paintings, known for their detailed and vivid
                depictions of court life, battles, and nature, are a highlight
                of this period. The blend of Persian and Indian styles in Mughal
                art created a unique aesthetic that has left a lasting impact on
                Indian art traditions.
              </span>
            </p>
            <p className="ancient-and-classical-art-the">
              <span className="ancient-and-classical">{`Modern and Contemporary Art: `}</span>
              <span>
                In the modern era, Indian art has continued to evolve, with
                artists like Raja Ravi Varma, Rabindranath Tagore, and Amrita
                Sher-Gil playing pivotal roles in shaping contemporary Indian
                art. Post-independence, the Indian art scene has seen the rise
                of various movements, from the Bengal School of Art to modern
                abstract and experimental styles.
              </span>
            </p>
            <p className="art-in-india">&nbsp;</p>
            <p className="art-in-india">
              Indian art, with its deep roots and diverse expressions, continues
              to be a vital part of the country's cultural identity, reflecting
              its historical depth and contemporary creativity.
            </p>
            <p className="ancient-and-classical-art-the">&nbsp;</p>
            <p className="art-in-india">&nbsp;</p>
          </div>
        </div>
        <Footer1
          propPadding="unset"
          propTextDecoration="none"
          onEVisaTextClick={onEVisaTextClick}
          instagram="/instagram@2x.png"
          propTextDecoration1="none"
          propWidth="639px"
        />
      </section>
    </div>
  );
};

export default Art;
