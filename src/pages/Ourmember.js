import React from "react";
import { Row, Container,Image, Card } from "react-bootstrap";
import "../css/Banner.css";
import Carousel from 'react-grid-carousel'
import Picture from "../images/m1.jpeg";
import Member1 from "../images/m2.jpeg";
import Member2 from "../images/m3.jpeg";
import Member3 from "../images/m4.jpeg";
import Member4 from "../images/m5.jpeg";
import Member5 from "../images/m6.jpeg";
import Member6 from "../images/m7.jpeg";
import Member7 from "../images/m7.jpg";
import Member8 from "../images/m8.jpg";

const Ourmember = () => {
 
  const members = [
   {
    name: "Saiyvoud",
    role: "CEO",
    img: Picture
   },
   {
    name: "Thongmoua",
    role: "CTO",
    img: Member1
   },
   {
    name: "Manyloud ",
    role: "PM",
    img: Member6
   },
   {
    name: "Thatsaphone",
    role: "UX/UI",
    img: Member3
   },
   {
    name: "Saipaserd",
    role: "UX/UI",
    img: Member2
   },
   {
    name: "Xaypanya",
    role: "Web Developer",
    img: Member4
   },
   {
    name: "Binry",
    role: "Mobile Developer",
    img: Member5
   },
   {
    name: "GongGi",
    role: "Full Stack Developer",
    img: Member8
   },
   {
    name: "Porthoa ",
    role: "Full Stack Developer",
    img: Member7
   },
  ]

  return (
    <div
      style={{ marginTop: "100px" }}
      className="text-center mb-5 mt-5"
      id="Member"
    >
      <Container className="mt-5">
        <h3 className="font1" style={{ color: "#1771BC" }}>
          Our Member
        </h3>
        <h3 className="fw-bold mb-5">ທີມງານທີ່ມີປະສົບການ</h3>
        <Row className="p-5">
<Carousel cols={4}  rows={1}  gap={11}
  responsiveLayout={[
    {
      breakpoint: 1200,
      cols: 3
    },
    {
      breakpoint: 990,
      cols: 2
    }
  ]}
  mobileBreakpoint={670}
>
    {
      members.map((member, index)=>(
        <Carousel.Item>
        <Card className="shadow-lg py-3" style={{border:'none', backgroundColor:'white'}}>
                    <Card.Header style={{border:'none'}}>
                         <Image src={member.img} style={{height:'115px', width: '115px', objectFit: 'cover', borderRadius:'100px'}}/>
                    </Card.Header>
                    <Card.Body>
                    <p className="fw-bold fs-5">{member.name}</p>
                     <Card.Title className="font1">{member.role}</Card.Title>
                    </Card.Body>
                   </Card>
        </Carousel.Item>
      ))
    }
</Carousel>








        </Row>
      </Container>
    </div>
  );
};

export default Ourmember;
