import React, { Fragment } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Img from "../../img/banner-right.svg";
import Img2 from "../../img/banner-left.svg";
import Final from "../../img/final_Trim.mp4";
import "../../App.css";
import P1 from "../../img/p1.png";
import P2 from "../../img/p2.png";
import P3 from "../../img/p3.png";
import why from "../../img/why.svg"

const Landing = ({ isDoctorAuthenticated, isUserAuthenticated }) => {
  if (isDoctorAuthenticated) {
    return <Redirect to="/dashboard" />;
  } else if (isUserAuthenticated) {
    return <Redirect to="/appointment" />;
  }

  return (
    <Fragment>
      <section
        id="landing home"
        style={{ padding: 0, backgroundColor: "#efe0ee" }}
      >
        <div
          id="banner"
          className="d-flex align-items-start"
        >
           <img src={Img2} style={{width:'23vw',position:'absolute',left:0,bottom:0,marginTop:35}}></img>
          <div className="d-flex  flex-column" style={{ flex: 1 }}>
            <div
              style={{
                fontFamily: "Montserrat",
                paddingTop: '5vw',
                paddingLeft: "7vw",
              }}
            >
              <h1 style={{ fontSize: "5vw" }}>
                {" "}
                Welcome to <br />
                Doc<span style={{ color: "#a85eb4" }}>Cure</span>!
              </h1>
              <p
                style={{
                  fontFamily: "Montserrat",
                  fontSize: '1.5vw',
                  paddingTop: "2vw",
                }}
              >
                <b>
                  Perfect Place to Cure your Body & Mind <br />
                  while having the Comfort of your home.
                </b>
              </p>
            </div>
            <div
              className="d-flex align-items-start"
              style={{ paddingLeft: "6vw", paddingTop: "2vw",paddingBottom:30 }}
            >
              <div className="doctor-signup">
                <Link
                  to="/registerDoctor"
                  type="button"
                  className="item btn btn-info py-2"
                  style={{
                    backgroundColor: "#a85eb4",
                    borderRadius: 30,
                    outlineColor: "#a85eb4",
                    fontFamily: "Montserrat",
                    width: 160,
                  }}
                >
                  For Doctors
                </Link>
              </div>
              <div className="user-signup">
                <Link
                  to="/registerUser"
                  className="item btn btn-outline-info py-2"
                  style={{
                    borderRadius: 30,
                    color: "#a85eb4",
                    width: 160,
                    fontFamily: "Montserrat",
                    borderColor: "#a85eb4",
                  }}
                >
                  For Users
                </Link>
              </div>
            </div>
          </div>
          <div className="" style={{ flex: 1 }}>
            <img src={Img}style={{width:'43vw'}}></img>
           
          </div>
        </div>
        <div id="compare" >
          <div className="comapare_container">
            <h1 className="heroTitle" style={{ fontFamily: "Montserrat" , fontWeight:"bold" }}>
              Why <span id="nine-eye">DocCure?</span>
            </h1>
            <div className="compare_content">
              <div className="leftContainer">
                <img className="compareImg" alt="compare and buy" src={why} />
              </div>
              <div className="rightContainer">
                <div className="cards">
                  <div className="card">
                    <p
                      className="card-title"
                      style={{ fontFamily: "Montserrat" }}
                    >
                      Compare and Choose
                    </p>
                    <p
                      className="card-descriptionText"
                      style={{ fontFamily: "Montserrat" }}
                    >
                      We aim at providing you with the best possible comparison
                      of your nearby Doctors so you can get the best quality
                      service at cheapest price.
                    </p>
                    <a href="/book_now">
                      <button
                        className="card-btn"
                        style={{ fontFamily: "Montserrat" }}
                      >
                        Find Stores
                      </button>
                    </a>
                  </div>
                  <div className="card">
                    <p
                      className="card-title"
                      style={{ fontFamily: "Montserrat" }}
                    >
                      Healthcare under one Roof
                    </p>
                    <p
                      className="card-descriptionText"
                      style={{ fontFamily: "Montserrat" }}
                    >
                      Get exclusive offers and discounts on your nearest
                      Healthcare personnel with DocCure. Explore your nearby
                      doctors and visit them today!
                    </p>
                    <a href="/login">
                      <button
                        className="card-btn"
                        style={{ fontFamily: "Montserrat" }}
                      >
                        My Account
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="testimonials" style={{ display: "block", marginTop:"-4vw", paddingTop:"5vw" }}>
          <div className="inner">
            <h1>Testimonials</h1>
            <div className="border"></div>

            <div className="row">
              <div className="col">
                <div className="testimonial">
                  <img src={P1} alt="" />
                  <div className="name">Full name</div>
                  <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>

                  <p className="desc">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                  </p>
                </div>
              </div>

              <div className="col">
                <div className="testimonial">
                  <img src={P2} alt="" />
                  <div className="name">Full name</div>
                  <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                  </div>

                  <p className="desc">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                  </p>
                </div>
              </div>

              <div className="col">
                <div className="testimonial">
                  <img src={P3} alt="" />
                  <div className="name">Full name</div>
                  <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                  </div>

                  <p className="desc">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="testimonial">
                  <img src={P1} alt="" />
                  <div className="name">Full name</div>
                  <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>

                  <p className="desc">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                  </p>
                </div>
              </div>

              <div className="col">
                <div className="testimonial">
                  <img src={P2} alt="" />
                  <div className="name">Full name</div>
                  <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                  </div>

                  <p className="desc">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                  </p>
                </div>
              </div>

              <div className="col">
                <div className="testimonial">
                  <img src={P3} alt="" />
                  <div className="name">Full name</div>
                  <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                  </div>

                  <p className="desc">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
Landing.propTypes = {
  isDoctorAuthenticated: PropTypes.bool.isRequired,
  isUserAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isDoctorAuthenticated: state.authDoctor.isDoctorAuthenticated,
  isUserAuthenticated: state.authUser.isUserAuthenticated,
});

export default connect(mapStateToProps)(Landing);
