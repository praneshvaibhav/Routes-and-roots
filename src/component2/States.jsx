import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./States.css";

const States = ({ className = "" }) => {
  const navigate = useNavigate();

  const onVisitClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={`states ${className}`}>
      <div className="state-image">
        <div className="screenshot">
          <img
            className="screenshot-352-ai-brush-remo-icon13"
            alt=""
            src="/screenshot--352-aibrushremovebgtxorkjjb-1@2x.png"
          />
        </div>
      </div>
      <div className="rectangle-parent40">
        <div className="frame-child67" />
        <div className="culture">
          <div className="tradition">
            <b className="indias-rich-culture-container2">
              <p className="indias-rich-culture2">
                India's rich culture, a vibrant tapestry of traditions,
              </p>
              <p className="indias-rich-culture2">{` festivals, and diversity, offers an unforgettable `}</p>
              <p className="indias-rich-culture2">{`experience. From the colorful celebrations of Holi `}</p>
              <p className="indias-rich-culture2">
                and Diwali to the spiritual serenity of temples and
              </p>
              <p className="indias-rich-culture2">{` historic monuments like the Taj Mahal, India `}</p>
              <p className="indias-rich-culture2">
                captivates the soul. Explore its cuisine, art, and warm
                hospitality—India awaits your discovery!
              </p>
            </b>
            <div className="exploring-block">
              <div className="never">
                <div className="stop">
                  <h1 className="never-stop5">Never Stop</h1>
                </div>
                <h1 className="exploring2">Exploring</h1>
              </div>
              <div className="button-block-wrapper">
                <div className="button-block">
                  <div className="visit-block">
                    <div className="visit-block-child" />
                  </div>
                  <button className="visit-button3">
                    <div className="visit1" onClick={onVisitClick} />
                    <b className="visit-now24">Visit now</b>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="state-grid1">
          <div className="grid-row">
            <div className="northeast">
              <div className="northeast-child" />
              <div className="arunachal">
                <div className="block1">2.</div>
              </div>
              <div className="arunachal-pradesh">
                <span>Arunachal</span>
                <span className="span3">{` `}</span>
                <span className="pradesh">Pradesh</span>
              </div>
            </div>
            <div className="northeast1">
              <div className="northeast-child" />
              <div className="block-frame">
                <div className="div59">
                  <span>3</span>
                  <span className="span4">.</span>
                </div>
              </div>
              <div className="andaman-and-nicobar">Andaman and Nicobar</div>
            </div>
          </div>
          <div className="grid-row1">
            <div className="south">
              <div className="kerala-block">
                <div className="kerala-block-child" />
                <div className="kerala">
                  <div className="block2">
                    <span>4</span>
                    <span className="span4">.</span>
                  </div>
                </div>
                <div className="bihar">Bihar</div>
              </div>
            </div>
            <div className="grid-row2">
              <img
                className="kerela-tradition-12"
                alt=""
                src="/kerela-tradition-1@2x.png"
              />
              <div className="west-grid">
                <div className="center-grid">
                  <div className="chhattisgarh-block">
                    <div className="northeast-child" />
                    <div className="chattisgarh">
                      <div className="block3">
                        <span>5</span>
                        <span className="span4">.</span>
                      </div>
                    </div>
                    <div className="chhattisgarh">Chhattisgarh</div>
                  </div>
                  <div className="chandigarh-block">
                    <div className="chandigarh-image" />
                    <div className="chandigarh">Chandigarh</div>
                    <div className="block4">
                      <span>6</span>
                      <span className="span4">.</span>
                    </div>
                  </div>
                </div>
                <div className="goa-block">
                  <div className="northeast-child" />
                  <div className="block-wrapper">
                    <div className="block5">
                      <span>7</span>
                      <span className="span4">.</span>
                    </div>
                  </div>
                  <div className="goa">Goa</div>
                </div>
                <div className="goa-block1">
                  <img
                    className="goa-block-item"
                    alt=""
                    src="/rectangle-35.svg"
                  />
                  <div className="chattisgarh">
                    <div className="block6">
                      <span>8</span>
                      <span className="span4">.</span>
                    </div>
                  </div>
                  <div className="gujarat">Gujarat</div>
                </div>
                <div className="goa-block2">
                  <div className="goa-block-inner" />
                  <div className="haryana">Haryana</div>
                  <div className="div60">
                    <span>9</span>
                    <span className="span4">.</span>
                  </div>
                </div>
                <div className="goa-block1">
                  <div className="goa-block-child1" />
                  <div className="chattisgarh">
                    <div className="div61">
                      <span>10</span>
                      <span className="span4">.</span>
                    </div>
                  </div>
                  <div className="chhattisgarh">Himachal Pradesh</div>
                </div>
              </div>
              <div className="karnataka-block">
                <div className="karnataka-image" />
                <div className="karnataka">Karnataka</div>
                <div className="block4">
                  <span>12</span>
                  <span className="span4">.</span>
                </div>
              </div>
              <div className="jharkhand-block">
                <div className="jharkhand">
                  <div className="jharkhand-child" />
                  <div className="block8">
                    <span>11</span>
                    <span className="span4">.</span>
                  </div>
                </div>
                <div className="jharkhand1">Jharkhand</div>
              </div>
            </div>
            <div className="south1">
              <div className="rectangle-parent41">
                <div className="northeast-child" />
                <div className="block-frame">
                  <div className="block3">
                    <span>13</span>
                    <span className="span4">.</span>
                  </div>
                </div>
                <div className="kerala1">Kerala</div>
              </div>
            </div>
          </div>
          <div className="grid-row3">
            <div className="state-blocks" />
            <div className="maharashtra">
              <div className="block10">
                <span>14</span>
                <span className="span4">.</span>
              </div>
            </div>
            <div className="chhattisgarh">Madhya Pradesh</div>
          </div>
          <div className="grid-row4">
            <div className="grid-row-child" />
            <div className="chandigarh">Maharashtra</div>
            <div className="div62">
              <span>15</span>
              <span className="span4">.</span>
            </div>
          </div>
          <div className="east-grid">
            <div className="meghalaya-block">
              <div className="meghalaya">
                <div className="northeast-child" />
                <div className="block11">
                  <span>17</span>
                  <span className="span4">.</span>
                </div>
                <div className="goa">Meghalaya</div>
              </div>
              <div className="manipur-block">
                <div className="manipur">
                  <div className="manipur-image" />
                  <div className="kerala">
                    <div className="block6">
                      <span>16</span>
                      <span className="span4">.</span>
                    </div>
                  </div>
                  <div className="manipur1">Manipur</div>
                </div>
              </div>
            </div>
            <div className="bottom-grid">
              <div className="mizoram-block">
                <div className="northeast-child" />
                <div className="block14">
                  <span>18</span>
                  <span className="span4">.</span>
                </div>
                <div className="mizoram">Mizoram</div>
              </div>
              <div className="nagaland-block">
                <div className="nagaland">
                  <div className="nagaland-image" />
                  <div className="nagaland1">Nagaland</div>
                  <div className="block15">
                    <span>19</span>
                    <span className="span4">.</span>
                  </div>
                </div>
                <div className="odisha-block">
                  <div className="northeast-child" />
                  <div className="block-wrapper">
                    <div className="block16">20.</div>
                  </div>
                  <div className="odisha1">Odisha</div>
                </div>
                <div className="punjab-block">
                  <div className="punjab">
                    <div className="northeast-child" />
                    <div className="block-frame">
                      <div className="block18">21.</div>
                    </div>
                    <div className="punjab1">Punjab</div>
                  </div>
                  <div className="rajasthan-block">
                    <div className="rajasthan">
                      <div className="rajasthan-child" />
                      <div className="block19">23.</div>
                      <div className="name1">
                        <div className="rajasthan1">Rajasthan</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tamil-nadu-block">
          <div className="tamil-nadu-state" />
          <div className="tamil-nadu">Tamil Nadu</div>
          <div className="div63">25.</div>
        </div>
      </div>
      <img className="states-child" loading="lazy" alt="" />
    </div>
  );
};

States.propTypes = {
  className: PropTypes.string,
};

export default States;
