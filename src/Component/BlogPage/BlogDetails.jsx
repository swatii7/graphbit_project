import React from "react";
import CommonHeader from "../CommonComponent/CommonHeaderSection/CommonHeader";
import { Col, Container, Row, Form, InputGroup } from "react-bootstrap";
import CommonBlogSection from "./CommonBlogSection/CommonBlogSection";
import blogOneImg from "../../assets/BlogPageImg/b1.webp";
import blogTwoImg from "../../assets/BlogPageImg/b3.webp";
import blogThreeImg from "../../assets/BlogPageImg/b4.webp";
import { PersonFill, Chat, Quote, CalendarWeek } from "react-bootstrap-icons";
import CustomPinkButton from "../CommonComponent/CustomButton/CustomPinkButton";
import CustomButton from '../CommonComponent/CustomButton/CustomButton'
import avtarImg from "../../assets/BlogPageImg/commentAvtar.png";
import ScrollToTop from "react-scroll-to-top";

export default function BlogDetails() {
  const tagButtonArr = ["Bitcoin", "Ethereum", "Ripple"];

  return (
    <div>
      <ScrollToTop smooth color="#fff" />
      <CommonHeader
        headerHeading="Make sure the prototype looks finished"
        activePageName="Blog Details"
      />
      <div className="blogDetailsWrapper">
        <Container>
          <Row>
            <Col sm={12} md={8} lg={8}>
              {/* blog details div */}
              <div className="py-30">
                <div className="blogImage position-relative">
                  <img src={blogOneImg} />
                  <div className="blog-item-date">
                    <span className="fs-13 fw-600">March 2, 2023</span>
                  </div>
                </div>
                <div className="blogContent">
                  <div className="mb-10">
                    <span className="fs-16 fw-400 pr-15">
                      <PersonFill className="text-pink mr-7" />
                      <a
                        href="#"
                        style={{ color: "#ddd", textDecoration: "none" }}
                      >
                        Admin
                      </a>
                    </span>
                    <span className="fs-16 fw-400 pr-10">
                      <Chat className="text-pink mr-7" />1 Comment
                    </span>
                  </div>
                  <p>
                    But I must explain to you how all this mistaken idea of
                    denouncing pleasure and praising pain was born and I will
                    give you a complete account of the system, and expound the
                    actual teachings of the great explorer of the truth, the
                    master-builder of human happiness. No one rejects, dislikes,
                    or avoids pleasure itself. because it is pleasure, but
                    because those who do not know how to pursue pleasure
                    rationally encounter consequences that are extremely
                    painful. Nor again is there anyone who loves or pursues or
                    desires to obtain pain of itself, because it is pain, but
                    because occasionally circumstances occur in which toil and
                    pain can procure him some great pleasure
                  </p>
                  <blockquote className="bg-blue fs-15">
                    <Quote className="quoteIcon" />
                    <p className="lh-28 fs-17">
                      Consultations are slowly gaining immense recognition and
                      are growing phenomenally with more and more people trading
                      with this digital currency. The universal acceptance of
                      Constation. pursue pleasure rationally encounter
                    </p>
                  </blockquote>
                  <p>
                    because it is pleasure, but because those who do not know
                    how to pursue pleasure rationally encounter consequences
                    that are extremely painful. Nor again is there anyone who
                    loves or pursues or desires to obtain pain of itself,
                    because it is pain, but because occasionally circumstances
                    occur in which toil and pain can procure him some great
                    pleasure.
                  </p>
                  <h4 className="fs-24 lh-34 fw-700">
                    With more and more people trading with this digital
                  </h4>
                  <p>
                    But I must explain to you how all this mistaken idea of
                    denouncing pleasure and praising pain was born and I will
                    give you a complete account of the system, and expound the
                    actual teachings of the great explorer of the truth, the
                    master-builder of human happiness.
                  </p>
                  <div className="gridImgContainer">
                    <img src={blogTwoImg} className="w-50 pr-15" />
                    <img src={blogThreeImg} className="w-50 pl-15" />
                  </div>
                  <p>
                    But I must explain to you how all this mistaken idea of
                    denouncing pleasure and praising pain was born and I will
                    give you a complete account of the system, and expound the
                    actual teachings of the great explorer of the truth, the
                    master-builder of human happiness. No one rejects, dislikes,
                    or avoids pleasure itself, because it is pleasure, but
                    because those who do not know how to pursue pleasure
                    rationally encounter consequences that are extremely
                    painful.
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-baseline">
                <div className="mr-15">
                  <p className="fw-700">Tags:</p>
                </div>
                <div>
                  {tagButtonArr.map((tags, index) => (
                    <CustomPinkButton key={index}
                      title={tags}
                      className="gridButton mx-2"
                    />
                  ))}
                </div>
              </div>

              {/* commentList Div */}
              <div>
                <div>
                  <h3 className="fs-28 fw-700 pb-20 mb-40 lh-40 commentHeading">
                    1 Comment
                  </h3>
                </div>

                <div className="bg-blue commentList d-flex">
                  <div className="mr-30 commentorImg">
                    <img src={avtarImg} />
                  </div>
                  <div className="d-flex justify-content-between">
                    <div>
                      <b className="fs-22">Alens</b>
                      <br />
                      <div className="d-flex">
                        <CalendarWeek style={{ marginRight: "5px" }} />
                        <span className="fs-15">March 2, 2023</span>
                      </div>

                      <p className="mt-10 fs-15" style={{ lineHeight: "26px" }}>
                        Dummy text is also used to demon strate the appea rance
                        of different typefaces and layouts, and in general the
                        content of dummy text is nonsensical.
                      </p>
                      <div className="position-absolute replyBtnWrapper">
                        <CustomPinkButton title="Reply" className="replyBtn" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* leave comment div */}
              <div className="mt-20">
                <div>
                  <h3 className="fs-28 fw-700 pb-20 mb-40 lh-40 commentHeading">
                    Leave A Comment
                  </h3>
                </div>
                <div>
                  <Row>
                    <Col sm={12} md={6} lg={6}>
                      <InputGroup className="mb-30">
                        <Form.Control
                          aria-label="First name"
                          placeholder="First Name"
                        />
                      </InputGroup>
                    </Col>
                    <Col sm={12} md={6} lg={6}>
                      <InputGroup className="mb-30">
                        <Form.Control
                          aria-label="email address"
                          placeholder="Email Address"
                        />
                      </InputGroup>
                    </Col>
                  </Row>
                  <div>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Control as="textarea" rows={3} placeholder="Write a comment..." className="commentArea" />
                    </Form.Group>
                  </div>
                  <CustomButton buttonTitle='Post A Comment' 
                  className='pink-btn navButton transition-btn py-12 px-20 mt-15 text-white fs-18 fw-bold'
                   />
                </div>
              </div>
            </Col>
            <Col sm={12} md={4} lg={4}>
              <CommonBlogSection />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
