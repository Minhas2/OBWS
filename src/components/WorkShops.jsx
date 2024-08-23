import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const WorkShops = () => {
  const workshopItems = [
    {
      list: "Driving",
    },
    {
      list: "DRIVING SALES",
    },
    {
      list: "FUNDING AND RAISING CAPITAL",
    },
    {
      list: "MEDIA AND MARKETING",
    },
    {
      list: "AUTOMATING AND STREAMLINING OPERATIONS",
    },
    {
      list: "HIRING A LEAN TEAM",
    },
    {
      list: "ACCOUNTING AND BUSINESS FINANCE",
    },
    {
      list: "LEGAL COMPLIANCE, INTELLECTUAL PROPERTY, AND CONTRACTS",
    },
    {
      list: "BEING AN EFFECTIVE LEADER",
    },
    {
      list: "STRATEGIC THINKING AND BUSINESS MODELING",
    },
  ];
  return (
    <>
      <div className="bgpink">
        <Container>
          <Row className="workshop justify-content-between py-5">
            <Col xs={12} lg={5} className="pt-5">
              <div className=" text-dark pt-5">
              <h1 className="stylishfont mainheading " style={{color:"#EF6C38",fontSize:"40px"}}>Trainings & Workshops</h1>
                <h1 className="headingfont">
                  Access To Business Coaching And Guidance For Entrepreneurs,
                  Led By Industry Experts.
                </h1>
              </div>
            </Col>
            <Col xs={12} lg={6}>
              <div>
                <ul className="p-0">
                  {workshopItems.map((item, index) => (
                    <li key={index} className="px-3 py-2 my-2">
                      {item.list}
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="tremendous-outer">
      <Container>
      
        <Col xs={12} lg={8} className="mx-auto tremendous-inner">
     
          <div className="text-center card rounded-0 p-5 pinkborder">
            <h1 className="headingfont tremendous">
              "They Have Helped Tremendously With Our Brand Awareness And With
              Sales."
            </h1>
            <p className="Poppins">
              "Official Black Wall Street is a great source for advertising. We
              have used their advertising services multiple times for our
              business and have been more than satisfied with the results. They
              have helped tremendously with our brand awareness and with sales.
              If you are looking to expand your black owned business, we highly
              recommend using OBWS advertising services."
            </p>
            <b>-VIERYLE WATCHES CEO</b>
          </div>
        </Col>
      </Container>
      </div>
    </>
  );
};

export default WorkShops;
