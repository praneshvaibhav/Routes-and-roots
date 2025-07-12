import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent14 from "../components/FrameComponent14";
import Footer1 from "../components/Footer1";
import "./Wildlife.css";

const Wildlife = () => {
  const navigate = useNavigate();

  const onEVisaTextClick = useCallback(() => {
    navigate("/desktop-e-visa");
  }, [navigate]);

  return (
    <div className="wildlife">
      <FrameComponent14
        frameHeaderHeight="809px"
        screenshotAiBrushRemoIconWidth="1165px"
        screenshotAiBrushRemovebg="/screenshot--352-aibrushremovebgtxorkjjb-2@2x.png"
        iNDIANART2="/bestindianwildlifephotographers01-2@2x.png"
        propWidth="514px"
        propHeight="698px"
      />
      <footer className="content1">
        <div className="heading">
          <div className="title-icon" />
          <div className="wildlife-wrapper">
            <h2 className="wildlife1">WILDLIFE</h2>
          </div>
          <div className="india-is-a-container">
            <p className="india-is-a">
              India is a land of remarkable biodiversity, home to a vast array
              of wildlife species spread across its diverse landscapes, from
              dense forests and grasslands to deserts, wetlands, and the
              Himalayan ranges. The country's unique geographical diversity
              supports a rich variety of flora and fauna, making it one of the
              17 megadiverse countries in the world.
            </p>
            <p className="rich-biodiversityindias-wild">
              <span className="rich-biodiversity">Rich Biodiversity:</span>
              <span className="indias-wildlife-includes">
                India's wildlife includes some of the most iconic and endangered
                species on the planet. The Bengal tiger, often considered a
                symbol of Indian wildlife, roams the country's forests and
                national parks, such as those in Sundarbans, Ranthambore, and
                Bandhavgarh. India is also home to the Asiatic lion, found
                exclusively in the Gir Forest of Gujarat, and the Indian
                elephant, which inhabits forests across the subcontinent. The
                one-horned rhinoceros, which was once on the brink of
                extinction, now thrives in Assam's Kaziranga National Park,
                thanks to dedicated conservation efforts.
              </span>
            </p>
            <p className="rich-biodiversityindias-wild">
              <span className="rich-biodiversity">{`Diverse Habitats: `}</span>
              <span className="indias-wildlife-includes">
                India's varied ecosystems provide habitats for an extensive
                range of species. The Western Ghats, a UNESCO World Heritage
                site, are a biodiversity hotspot, home to numerous endemic
                species, including the Nilgiri tahr and the Malabar giant
                squirrel. The Himalayas, with their high-altitude environments,
                support unique species such as the snow leopard, red panda, and
                Himalayan monal. In contrast, the arid regions of Rajasthan are
                inhabited by the Great Indian bustard, an endangered bird, and
                the desert fox.
              </span>
            </p>
            <p className="india-is-a">
              India’s rivers and wetlands are crucial habitats for aquatic
              wildlife, including the Ganges river dolphin, gharial (a type of
              crocodile), and a variety of fish and bird species. The country's
              coastal regions and islands, like the Sundarbans and Andaman and
              Nicobar Islands, are home to mangroves, coral reefs, and marine
              life, including sea turtles, dugongs, and saltwater crocodiles.
            </p>
            <p className="rich-biodiversityindias-wild">
              <span className="rich-biodiversity">Conservation Efforts:</span>
              <span className="indias-wildlife-includes">
                India has a long history of wildlife conservation, which gained
                momentum with the establishment of protected areas such as
                national parks, wildlife sanctuaries, and biosphere reserves.
                Project Tiger, launched in 1973, is one of the most successful
                wildlife conservation programs globally, leading to a
                significant increase in the tiger population. Similar efforts,
                like Project Elephant and the conservation initiatives for the
                one-horned rhinoceros, have helped protect other key species.
              </span>
            </p>
            <p className="india-is-a">
              Despite these successes, India's wildlife faces numerous threats,
              including habitat loss due to deforestation, human-wildlife
              conflict, poaching, and climate change. To combat these
              challenges, the government, along with various non-governmental
              organizations, continues to implement conservation strategies,
              promote eco-tourism, and raise awareness about the importance of
              preserving wildlife.
            </p>
            <p className="india-is-a">&nbsp;</p>
            <p className="india-is-a">
              India's wildlife is an integral part of the nation's natural
              heritage and biodiversity. Preserving this rich wildlife legacy
              requires ongoing efforts and the collective responsibility of all
              stakeholders. As India balances development with conservation,
              protecting its wildlife remains crucial for maintaining ecological
              balance and ensuring that future generations can experience the
              country's incredible natural wonders.
            </p>
          </div>
        </div>
        <Footer1
          propPadding="unset"
          propTextDecoration="unset"
          onEVisaTextClick={onEVisaTextClick}
          instagram="/instagram@2x.png"
          propTextDecoration1="unset"
          propWidth="639px"
        />
      </footer>
    </div>
  );
};

export default Wildlife;
