import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent1 from "./FrameComponent1";
import PropTypes from "prop-types";
import "./FrameComponent32.css";

const FrameComponent32 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onEVisaTextClick = useCallback(() => {
    navigate("/desktop-e-visa");
  }, [navigate]);

  return (
    <section className={`frame-parent69 ${className}`}>
      <div className="indias-heritage-is-a-vast-and-parent">
        <div className="indias-heritage-is-container">
          <p className="indias-heritage-is">
            India's heritage is a vast and intricate tapestry, deeply rooted in
            millennia of history, culture, and tradition. As one of the world’s
            oldest civilizations, India's heritage reflects a unique blend of
            the ancient and the modern, the sacred and the secular, the rural
            and the urban. It is a multifaceted phenomenon that encompasses
            architecture, art, music, dance, literature, languages, religions,
            customs, and traditions, all of which have evolved over centuries,
            shaped by various dynasties, empires, and cultural exchanges.
          </p>
          <p className="architectural-heritage-one-o">
            <span className="architectural-heritage">{`Architectural Heritage : `}</span>
            <span>
              One of the most visible and awe-inspiring aspects of India’s
              heritage is its architectural legacy. From the Indus Valley
              Civilization, which dates back to 2500 BCE, to the magnificent
              temples of South India, the intricate Mughal architecture
              exemplified by the Taj Mahal, and the colonial structures of the
              British era, India's architectural heritage is a testament to the
              country’s rich history. The ancient temples of Khajuraho, the
              rock-cut caves of Ajanta and Ellora, and the majestic forts of
              Rajasthan, such as those in Jaipur and Udaipur, showcase the
              artistic prowess and spiritual depth of the Indian people. These
              structures are not just buildings but are living testimonies to
              the religious, cultural, and social life of their times.
            </span>
          </p>
          <p className="architectural-heritage-one-o">
            <span className="architectural-heritage">{`Cultural and Artistic Heritage: `}</span>
            <span>
              India's cultural and artistic heritage is equally diverse and
              rich. Indian classical music, with its two main traditions,
              Hindustani and Carnatic, is an ancient art form that has been
              passed down through generations. The classical dance forms,
              including Bharatanatyam, Kathak, Odissi, and Kathakali, are not
              only performances but also expressions of devotion, storytelling,
              and cultural continuity. These art forms are deeply intertwined
              with India's spiritual and religious traditions, often depicting
              stories from Hindu mythology, such as the Ramayana and
              Mahabharata, which themselves are epic narratives that have shaped
              Indian culture for millennia.
            </span>
          </p>
          <p className="architectural-heritage-one-o">
            In addition to classical arts, India’s folk traditions are vibrant
            and varied, with each region having its own distinct forms of music,
            dance, and art. For instance, the Rajasthani folk dance Ghoomar, the
            Punjabi Bhangra, and the Tamil folk art form Karagattam reflect the
            diversity of India’s cultural landscape.
          </p>
          <p className="architectural-heritage-one-o">
            <span className="architectural-heritage">{`Literary Heritage: `}</span>
            <span className="indias-literary-heritage">
              India's literary heritage is another vital aspect of its cultural
              legacy. The Vedas, Upanishads, and other ancient scriptures,
              written in Sanskrit, form the foundation of Indian philosophical
              thought and spirituality. The epics Ramayana and Mahabharata are
              not only religious texts but also literary masterpieces that have
              influenced countless generations. Medieval India produced
              remarkable poets and writers like Kabir, Tulsidas, and Mirza
              Ghalib, whose works continue to resonate with people today. In
              modern times, India has produced world-renowned authors like
              Rabindranath Tagore, the first non-European Nobel laureate in
              Literature, and contemporary writers such as Arundhati Roy and
              Salman Rushdie, whose works explore the complexities of Indian
              society and culture.
            </span>
          </p>
          <p className="architectural-heritage-one-o">
            <span className="architectural-heritage">{`Religious and Spiritual Heritage: `}</span>
            <span>
              India is the birthplace of several major religions, including
              Hinduism, Buddhism, Jainism, and Sikhism, each contributing
              significantly to the country’s spiritual heritage. Pilgrimage
              sites like Varanasi, Bodh Gaya, and Amritsar are not just
              religious centers but also symbols of India’s spiritual diversity
              and unity. The syncretic traditions, where different religious
              practices and beliefs coexist and influence each other, are a
              hallmark of Indian culture. Sufism, for example, has blended
              Islamic practices with Hindu traditions, creating a unique
              spiritual expression found in the music and poetry of the Sufi
              saints.
            </span>
          </p>
          <p className="architectural-heritage-one-o">
            <span className="architectural-heritage">{`Linguistic Heritage: `}</span>
            <span className="indias-literary-heritage">
              India's linguistic diversity is unparalleled, with over 1,600
              languages spoken across the country. The constitution recognizes
              22 official languages, reflecting the linguistic plurality that is
              a crucial part of India’s heritage. This diversity is also evident
              in India's literature, where works are produced in multiple
              languages, each with its own rich tradition and literary history.
            </span>
          </p>
          <p className="architectural-heritage-one-o">&nbsp;</p>
          <p className="indias-heritage-is">&nbsp;</p>
        </div>
        <FrameComponent1
          frameDivAlignSelf="unset"
          frameDivFlex="1"
          onEVisaTextClick={onEVisaTextClick}
          instagram="/instagram@2x.png"
        />
      </div>
      <div className="copyright-2024-rootsroutes-container">
        <div className="copyright-2024-rootsroutes5">{`Copyright    2024 Roots&Routes.`}</div>
        <img
          className="copyright-all-rights-reserved16"
          loading="lazy"
          alt=""
          src="/copyright-all-rights-reserved@2x.png"
        />
      </div>
    </section>
  );
};

FrameComponent32.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent32;
