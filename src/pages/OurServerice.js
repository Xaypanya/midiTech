import React, { useEffect, useState } from "react";
import "../css/Banner.css";
import { Container, Row, Col, Image, Carousel } from "react-bootstrap";
import { GrPersonalComputer } from "react-icons/gr";
import { FaRegHandshake, FaMobileAlt } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import {db} from '../firebase-config'
import { collection, getDocs } from 'firebase/firestore'
import Picture from "../images/congra.jpeg";
import Picture1 from '../images/web6.jpeg'
import Picture3 from '../images/web9.jpeg'
import Picture4 from '../images/web8.jpeg'
import Picture5 from '../images/web10.jpeg'



import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// import required modules
import { Autoplay, Pagination} from "swiper";

const OurServerice = () => {

  const [courses, setCourses] = useState([])

  console.log("courses -->", courses)
  const [isLoading, setIsLoading] = useState(true)
  const coursesCollectionRef = collection(db, 'courses');
  const [realIndexSlide, setRealIndexSlide] = useState(0)

  useEffect(()=>{
    const getCourses = async () => {
        setIsLoading(true)
        const data = await getDocs(coursesCollectionRef);
        setCourses(data.docs.map((doc)=>({...doc.data(), id: doc.id})));
        setIsLoading(false)
      }
      getCourses();
  },[])



  return (
    <>
      <Container className="mt-3 mb-5 " id="Service">
        <h2 className="fw-bold text-center mb-3 " style={{ color: "#1771BC" }}>
          ບໍລິການຂອງພວກເຮົາ
        </h2>
        <h2 className="fw-bold text-center mb-3 font1">Our Service</h2>
        <div style={{display: 'flex'}}>
          <a href="#footer"  style={{ width: '50%'}}>
          <div
             id="hover"
            className="text-center me-2 rounded-4 mt-2 hover"
            md={6}
          >
            <Image
            src={Picture5}
              alt="ict solution"
              style={{ height: "130px" }}
              className="p-1"
            />
            <h3 className="font1 mt-5">Training</h3>
            <GiTeacher size={50} className="mt-4 mb-3" />
          </div>
          </a>
          <a href="#footer" style={{ width: '50%'}}>
          <div
          id="hover"
            className=" text-center rounded-4 mt-2"
            md={6}
          >
            <Image
              src={Picture1}
              alt="website development"
              style={{ height: "130px" }}
              className="p-1"
            />
            <h3 className="font1 mt-5">WEB Development</h3>
            <GrPersonalComputer size={50} className="mt-4 mb-3" />
          </div>
          </a>
        </div>
        <div style={{display: 'flex'}}>
          <a href="#footer" style={{ width: '50%'}}>
          <div
          id="hover"
            className="text-center me-2 rounded-4 mt-2"
            md={6}
            style={{
            }}
          >
            <Image
              src={Picture3}
              alt="ict solution"
              style={{ height: "130px" }}
              className="p-1"
            />
            <h3 className=" font1 mt-5">Mobile Application</h3>
            <FaMobileAlt size={50} className="mt-4 mb-3" />
          </div>
          </a>
          <a href="#footer" style={{ width: '50%'}}>
          <div
          id="hover"
            className=" text-center rounded-4 mt-2"
            md={6}
          >
            <Image
              src={Picture4}
              alt="ict solution"
              style={{ height: "130px" }}
              className="p-1"
            />
            <h3 className="font1 mt-5">Consulting</h3>
            <FaRegHandshake size={50} className="mt-4 mb-3" />
          </div>
          </a>
        </div>
      </Container>

      <div
        style={{ marginTop: "80px" }}
        className="mb-5"
      >
        <Container style={{backgroundColor: "#10ac84"}} className='p-5 rounded-5'>
          <Row >
            <Col md={6}>
              <h3 className="fw-bold text-white text-center">
                Course ສອນ
              </h3>
              <p className="fw-bold fs-5 text-white ms-5 mt-4">
                ພວກເຮົາຮັບສອນທັງແບບ ອອນລາຍ ແລະ ເຊິ່ງໜ້າ, ເໝາະສຳລັບທຸກຄົນທີ່ສົນໃຈຂຽນແອັບ, ມືໃໝ່ທີ່ບໍ່ມີປະສົບການມາກ່ອນກໍສາມາດຮຽນນຳເຮົາໄດ້ ເພາະພວກເຮົາສອນຕັ້ງແຕ່ ສູນ ຈົນສາມາດຂຽນ ແອັບເປັນ.
              </p>
              <p className="fw-bold fs-5 text-white ms-5 mt-4">
                <li>{
                  courses?.[realIndexSlide]?.name
                }</li>
              </p>
            </Col>

            <Col className="text-center" md={6}>
                      <Swiper
                      spaceBetween={30}
                      autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                      onSlideChange={(e)=> setRealIndexSlide(e?.realIndex)}
                      modules={[Autoplay, Pagination]}
                      className="mySwiper">
                         {
                            courses?.map((course, index)=>(
                              <SwiperSlide key={index}>
                                <img src={course?.image} alt="" style={{width: '100%', borderRadius: 5, objectFit: 'cover', height: 300}}/>
                              </SwiperSlide>
                            ))
                          }
                     
                      </Swiper>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default OurServerice;
