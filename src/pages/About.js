import React from "react";
import { Image, Row, Col, Container } from "react-bootstrap";
import Carousel from "react-grid-carousel";
import Picture1 from "../images/congra1.jpeg";
import Picture2 from "../images/congra.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// import required modules
import { Autoplay, Pagination} from "swiper";

function About() {
  return (
    <Container className="mt-5 mb-5 p-5" id="about">
    <div className="about_container">
      <div className="swiper_container">
      <Swiper
       spaceBetween={30}
       autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination]}
      className="mySwiper">
        <SwiperSlide>
          <img src={Picture1} alt="" style={{width: '100%', borderRadius: 5, objectFit: 'cover', height: 260}}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Picture2} alt="" style={{width: '100%', borderRadius: 5, objectFit: 'cover', height: 260}}/>
        </SwiperSlide>
      </Swiper>
      </div>
      <div className="about_text_container">
        <h3 className="text-center fw-bold" style={{ color: '#1771BC' }}>ກຽ່ວກັບ ມີດີເທັກ </h3>
        <p className="fs-4">
          ພວກເຮົາໃຫ້ບໍລິການດ້ານການພັດທະນາໂປແກຼມມືຖືທີ່ດີທີ່ສຸດ, ການພັດທະນາເວບໄຊທ໌ແລະ ຊອບແວໃຫ້ກັບບໍລິສັດຕ່າງໆໃນລາວ ແລະ ຕ່າງປະເທດ. ໂດຍນຳໃຊ້ເຕັກໂນໂລຢີທັນສະໄໝເຊັ່ນ: React JS,Next js Angular JS, Node JS, Flutter, Java, Python, Golang ແລະ ອື່ນໆ.
        </p>
      </div>
    </div>
    <hr className="mt-5" />
  </Container>
  )
}

export default About