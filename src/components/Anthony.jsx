import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Anthony = () => {
  const individuals = [
    {
      role: "SALES & OPERATING EXPERT",
      name: "TEQUILA COOPER SHAHBAZ",
      description: "Founder of Qui Virtual Support Solutions",
    },
    {
      role: "FINANCE EXPERT",
      name: "ANTHONY H. WILLIAMS",
      description: "Founder and Wealth Management Advisor",
    },
    {
      role: "CROUDFUNDING EXPERT",
      name: "RENEE KING",
      description: "Founder of Fund Black Founders",
    },
    {
      role: "MARKETING EXPERT",
      name: "MANDY BOWMAN",
      description: "of Official Black Wall Street",
    },
  ];
  return (
    <>
      <Container>
        <Col xs={12} lg={6} className="mx-auto">
          <div className="text-center anthony-heading py-lg-5 py-3">
            <h3>LEARN FROM OUR</h3>
            <h1 className="headingfont">SUBJECT MATTER EXPERTS</h1>
          </div>
        </Col>
      </Container>
      <Container
        className="bgpink mt-4 mb-2"
        style={{ border: "2px solid #FBE3D7" }}
      >
        <Row>
          {individuals.map((data, index) => (
            <Col xs={12} lg={3}>
              <div
                className="anthony text-center px-3 my-5"
                style={{
                  borderRight:
                    index !== 3 && window.innerWidth >= 768
                      ? "2px solid #FBE3D7"
                      : "none",
                }}
              >
                <h5 className="headingfont">{data.role}</h5>
                <h1 className="headingfont">{data.name}</h1>
                <p className="paragraphfont">{data.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Anthony;
