import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import CardsHeading from "./CardsHeading";

const cardData = [
  {
    title: "Discount & Perks",
    description:
      "Create a landing page to sell your products and/or services - your official digital storefront on our high-converting platform.",
  },
  {
    title: "Grant Funding Oppurtunite List",
    description:
      "Have your business featured and shared to over 1 million followers and subscribers across OBWS's newsletter and social media platforms.",
  },
  {
    title: "Reply To Your Page & Product Reviews",
    description:
      "Encourage your customers to leave public reviews of your products and services to help other potential customers make informed decisions about their purchases.",
  },
  {
    title: "Reply To Your Page & Product Reviews",
    description:
      "Encourage your customers to leave public reviews of your products and services to help other potential customers make informed decisions about their purchases.",
  },
  {
    title: "Reply To Your Page & Product Reviews",
    description:
      "Encourage your customers to leave public reviews of your products and services to help other potential customers make informed decisions about their purchases.",
  },
];

const ResourceMembershipCards = () => {
  return (
    <>
      <Container>
        <Col xs={12} className=" py-5">
          <CardsHeading
            heading="With The"
            orangeheading=" Resource Membership Level"
            afterheading=",You'll Get:"
            subheading="Everything in "
            orangeparagraph="Resouce Membership Level"
          />
          <Row className="justify-content-center">
            {cardData.map((card, index) => (
                <>
              <Col  className="col-12 col-lg-2"  key={index} >
                <Card  className=" rounded-5 resourcecard py-3 my-2">
                  <div className="text-center recourcetitle">
                    <h3 className="headingfont py-2 px-3">{card.title}</h3>
                  </div>
                  <div className=" pricing px-2 Poppins">
                    <ul>
                      <li>{card.description}</li>
                    </ul>
                  </div>
                </Card>
              </Col>
            
              </>
            ))}
          </Row>
        </Col>
      </Container>
    </>
  );
};

export default ResourceMembershipCards;
