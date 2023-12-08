import React from "react";
import "../../../Stylesheet/Home/CommonHeader/CommonHeader.css";
import { Container, Breadcrumb } from "react-bootstrap";
import { ChevronRight } from "react-bootstrap-icons";

export default function CommonHeader({ headerHeading, activePageName }) {
  return (
    <div className="commonHeaderWrapper">
      <Container>
        <div className="containerWrapper">
          <h2
            className="fs-42 fw-700 font-josefin"
            style={{ lineHeight: "50px" }}
          >
            {headerHeading}
          </h2>
          <Breadcrumb className="align-items-center">
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>
              <ChevronRight className="chevronIcon" />{activePageName}</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </Container>
    </div>
  );
}
