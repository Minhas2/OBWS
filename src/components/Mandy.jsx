import React from "react";
import {  Col, Container, Image, Row } from "react-bootstrap";
import scriptside from "../assets/mandy.png";
const Mandy = () => {
  return (
    <>
      <Container className="py-5 mandy-bg">
    
        <Col xs={12} lg={11} className="mx-auto">
          <Row className="pb-lg-5">
            <Col xs={12} lg={5}>
              <div className="text-center scriptssideimage mt-2">
                <Image src={scriptside} width={"90%"} />
              </div>
            </Col>
            <Col xs={12} lg={7}>
              <div className="scriptside pb-lg-5 pt-3">
                <h2 className="py-3 headingfont">
                 I'm
                </h2>
                <h1 className="stylishfont mainheading text-black">Mandy Bowman</h1>
                <p style={{fontSize:"16px"}} className="text-muted">Founder and CEO of <span style={{color:"#EF6C38",fontWeight:"600"}}>Official Black Wall Street</span></p>
                <p className="Poppins">
                Inspired by the legacy of Tulsa's "Black Wall Street," I launched OBWS to empower Black business owners like you and foster a thriving community. 
                </p>
                <p className="Poppins">
                Witnessing Black-owned businesses struggle in my own neighborhood fueled my passion to connect consumers to these brands and provide the support they need.
                </p>
                <p className="Poppins">
                As an entrepreneur myself, I understand the struggles Black business owners face and want to help our community succeed.
                </p>
                <p className="heavy">
                Our goal is to create a global ecosystem and marketplace that makes it easier for consumers to discover products and services from Black owned brands while helping corporations provide funding and resources to Black businesses in need.
                </p>
                <p className="Poppins">
                I want to change the narrative and show the world (including ourselves) that we can come together and excel in spite of the challenges we may face.   
                </p>
                <p className="Poppins">
                Together, we can define our own stories, demonstrate late our collective resilience, and recirculate our dollars back into the Black owned businesses that need and deserve it.
                </p>

              </div>
            </Col>
          </Row>
        </Col>
      </Container>
    </>
  );
};

export default Mandy;
