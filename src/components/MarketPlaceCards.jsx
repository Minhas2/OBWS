import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import CardsHeading from "./CardsHeading";

const cardData = [
  {
    title: "OBWS Storefront Landing Page",
    description:
      "Create a landing page to sell your products and/or services - your official digital storefront on our high-converting platform.",
  },
  {
    title: "New Member Round Up Feature On Social Media & Newsletter",
    description:
      "Have your business featured and shared to over 1 million followers and subscribers across OBWS's newsletter and social media platforms.",
  },
  {
    title: "Reply To Your Page & Product Reviews",
    description:
      "Encourage your customers to leave public reviews of your products and services to help other potential customers make informed decisions about their purchases.",
  },
];

const MarketPlaceCards = () => {
  return (
    <>
      <Container >
        <Col xs={12} lg={9} className="mx-auto py-5">
          <div className="gainedinner">
            <CardsHeading
              heading="Your Black Owned"
              orangeheading=" Digital MarketPlace"
              subheading="With the "
              orangeparagraph="Platform Membership Level"
              aftersubheading=", you'll get:"
            />
          </div>

          <Row>
            {cardData.map((card, index) => (
              <Col xs={12} lg={4} key={index}>
                <Card className=" rounded-5 marketcard my-2">
                  <div className="text-center p-4">
                    <h1 className="headingfont">{card.title}</h1>
                  </div>
                  <div className="px-3 pricing Poppins">
                    <ul>
                      <li>{card.description}</li>
                    </ul>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Container>
    </>
  );
};

export default MarketPlaceCards;
