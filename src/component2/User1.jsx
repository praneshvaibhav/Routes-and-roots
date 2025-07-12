import { useMemo } from "react";
import PropTypes from "prop-types";
import "./User1.css";

const User1 = ({
  className = "",
  propWidth,
  propFlex,
  image,
  avatar,
  line11,
  account,
  line12,
}) => {
  const userStyle = useMemo(() => {
    return {
      width: propWidth,
      flex: propFlex,
    };
  }, [propWidth, propFlex]);

  return (
    <div className={`user ${className}`} style={userStyle}>
      <div className="details4">
        <div className="profile1">
          <img className="image-icon" loading="lazy" alt="" src={image} />
          <div className="name3">
            <div className="name-child" />
            <div className="cameron-williamson-group">
              <div className="cameron-williamson1">Cameron Williamson</div>
              <div className="separator-wrapper">
                <div className="separator1" />
              </div>
            </div>
            <div className="comment">
              <div className="visiting-taj-mahal-container1">
                <p className="visiting-taj-mahal1">{` Visiting Taj mahal `}</p>
                <p className="visiting-taj-mahal1">
                  was one the best experience. Got to know about many much
                  historic thinghs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="testimonial1">
        <div className="profile1">
          <img className="avatar-icon" loading="lazy" alt="" src={avatar} />
          <div className="content6">
            <div className="name-child" />
            <div className="content-inner">
              <div className="name-group">
                <div className="name4">
                  <div className="dianne-russell1">Dianne Russell</div>
                </div>
                <img
                  className="buttons-child"
                  loading="lazy"
                  alt=""
                  src={line11}
                />
              </div>
            </div>
            <div className="i-visited-india">{`I visited India through Roots and Routes. The culture and the hindu tradition just blew my mind. #Wonderful_experience `}</div>
          </div>
        </div>
      </div>
      <div className="details5">
        <div className="details-inner">
          <div className="avatar-group">
            <div className="avatar2" />
            <img
              className="account-icon1"
              loading="lazy"
              alt=""
              src={account}
            />
          </div>
        </div>
        <div className="actions">
          <div className="name-child" />
          <div className="buttons1">
            <div className="sign-in12">
              <div className="sign-in13">Sign In</div>
            </div>
            <img className="buttons-child" alt="" src={line12} />
          </div>
          <div className="add">
            <div className="add-yours1">+ Add yours</div>
          </div>
        </div>
      </div>
    </div>
  );
};

User1.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  avatar: PropTypes.string,
  line11: PropTypes.string,
  account: PropTypes.string,
  line12: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propFlex: PropTypes.any,
};

export default User1;
