import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent15 from "../components/FrameComponent15";
import Footer1 from "../components/Footer1";
import "./Spritiual.css";

const Spritiual = () => {
  const navigate = useNavigate();

  const onEVisaTextClick = useCallback(() => {
    navigate("/desktop-e-visa");
  }, [navigate]);

  return (
    <div className="spritiual">
      <FrameComponent15
        screenshotAiBrushRemovebg="/screenshot--352-aibrushremovebgtxorkjjb-2@2x.png"
        sPRITIUAL2="/spritiual-2@2x.png"
      />
      <footer className="main-content">
        <section className="introduction1">
          <div className="intro-image" />
          <div className="intro-title">
            <h2 className="spritiual1">
              <p className="ancient-roots-of-indian-spirit">{`SPRITIUAL `}</p>
            </h2>
          </div>
          <div className="spirituality-in-india-container">
            <p className="spirituality-in-india">
              Spirituality in India is deeply embedded in the fabric of the
              nation, influencing every aspect of life, culture, and society.
              India is often regarded as the spiritual heart of the world, a
              place where diverse spiritual practices and philosophies have
              flourished for thousands of years. The country’s spiritual
              heritage is vast, encompassing a multitude of religions, beliefs,
              and traditions, each contributing to the rich spiritual tapestry
              that defines India.
            </p>
            <p className="ancient-roots-of-indian-spirit">
              <span className="span">{` `}</span>
              <span className="ancient-roots-of">{`Ancient Roots of Indian Spirituality `}</span>
              <span className="the-spiritual-history">
                The spiritual history of India dates back to the ancient Vedic
                period, around 1500 BCE, when the earliest scriptures, the
                Vedas, were composed. These texts laid the foundation for
                Hinduism, the world’s oldest surviving religion, which forms the
                bedrock of Indian spirituality. The Vedas, along with the
                Upanishads, explore profound metaphysical questions about the
                nature of reality, the self, and the universe. Concepts such as
                Dharma (righteousness), Karma (action and its consequences), and
                Moksha (liberation) are central to Indian spiritual thought and
                have guided countless generations in their spiritual journeys.
              </span>
            </p>
            <p className="ancient-roots-of-indian-spirit">
              <span className="ancient-roots-of">{`The Birthplace of Major Religions: `}</span>
              <span className="the-spiritual-history">
                India is the birthplace of several major religions, including
                Hinduism, Buddhism, Jainism, and Sikhism. Each of these
                religions has contributed significantly to the spiritual
                landscape of the country and the world. Buddhism, founded by
                Siddhartha Gautama (the Buddha) in the 6th century BCE,
                introduced the path of enlightenment through meditation, ethical
                conduct, and wisdom. Jainism, with its emphasis on non-violence
                (Ahimsa) and asceticism, offers another distinct spiritual path.
                Sikhism, founded in the 15th century by Guru Nanak, teaches
                devotion to one God, equality of all people, and the importance
                of community service.
              </span>
            </p>
            <p className="ancient-roots-of-indian-spirit">
              <span className="ancient-roots-of">{`Spiritual Practices and Traditions: `}</span>
              <span className="the-spiritual-history">
                India’s spiritual traditions are not confined to religious
                doctrines but are also expressed through various practices that
                aim to connect the individual with the divine. Yoga, one of
                India’s most significant spiritual exports, is a holistic
                discipline that integrates physical postures, breathing
                exercises, meditation, and ethical living. Yoga’s roots lie in
                ancient Indian philosophy, particularly in the Patanjali’s Yoga
                Sutras, which outline the path to achieving spiritual
                liberation.
              </span>
            </p>
            <p className="spirituality-in-india">
              Meditation is another core practice in Indian spirituality, with
              techniques varying across different traditions. In Hinduism,
              meditation often involves focusing on a mantra or the breath to
              still the mind and experience inner peace. In Buddhism,
              mindfulness meditation (Vipassana) is practiced to cultivate
              awareness of the present moment and understand the nature of
              reality.
            </p>
            <p className="ancient-roots-of-indian-spirit">
              <span className="ancient-roots-of">
                The Role of Gurus and Ashrams:
              </span>
              <span className="the-spiritual-history">
                Gurus (spiritual teachers) and ashrams (spiritual retreats) play
                a vital role in Indian spirituality. Throughout history, India
                has produced many revered spiritual leaders, such as Adi
                Shankaracharya, Ramakrishna Paramahamsa, Swami Vivekananda, and
                more recently, figures like Sri Sri Ravi Shankar and Sadhguru.
                These gurus have not only guided their followers on the
                spiritual path but have also spread Indian spiritual teachings
                globally.
              </span>
            </p>
            <p className="spirituality-in-india">
              Ashrams serve as centers for spiritual learning and practice,
              where seekers can immerse themselves in a disciplined spiritual
              environment. The most famous ashrams, like those in Rishikesh and
              Varanasi, attract people from all over the world who come to learn
              yoga, meditation, and other spiritual practices.
            </p>
            <p className="spirituality-in-india">&nbsp;</p>
          </div>
        </section>
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

export default Spritiual;
