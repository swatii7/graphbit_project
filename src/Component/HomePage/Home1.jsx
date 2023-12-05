import React, { useRef, useState, useEffect } from "react";
import HomeHeader from "./HomeHeader.jsx/HomeHeader";
import Features from "../CommonComponent/FeatureComponent/Features";
import CompanyPromoBanner from "../CommonComponent/CompanyPromoBanner/CompanyPromoBanner";
import { Container, Row, Col, Overlay, Dropdown, Form } from "react-bootstrap";
import {
  Clock,
  ArrowDownCircleFill,
  ArrowDownShort,
} from "react-bootstrap-icons";
import CustomPinkButton from "../CommonComponent/CustomButton/CustomPinkButton";
import BlockchainComponent from "../CommonComponent/CustomBlockchainComponent/BlockchainComponent";
import Detail from "../CommonComponent/DetailComponent/Detail";
import InvestmentPlatform from "../CommonComponent/InvestmentPlatformComponent/InvestmentPlatform";
import Wallet from "../CommonComponent/WalletComponent/Wallet";
import Faq from "../CommonComponent/FaqComponent/Faq";
import SwapForm from "../CommonComponent/FormComponent/SwapForm";

export default function Home1() {
  const [show, setShow] = useState(false);
  const target = useRef(null);
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
      <div className="homePageWrapper position-relative">
        <div className="bg-wrapper">
          <img
            className="homeBackground"
            src="https://shtheme.com/demosd/graphbitwp/wp-content/themes/graphbit/img/background/bg2.jpg"
          />
        </div>
        <HomeHeader />
      </div>
      <Features />
      <CompanyPromoBanner />
      {/* wallet component */}
      <div className="bg-darkBlue CoinSwapWrapper">
        <Container>
          <Row>
            <Col lg={6} md={6} sm={12}>
              <div>
                <div className="headingDiv mb-10">coin swap</div>
                <h2 className="fs-52 fw-700 font-josefin mb-15 coinSwapHeading">
                  You can swap
                  <br />
                  <span className="text-pink fw-800">Graphbit token</span>
                  <br />
                  anytime
                </h2>
                <p className="fs-18 lh-28 mb-15">
                  Blockchain opt in to the projects they genuinely want to work
                  on.maintains the amount of lines. When replacing a selection.
                  help agencies to define. define their new business objectives
                  and then Our consultants opt in to the projects they genuinely
                  want to work on.
                </p>
              </div>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <SwapForm />
            </Col>
          </Row>
        </Container>
      </div>
      {/*  */}
      <BlockchainComponent />
      <Detail />
      <InvestmentPlatform />
      <Wallet />
      <Faq />
    </>
  );
}
