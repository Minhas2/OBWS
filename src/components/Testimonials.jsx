import React from "react";
import { Col, Container } from "react-bootstrap";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import profile from "../assets/profile.png";

const Testimonials = () => {
    const testimonialData = [
        {
            id: 1,
            image: profile,
            message: "I had a great experience advertising with Official Black Wall Street. I gained so much exposure and sold over hundreds of books. I would highly recommend OBWS for any Black business owner trying to gain sales and exposure.",
            author: "Latoya Nicole",
            company: "CEO of Rosee Buds",
        },
        {
            id: 2,
            image: profile,
            message: "I had a great experience advertising with Official Black Wall Street. I gained so much exposure and sold over hundreds of books. I would highly recommend OBWS for any Black business owner trying to gain sales and exposure.",
            author: "Latoya Nicole",
            company: "CEO of Rosee Buds",
        },
        {
            id: 3,
            image: profile,
            message: "I had a great experience advertising with Official Black Wall Street. I gained so much exposure and sold over hundreds of books. I would highly recommend OBWS for any Black business owner trying to gain sales and exposure.",
            author: "Latoya Nicole",
            company: "CEO of Rosee Buds",
        },
      
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
    };

    return (
        <div className="greysection">
            <div className=" py-lg-5 py-3">
                <Container>
                    <Col xs={12} lg={8} className="mx-auto py-lg-5">
                        <div className="text-center anthony-heading orangelinebg">
                            <p className="text-white paragraphfont">
                                The Official Black Wall Street App is a part of our
                            </p>
                            <h1 className="headingfont text-white">TOP 5 REFERING SITES</h1>
                            <h3 className="text-white">BLACK OWNED BUSINESS WINNING</h3>
                        </div>
                        <Slider {...settings}>
                            {testimonialData.map((testimonial) => (
                                <div key={testimonial.id} className="col-8">
                                    <div className="text-center py-4">
                                        <div className="m-auto " style={{ width: "100px", height: "100px" }}>
                                            <img src={testimonial.image} width={"100%"} alt="" />
                                        </div>
                                        <p className="my-3 text-white paragraphfont">Love Your App!!</p>
                                        <p className="my-3 text-white paragraphfont">{testimonial.message}</p>
                                        <p className="text-white">
                                            <b>- {testimonial.author}</b>{" "}
                                            <div className="paragraphfont">{testimonial.company}</div>
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </Col>
                </Container>
            </div>
        </div>
    );
};

export default Testimonials;
