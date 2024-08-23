import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import arrow from "../assets/arrow.svg";

const PackageCards = () => {
  return (
    <Container>
      <Col xs={11} className="mx-auto py-5">
        <Row className="py-5">
          <Col xs={12} lg={4}>
            <Card className="pricing rounded-5 my-2">
              <div className="text-center p-2">
                <p className="paragraphfont">Best for new entrepreneurs</p>
                <h1 className="platformtext">Platform</h1>
                <h3 className="headingfont">
                  <span> $35/MONTH </span>OR $350/YEAR
                </h3>
              </div>
              <div className="p-3 Poppins">
                <ul>
                  <li>Create a landing page for your business</li>
                  <div className="mb-2 line-425" style={{border:'1px solid gray'}}></div>
                  <li>Add up to 5 products or services to your page</li>
                              <div className="mb-2 line-425" style={{border:'1px solid gray'}}></div>
                  <li> Reply to your page & product reviews</li>
                              <div className="mb-2 line-425" style={{border:'1px solid gray'}}></div>

                  <li>Social Media Feature in New Member Round Up</li>
                              <div className="mb-2 line-425" style={{border:'1px solid gray'}}></div>
                  <li>Create a Landing Page for your business</li>
                    <div className="mb-2 line-425" style={{border:'1px solid gray'}}></div>
                  <li>
                    Social media feat new member round up{" "}
                    <b> (Non-Member Cost: $150)</b>
                  </li>
                    <div className="mb-2 line-425" style={{border:'1px solid gray'}}></div>
                  <li>
                    Newsletter feature in new member round up
                    <b> (Non- Member Cost: $150)</b>
                  </li>
                    <div className="mb-2 line-425" style={{border:'1px solid gray'}}></div>
                  <li>Monthly virtual meet & greet.</li>
                  <div className="mb-2 line-425" style={{border:'1px solid gray'}}></div>
                </ul>
              </div>
              <div className="scriptside text-center">
                <Button className="my-3 w-75 text-white">
                  Join <b>Now</b> <img src={arrow} alt="" />
                </Button>
              </div>
            </Card>
          </Col>

          <Col xs={12} lg={4}>
            <Card className="pricing rounded-5 my-2 bestvalue" >
              <div className="growth text-center py-3 ">
                <b>Best Value</b>
              </div>
              <div className="text-center p-2">
                <p className="paragraphfont">
                  Best for entrepreneurs ready to scale
                </p>
                <h1 className="platformtext">Growth</h1>
                <h3 className="headingfont">
                  <span> $297/MONTH </span>OR $2,999/YEAR
                </h3>
              </div>
              <div className="p-3 Poppins">
                <b>Everything is resource Plus...</b>
                <ul>
                  <li>
                    Monthly homepage Editor's Pick feature{" "}
                    <b>(Non-Member Cost: $100)</b>
                  </li>
                  <div className="mb-2 line-425" style={{border:'1px solid gray'}}></div>
                  <li>
                    Monthly newsletter highlight
                    <b>(Non-Member Cost: $150)</b>
                  </li>
                  <div className="mb-2 line-425" style={{border:'1px solid gray'}}></div>

                  <li>
                    Monthly social media post on all OBWS platforms
                    <b>(Non-Member Cost: $550)</b>
                    <ul>
                      <li>
                        <b>Includes:</b> IG, FB, TW, TikTok Threads, Linkedin
                        <b>(1.5M followers total)</b>
                      </li>
                    </ul>
                  </li>
                  <div className="mb-2 line-425" style={{border:'1px solid gray'}}></div>
                  <li>
                    4 Interviews per year: 1 per quarter{" "}
                    <b>(Non-member Cost: $3,000)</b>
                  </li>
                  <div className="mb-2 line-425" style={{border:'1px solid gray'}}></div>

                  <li>
                    Monthly group coaching/ office hours with industry experts
                  </li>
                  <div className="mb-2 line-425" style={{border:'1px solid gray'}}></div>

                  <li>
                    First access to OBWS campaigns, events, & offers JOIN NOW
                  </li>
                  <div className="mb-2 line-425" style={{border:'1px solid gray'}}></div>

                </ul>
              </div>
              <div className="scriptside text-center">
                <Button className="my-3 w-75 text-white">
                  Join <b>OBWS</b> <img src={arrow} alt="" />
                </Button>
              </div>
            </Card>
          </Col>

          <Col xs={12} lg={4}>
            <Card className="pricing rounded-5 my-2">
              <div className="text-center p-2">
                <p className="paragraphfont">Best for emerging entrepreneurs</p>
                <h1 className="platformtext">Resource</h1>
                <h3 className="headingfont">
                  <span> $97/MONTH </span>OR $999/YEAR
                </h3>
              </div>
              <div className="p-3 Poppins">
                <b>Everything in Basic,plus....</b>
                <ul>
                  <li>Access to list of over $500K in funding opportunities</li>
                  <div className="mb-2 line-425" style={{border:'1px solid gray'}}></div>
                  <li>Business Discounts and Perks</li>
                  <div className="mb-2 line-425" style={{border:'1px solid gray'}}></div>
                  <li>Access to masterclass replays</li>
                  <div className="mb-2 line-425" style={{border:'1px solid gray'}}></div>

                  <li>Access to list of conferences & events for creatives</li>
                  <div className="mb-2 line-425" style={{border:'1px solid gray'}}></div>
                </ul>
              </div>
              <div className="scriptside text-center">
                <Button className="my-3 w-75 text-white">
                  Join <b>OBWS</b> <img src={arrow} alt="" />
                </Button>
              </div>
            </Card>
          </Col>
        </Row>
      </Col>
    </Container>
  );
};

export default PackageCards;
