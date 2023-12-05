import React, { useState } from "react";
import { Col, Container, Row, ListGroup, Accordion } from "react-bootstrap";

export default function Faq() {
  const [isTabActive, setIsTabActive] = useState('0');

  const handleClick=(index)=>{
    setIsTabActive(index)
  }

  const accordinArr = [
    {
      eventKey: '0',
      heading: "1. How can purchase presale token from ICO?",
      para: "When replacing a multi-lined selection of text, the generated dummy text maintains the amount of lines. When replacing a selection of text within a single line, the amount of words is roughly being .",
    },
    {
      eventKey: '1',
      heading: "2. Which platform this crypto token?",
      para: " When replacing a multi-lined selection of text, the generated dummy text maintains the amount of lines. When replacing",
    },
    {
      eventKey: '2',
      heading: "3. How much time release ending ico?",
      para: "When replacing a multi-lined selection of text, the generated dummy text maintains the amount of lines.",
    },
    {
      eventKey: '3',
      heading: "4. Is this token certik certified?",
      para: "When replacing a multi-lined selection of text, the generated dummy text maintains the amount of lines. When replacing a selection of text within a single line, the amount of words is roughly being .selection of text within a single line, the amount of words is roughly being .",
    },
    {
      eventKey: '4',
      heading: "5. what is crypto currency?",
      para: "When replacing a multi-lined selection of text, the generated dummy text maintains the amount of lines. When replacing.",
    },
  ];

  return (
    <div className="faqWrapper">
      <Container>
        <div
          className="text-center fs-17 fw-700 mb-10 pb-30"
          style={{ letterSpacing: "1px" }}
        >
          <p>IMPORTANT FAQ</p>
          <h2 className="fs-56 fw-700 font-josefin lh-64 mb-15 faqHeading">
            Graphbit token fundamental
            <br />
            <span className="text-pink">Important</span>
            <br />
            question
          </h2>
        </div>
        <Row>
          <Col sm={12} md={4} lg={4}>
            <div className="mb-40 text-center">
              <ListGroup as="ul" className="mb-40">
                <ListGroup.Item as="li"
                 className={isTabActive==='0' ? 'list-group-item bg-pink': 'list-group-item'}
                onClick={()=>handleClick('0')}>
                  General Questions
                </ListGroup.Item>
                <ListGroup.Item as="li" className={isTabActive ==='1'? 'bg-pink': 'bg-tranparent'} onClick={()=>handleClick('1')}>
                  Token Sale
                </ListGroup.Item>
                <ListGroup.Item as="li"  className={isTabActive ==='2' ? 'bg-pink': 'bg-tranparent'} onClick={()=>handleClick('2')}>
                  Campaigns & Rewards
                </ListGroup.Item>
              </ListGroup>
            </div>
          </Col>
          <Col sm={12} md={8} lg={8}>
            <Accordion defaultActiveKey="0" >
              {accordinArr.map((item, index)=>
              <Accordion.Item key={index} eventKey={item.eventKey} className="mb-30">
              <Accordion.Header>
                {" "}
                {item.heading}
              </Accordion.Header>
              <Accordion.Body>
                {item.para}
              </Accordion.Body>
            </Accordion.Item>
              )}
              
            </Accordion>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
