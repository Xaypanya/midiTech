import React from "react";
// import Picture from '../images/program.jfif'
import Phone from "../images/iPhone-12-front-1.png";
import "../css/Banner.css";
import Carousel from "react-grid-carousel";
import TypingEffect from "react-typing-effect";
import {Col, Row, Container,Image} from 'react-bootstrap'
import "../css/Banner.css";
const Banner = () => {
  return (
    <>
      <Row className="p-4 mx-auto background_Image" style={{minHeight: '50vh'}}
      >
        <Col className="h-auto p-4 text-center col-12 col-md-6">
          <h1 className="font">ສະບາຍດີ</h1>
          <TypingEffect
            className="fs-3 fw-bold text1"
            text={[
              "Welcome to MidiTech",
              "ຍີນດີຕ້ອນຮັບເຂົ້າສູ່ມີດີເທັກ",
            ]}
          />
        </Col>
        <Col className="p-3d-flex text-center align-items-center col-12 col-md-6">
            <Carousel
              cols={1}
              rows={1}
              gap={50}
              loop={true}
              dotColorActive="#1771BC"
              autoplay={2000}
              hideArrow={true}
            >
              <Carousel.Item>
                <Image
                  src={Phone}
                  alt="iphone"
                  className=""
                  style={{ height: "300px"}}
                />
              </Carousel.Item>

              <Carousel.Item>
                <Image
                  src="https://www.netsetsoftware.com/images/web-_app_development_top_imag.png"
                  alt="iphone"
                  className=""
                  style={{ height: "300px"}}
                />
              </Carousel.Item>
              </Carousel>
        </Col>
      </Row>
    </>
  );
};

export default Banner;
