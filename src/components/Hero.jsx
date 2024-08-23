import React from "react";
import { Button, Col, Container } from "react-bootstrap";
import heromain from "../assets/heromain.png";
import explosion from "../assets/viral.png";
import profile from "../assets/profile.png";
import rocket from "../assets/rocket.svg";
import arrow from "../assets/arrow.svg";
import ReactPixel from 'react-facebook-pixel';


const Hero = () => {
  const trackPurchase = () => {
    ReactPixel.track('Purchase', { value: 2000, currency: '$' });
  };


  return (
    <>
    <div style={{ backgroundColor: "#F8F7F3" }}>
      <Container>
        <Col xs={12} lg={9} className="mx-auto" >
          <div className="hero text-center py-5">
          <h1 className="stylishfont mainheading text-black">Step into th<span className="backgroundheaading">e Spotlight</span></h1>
    
            <h1 className="py-2 headingfont">
              Elevate Your Black-Owned Business With <span>OBWS</span>
            </h1>
            <div className="pb-3">
              <span className="bg-white py-1 px-3 membership-hero ">
                <b>OBWS Membership</b> <img src={rocket} alt="" />
                <span className="paragraphfont text-muted">
                  {" "}
                  is for entrepreneurs ready ti go as CEO
                </span>
              </span>
            </div>
            <p className=" Poppins">
              Amplify your business, get in front of Black-owned business
              shoppers, and join the fastest growing community giving
              trailblazing business owners the resources, exposure, and support
              they deserve.
            </p>
            <Button className="mt-5 mb-5" onClick={trackPurchase} >
              <span className="mx-3">
                Join <b className="mx-2">OBWS</b>
              </span>{" "}
              <img src={arrow} alt="" />
            </Button >
            <img src={heromain} className="heromain" width={"100%"} alt="" />
          </div>
        </Col>
      </Container>
      <div className="ceo pt-5">
        <Container>
          <Col xs={12} lg={9} className="mx-auto pt-3">
            <div>
              <div className="text-center py-lg-5 py-3">
              <h1 className="stylishfont mainheading text-black">A viral <span className="backgroundheaading">explosion</span></h1>
                <div
                  className="m-auto "
                  style={{ width: "80px", height: "80px" }}
                >
                  <img src={profile} width={"100%"} alt="" />
                </div>

                <p className="my-3 Poppins">
                  "I'm really excited because the Official Black Wall Street
                  featured my passport covers. Literally we are having a viral
                  explosion right now. There are tons of people rushing over to
                  our site, buying our passport covers. We are literally running
                  out! This is such a blessing, so thankful to OBWS."
                </p>
                <small>
                  <b>-Ariana Pierce</b>,<span className="Poppins"> CEO of style and Travel Girl</span>
                </small>
              </div>
            </div>
          </Col>
        </Container>
        </div>
      </div>
    </>
  );
};

export default Hero;
