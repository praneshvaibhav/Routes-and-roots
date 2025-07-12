import PropTypes from "prop-types";
import "./FrameComponent35.css";

const FrameComponent35 = ({ className = "" }) => {
  return (
    <div className={`rectangle-parent8 ${className}`}>
      <div className="frame-child15" />
      <div className="frame-wrapper13">
        <div className="frame-parent21">
          <div className="e-mail-wrapper">
            <div className="e-mail-">E- mail -</div>
          </div>
          <div className="frame-parent22">
            <div className="adhar-no-wrapper">
              <div className="e-mail-">Adhar No.</div>
            </div>
            <div className="adhar-no-wrapper">
              <div className="e-mail-">{`IFSC Code `}</div>
            </div>
            <div className="frame-parent23">
              <div className="address-wrapper">
                <div className="address">Address :</div>
              </div>
              <div className="pan-no">PAN No. :</div>
              <div className="mobile-no">Mobile No:</div>
            </div>
          </div>
        </div>
      </div>
      <div className="sign-in-button-container-parent">
        <div className="sign-in-button-container">
          <div className="sign-in-button-divider-parent">
            <div className="sign-in-button-divider">
              <div className="divider" />
            </div>
            <h2 className="sign-in1">Sign In</h2>
            <div className="sign-in-button-divider1">
              <div className="sign-in-button-divider-child" />
            </div>
          </div>
        </div>
        <div className="frame-parent24">
          <div className="email-input-container-parent">
            <div className="email-input-container">
              <div className="frame-parent25">
                <div className="rectangle-parent9">
                  <div className="password-input-child" />
                  <input
                    className="james6754gmailcom"
                    placeholder="james6754@gmail.com"
                    type="text"
                  />
                </div>
                <div className="email-input-border" />
              </div>
              <div className="email-error-border" />
            </div>
            <div className="password-input-borders-parent">
              <div className="password-input-borders" />
              <div className="password-input-borders" />
            </div>
            <div className="email-error-border" />
          </div>
          <div className="password-input-container">
            <div className="frame-parent26">
              <div className="password-parent">
                <div className="password-">
                  <span>Password</span>
                  <span className="span1"> -</span>
                </div>
                <div className="password-input">
                  <div className="password-input-child" />
                  <input
                    className="password-value"
                    placeholder="***********"
                    type="text"
                  />
                </div>
              </div>
              <div className="upload-adhar-parent">
                <div className="upload-adhar">{`Upload Adhar `}</div>
                <div className="adhar-upload-box-wrapper">
                  <div className="adhar-upload-box">
                    <div className="adhar-upload-box-child" />
                    <input
                      className="upload"
                      placeholder="Upload ^"
                      type="text"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="passbook-upload-label-wrapper">
              <div className="passbook-upload-label">
                <div className="upload-passbook">{`Upload Passbook `}</div>
                <div className="passbook-upload-box-wrapper">
                  <div className="passbook-upload-box">
                    <div className="passbook-upload-box-child" />
                    <div className="upload1">Upload ^</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="password-input-container-inner">
              <div className="passbook-upload-label">
                <div className="frame-parent28">
                  <div className="pin-code-wrapper">
                    <div className="pin-code">Pin Code</div>
                  </div>
                  <div className="account-no-parent">
                    <div className="account-no">Account No. :</div>
                    <div className="mobile-no">Shop Name :</div>
                  </div>
                </div>
                <div className="image-upload-container-wrapper">
                  <div className="image-upload-container">
                    <div className="email-input-border" />
                    <div className="password-input-borders" />
                    <div className="password-input-borders" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent35.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent35;
