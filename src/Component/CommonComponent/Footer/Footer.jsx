import React, { useState, useEffect } from "react";
import { Col, Container, Row, Form } from "react-bootstrap";
import companyLogo from "../../../assets/Header/navLogo.webp";
import fbIcon from "../../../assets/Footer/facebookIcon.webp";
import senderIcon from "../../../assets/Footer/senderIcon.webp";
import twitterIcon from "../../../assets/Footer/twitter.webp";
import freepikIcon from "../../../assets/Footer/freepik.webp";
import mediaIcon from "../../../assets/Footer/midea5.webp";

export default function Footer() {
  const optionRightArr = [
    "Ripple coin",
    "Bitcoin",
    "Ethireum",
    "Light coin",
    "Coin base",
    "Skrill card",
  ];
  const optionLeftArr = [
    "About Us",
    "Stacking",
    "Token Ico",
    "FAQ",
    "Blog",
    "Contact",
  ];

  const [loading, setLoading] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);

  const handleClick = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setContentVisible(true);
    }, 2000);
  };

  useEffect(() => {
    let timer;

    if (contentVisible) {
      timer = setTimeout(() => {
        setContentVisible(false);
      }, 5000);
    }

    return () => clearTimeout(timer);
  }, [contentVisible]);

  return (
    <>
    <div className="footerWrapper">
      <Container>
        <Row>
          <Col sm={12} md={4} lg={4}>
            <img src={companyLogo} />
            <div className="mt-30 d-flex justify-content-start">
              <div className="iconWrapper mr-10">
                <img
                  src={fbIcon}
                  className="wow flipInY"
                  data-wow-duration="0.6s"
                  data-wow-delay="0.3s"
                />
              </div>
              <div className="iconWrapper mr-10">
                <img
                  src={senderIcon}
                  className="wow flipInY"
                  data-wow-duration="0.6s"
                  data-wow-delay="0.3s"
                />
              </div>
              <div className="iconWrapper mr-10">
                <img
                  src={twitterIcon}
                  className="wow flipInY"
                  data-wow-duration="0.6s"
                  data-wow-delay="0.3s"
                />
              </div>
              <div className="iconWrapper mr-10">
                <img
                  src={freepikIcon}
                  className="wow flipInY"
                  data-wow-duration="0.6s"
                  data-wow-delay="0.3s"
                />
              </div>
              <div className="iconWrapper">
                <img
                  src={mediaIcon}
                  className="wow flipInY"
                  data-wow-duration="0.6s"
                  data-wow-delay="0.3s"
                />
              </div>
            </div>
          </Col>
          <Col sm={12} md={4} lg={4}>
            <div className="pb-15">
              <h4 className="fs-22 fw-700 ml-10">Payments option</h4>
              <hr />
            </div>
            <Row>
              <Col sm={6} md={6} lg={6}>
                <ul>
                  {optionRightArr.map((option, index) => (
                    <li key={index} className="paymentOptionList">
                      {option}
                    </li>
                  ))}
                </ul>
              </Col>
              <Col sm={6} md={6} lg={6}>
                <ul>
                  {optionLeftArr.map((list, index) => (
                    <li key={index} className="paymentOptionList">
                      {list}
                    </li>
                  ))}
                </ul>
              </Col>
            </Row>
          </Col>
          <Col sm={12} md={4} lg={4}>
            <div className="pb-15">
              <h4 className="fs-22">Subscribe</h4>
              <hr />
            </div>
            <div>
              <p className="mb-22" style={{ lineHeight: "30px" }}>
                Are you looking for professional advice for your new business.
                Are you looking for professional advice.
              </p>
              <Form.Control
                type="email"
                id="emailInput"
                aria-describedby="passwordHelpBlock"
                placeholder="Type Email"
              />
              {contentVisible && (<p className="pt-3">The field is required.</p>) }

              <button
                className="subscribeBtn bg-pink fs-18 fw-700 text-white mt-15"
                onClick={handleClick}
              >
                Subscribe
              </button>
            </div>
            <div>
              {loading ? <img src="/src/assets/Header/ajax-loader.gif" /> : ""}
              {contentVisible && (
                <div className="mt-25 hiddenDiv">
                  <p>
                    One or more fields have an error. Please check and try
                    again.
                  </p>
                </div>
              )}
            </div>
          </Col>
        </Row>
      </Container>

    </div>
    <div className="copyRight">
      <Container>
        <Row>
          <Col sm={12} md={4} lg={4}>
            <div>
              <p className="mb-0">
              Copyright © 2023, Graphbit All Rights Reserved.
              </p>
            </div>
          </Col>
          <Col md={4} lg={4}></Col>
          <Col sm={12} md={4} lg={4}>
            <div>
              <ul className="d-flex list-none justify-content-around mb-0">
                <li>About</li>
                <li>Terms & Conditions</li>
                <li>Privacy</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    </>
  );
}
