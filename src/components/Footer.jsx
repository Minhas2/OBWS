import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import appstore from "../assets/appstore.png";
import google from "../assets/google.png";
import { FaInstagram } from "react-icons/fa";
import { LuFacebook } from "react-icons/lu";
import { FiLinkedin } from "react-icons/fi";
import { RiTwitterXFill } from "react-icons/ri";
import { AiOutlineYoutube } from "react-icons/ai";
import { RiTiktokLine } from "react-icons/ri";
const Footer = () => {
  const footerLinks1 = [
    "Discover",
    "Products",
    "Services",
    "Businesses",
    "Brick & Mortar",
    "Online-Based",
    "Restaurants",
    "Food",
  ];
  const footerLinks2 = [
    "Blog",
    "Contact Us",
    "Get Listed",
    "Advertise With Us",
    "Recommend a Business",
  ];

  return (
    <>
      <footer>
        <Container className="py-5">
          <Row>
            <Col xs={12} lg={4}>
              <div>
                <small>
                  Get the <b>OBWS app</b>
                </small>
                <div>
                  <Image src={appstore} width={"60%"} />
                </div>
                <div className="pt-2">
                  <Image src={google} width={"60%"} />
                </div>
              </div>
            </Col>
            <Col xs={12} lg={8}>
              <Row>
                <Col xs={12} lg={4} className="footerlinks">
                  <div className="paragraphfont">
                    <ul className="p-0">
                      {footerLinks1.map((link, index) => (
                        <li key={index} className="py-1">
                          {link}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Col>

                <Col xs={12} lg={4} className="footerlinks">
                  <div className="paragraphfont">
                    <ul className="p-0">
                      {footerLinks2.map((link, index) => (
                        <li key={index} className="py-1 px-2">
                          {link}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Col>
                <Col xs={12} lg={4} className="copyright">
                  <div className=" ">
                    <ul className="p-0 paragraphfont">
                      <li className="py-1 px-2">Terms</li>
                      <li className="py-1 px-2">Privacy Policy</li>
                    </ul>
                    <p className="px-2">
                      All Rights Reserved, 2022R
                      <span className="official">
                        {" "}
                        Official Black Wall Street
                      </span>
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>

          <div>
            <div className="flex text-center pt-4">
            <FaInstagram className="social mx-2" />
            <LuFacebook  className="social mx-2"/>
            <FiLinkedin  className="social mx-2"/>
            <RiTwitterXFill className="social mx-2" />
            <AiOutlineYoutube className="social mx-2" />
            <RiTiktokLine className="social mx-2" />
         
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
