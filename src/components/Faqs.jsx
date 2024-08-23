import React from "react";
import { Accordion, Button, Col, Container, Row } from "react-bootstrap";
import arrow from "../assets/arrow.svg";
const Faq = () => {
  const faqItems = [
    {
      question: "I operate my business outside of the U.S. Can I create a storefront landing page?",
      answer:
        "Absolutely. OBWS businesses span 10 different countries (& growing). We welcome Black entrepreneurs from all over the world. ",
    },
    {
      question: " Is Official Black Wall Street only for brick and mortar businesses?",
      answer:
        "Absolutely. OBWS businesses span 10 different countries (& growing). We welcome Black entrepreneurs from all over the world. ",
    },
    {
      question:
        "My business isn't officially established yet. Should I join? ",
      answer:
        "Absolutely. OBWS businesses span 10 different countries (& growing). We welcome Black entrepreneurs from all over the world. ",
    },
    {
      question: "Which membership level is best for me?",
      answer:
        "Absolutely. OBWS businesses span 10 different countries (& growing). We welcome Black entrepreneurs from all over the world. ",
    },
    {
      question: "How can I list my business on your app/website?",
      answer:
        "Absolutely. OBWS businesses span 10 different countries (& growing). We welcome Black entrepreneurs from all over the world. ",
    },
    {
      question: "What happens after I join?",
      answer:
        "Absolutely. OBWS businesses span 10 different countries (& growing). We welcome Black entrepreneurs from all over the world. ",
    },
    {
      question: "Do you offer advertising? ",
      answer:
        "Absolutely. OBWS businesses span 10 different countries (& growing). We welcome Black entrepreneurs from all over the world. ",
    },
    {
      question: "Can I cancel my membership at any time? ",
      answer:
        "Absolutely. OBWS businesses span 10 different countries (& growing). We welcome Black entrepreneurs from all over the world. ",
    },
    {
      question: "I have another question that isn't addressed here. Where can I receive support?",
      answer:
        "Absolutely. OBWS businesses span 10 different countries (& growing). We welcome Black entrepreneurs from all over the world. ",
    },
  ];

  return (
    <div className="faqouter">
      <Container>
        <div className="text-light ">
          <Row>
            <Col sm={7} className="mx-auto mt-2 mb-3">
              <div className="text-center text-dark py-5 faq-heading">
                <h1 className="headingfont">Frequently Asked Question</h1>
              </div>

              <Accordion defaultActiveKey="0">
                {faqItems.map((item, index) => (
                  <Accordion.Item
                    className="mb-4 bg-transparent text-light border-bottom border-0 border-white"
                    key={index}
                    eventKey={index.toString()}
                  >
                    <Accordion.Header className="bg-transparent text-dark px-0">
                      {item.question}
                    </Accordion.Header>
                    <Accordion.Body className="text-dark px-0 paragraphfont">
                      {item.answer}
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
              <div className="scriptside text-center">
              <Button className="my-3 text-white">
              Join <b>OBWS</b> <img src={arrow} alt="" />
            </Button>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Faq;
