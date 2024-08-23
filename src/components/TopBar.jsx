import React from "react";
import { Container, Image } from "react-bootstrap";
import rocket from "../assets/rocket.svg"
import join from "../assets/joinbtn.png"
const TopBar = () => {
  return (
    <>
      <div style={{ backgroundColor: "#F8F7F3",borderBottom:"2px solid #F5B189" }}>
        <Container>
          <div className="text-center py-3">
            <p className=" topbar m-0 ">
              <span >Join the <Image src={rocket}/> <b>#1 platform for Black-owned buisnesses</b> and get in
              front of<b> A Million</b> shoppers</span><button className="join mx-1"><Image src={join} width={"100%"}/></button>
            </p>
          </div>
        </Container>
      </div>
    </>
  );
};

export default TopBar;
