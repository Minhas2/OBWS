import React from "react";
import { Col, Container, Image } from "react-bootstrap";
import brands from "../assets/brands.png";
const Branding = () => {
  return (
    <>
      <Container className="py-5">
        <Col xs={12} lg={10} className="mx-auto text-center">
          <div className="py-5">
          <h4 className="seen">AS SEEN IN</h4>
          </div>
          <Image src={brands} width={"100%"} />
        </Col>
      </Container>
    </>
  );
};

export default Branding;
