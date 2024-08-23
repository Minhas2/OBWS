import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import heading from "../assets/flip.png";
import scriptside from "../assets/scriptside.png";
const ScriptSidebySide = () => {
  return (
    <>
      <Container className="py-5 sidebysidebg">
        <Row className="pb-5">
          <Col xs={12} lg={6}>
            <div className="scriptside pb-5">
            <h1 className="stylishfont mainheading text-black">Let's flip <span className="backgroundheaadingorange">the script</span></h1>
              <h2 className="py-3 headingfont">
                Getting Eyes On Your Buisness Should Be The Least Of Your
                Worries
              </h2>
              <p className="Poppins">As a small business owner, sometimes the struggle is real.</p>
              <p className="Poppins">
                It can feel tough to compete when the bigger players (with deep
                pockets) seem to get all of the spotlight. The stats tell us
                it's harder for us to scale - limited access, limited capital,
                and limited resources.
              </p>
              <p className="Poppins">
                But you're not one to let that stop you, right? You're a force,
                ready to make your mark on the world.
              </p>
              <p className="Poppins">
                That's why we created OBWS, a platform designed to level the
                playing field and shine the spotlight on your brilliance.
              </p>
            </div>
          </Col>
          <Col xs={12} lg={6}>
            <div className="text-center scriptssideimage mt-2">
              <Image src={scriptside} width={"90%"} />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ScriptSidebySide;
