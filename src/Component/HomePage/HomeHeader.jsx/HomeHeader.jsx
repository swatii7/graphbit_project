import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImage from "../../../assets/Header/headerImg.webp";
import CustomButton from "../../CommonComponent/CustomButton/CustomButton";
import "animate.css";

export default function HomeHeader() {
  return (
    <div className="position-absolute headerWrapper">
      <Container className="px-15 headerContainer">
        <Row className="d-flex">
          <Col sm={12} md={6} lg={6}>
            <div className="mt-20 wow animate__animated animate__fast animate__fadeInUp">
                <h1 className="font-josefin fs-68 homeHeading fw-700 lh-76 mb-20">
                  The blockchain
                  <br />
                  <span className="text-pink fw-800 lh-76">technology </span>
                  for a brighter tomorrow
                </h1>
              
            </div>
            <div className="d-flex buttonWrappper mt-15 align-items-end wow animate__animated animate__fadeInUp">
              <CustomButton
                buttonTitle="Get Started"
                className="pink-btn navButton transition-btn py-12 px-20 mt-15"
              />
              <CustomButton
                buttonTitle="White Paper"
                className="purple-btn navButton transition-btn py-12 px-20 mt-15 ml-20"
              />
            </div>
          </Col>
          <Col sm={12} md={6} lg={6}>
            <div className="wow animate__animated animate__fadeInUp">
              <img
                src={headerImage}
                style={{ maxWidth: "540px" }}
                className="img-fluid homeHeaderImage"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
