import React from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import arrow from "../assets/arrow.svg";
import figure from "../assets/hundredheading.png"
const Figure = () => {
  const cardData = [
    {
      title: "The Platform Level Membership Is For You If...",
      description: [
        "You're in the beginning stages of your entrepreneurship journey and looking for affordable marketing solutions to increase leads and sales. ",
        "You want a platform to showcase your products and/or services to over 1.4 million shoppers.",
        "ou've been searching for a vibrant community of multi-faceted Black entrepreneurs to connect with and learn from.",
      ],
      background:"#FDF0EB"
    },
    {
      title: "The Resource Level Membership Is For You If...",
      description: [
        "You're an emerging entrepreneur searching for a wealth of resources (funding opportunities, exclusive events, business perks, and more) to help fuel your business growth.",
        " You're looking to find encouragement & mentorship and tap into a thriving community to overcome challenges and celebrate successes.",
        "You want to leverage our replays to learn at your own pace and 2 convenience, anytime, anywhere.",
      ],
      background:"white"
    },
    {
      title: "The Growth Level Membership Is For You If...",
      description: [
        "You're an ambitious entrepreneur ready to position yourself as a thought leader and scale your business with exclusive advertising and opportunities.",
        "You want to gain access to cutting-edge business tools and operations to optimize your business's operations. ",
        "You're ready to accelerate your business growth with ditional advertising, exclusive networking events, and the OBWS platform to forge valuable partnerships.",
      ],
      background:"#FDF0EB"
    },
  ];

  return (
    <div style={{ backgroundColor: "#E37957" }} className="py-5">
      <Container>
      <Col xs={12} lg={6} className="mx-auto">
        <div className="figure-heading text-center m-auto">
        <h1 className="stylishfont mainheading text-white"> <span className="backgroundheaading">Still Trying To Figure</span></h1>
          <h1 className="py-3 headingfont text-center text-white ">
            Out Which Level Is Best For You?
          </h1>
        </div>
        </Col>
        <Row className="justify-content-center">
          {cardData.map((card, index) => (
            <>
              <Col xs={12} lg={3}  key={index}>
                <Card className=" rounded-5 platforn py-3 my-2" style={{backgroundColor:card.background}}>
                  <div className="text-center ">
                    <h3 className="headingfont py-2 px-3">{card.title}</h3>
                  </div>
                  <div className=" pricing px-2 px-lg-4 mx-auto Poppins">
                    <ul>
                      {card.description.map((desc) => (
                        <li>{desc}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="scriptside text-center px-3">
                <Button className="my-3 w-100">
                  Join <b>OBWS</b> <img src={arrow} alt="" />
                </Button>
              </div>
                </Card>
              </Col>
            </>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Figure;
