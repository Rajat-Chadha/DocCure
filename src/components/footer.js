import  "../footer.css";
import React from 'react'
const Footer = () => {
  return (
    <div
      className="d-flex flex-column"
      style={{ background: "#171717" }}
    >
      <div className="d-flex" style={{ padding: "4rem" }}>
        <div className="d-flex flex-column" style={{ flex: 1 }}>
          <p className="contactUs">Contact Us</p>
          <p className="contactDescription">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
          </p>
        </div>
        <div style={{ flex: 1 }}></div>
        <div className="footer_SearchBox" style={{ flex: 1 }}>
          <p className="footer_SearchText">Enter Email Address</p>
          <p className="searchText">Subscribe</p>
        </div>
      </div>
      <hr style={{ background: " rgba(255, 255, 255, 0.8)", width: "100%" }} />
      <div
        className="d-flex justify-content-between"
        style={{ padding: "4rem" }}
      >
        <div className="d-flex flex-column">
          <p className="footerContact">
            Our door is always open for a good chat and a cup of tea.
          </p>
          <div className="d-flex ">
            <img src="/map.png"></img>
            <p className="footerDesc">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
            </p>
          </div>
        </div>
        <div  className="d-flex flex-column mx-4" style={{alignSelf:'end'}}>
          <div className="d-flex justify-content-evenly" style={{ height: "fit-content", alignSelf: "end" }} >
            <div className="buttonBox2">
              <img src={"icons/facebook.svg"}></img>
            </div>
            <div className="buttonBox2">
              <img src={"icons/instagram.svg"}></img>
            </div>
            <div className="buttonBox2">
              <img src={"icons/google2.svg"}></img>
            </div>
            <div className="buttonBox2">
              <img src={"icons/extra.svg"}></img>
            </div>
          </div>
          <div className="mt-3" style={{width:120,height:1,background: '#FFFFFF',alignSelf:'end'}}></div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
