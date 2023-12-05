import React, { useEffect, useState, useRef } from "react";
import { Form, Overlay } from "react-bootstrap";
import { ArrowDownShort, Clock } from "react-bootstrap-icons";
import CustomPinkButton from "../CustomButton/CustomPinkButton";

export default function SwapForm() {
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
    <div className="sendMoneyWrapper">
      <div className="bg-blue" style={{ padding: "30px", borderRadius: "3px" }}>
        {/* swap /icon div */}
        <div className="mb-30 justify-content-between align-middle d-flex flex-wrap">
          <div>
            <p className="bg-pink swapSpan">Swap</p>
          </div>
          <div>
            <Clock
              style={{ width: "28px", height: "28px" }}
              ref={target}
              onClick={() => setShow(!show)}
            />
            <Overlay target={target.current} show={show} placement="left">
              {({
                placement: _placement,
                arrowProps: _arrowProps,
                show: _show,
                popper: _popper,
                hasDoneInitialMeasure: _hasDoneInitialMeasure,
                ...props
              }) => (
                <div
                  {...props}
                  style={{
                    position: "absolute",
                    backgroundColor: "#050830",
                    width: "450px",
                    height: "200px",
                    boxShadow: "0px 4px 10px 0px rgb(112 120 146 / 10%)",
                    fontSize: "17px",
                    lineHeight: "22px",
                    padding: "40px",
                    color: "white",
                    textAlign: "center",
                    margin: "145px -43px 0px 0px",
                    borderRadius: 3,
                    ...props.style,
                  }}
                >
                  Aspernatur sit adipisci quaerat unde at neque Redug Lagre
                  dolorAspernatur sit adipisci quaerat unde at neque Redug Lagre
                  dolor.Aspernatur sit adipisci quaerat unde at neque Redug
                  Lagre dolor
                </div>
              )}
            </Overlay>
          </div>
        </div>

        <div className="form">
          <div>
            <label>From</label>
            <div className="d-flex flex-wrap">
              <input type="number" placeholder="0" className="forminput" />
              <Form.Select
                aria-label="Default select example"
                className="bg-darkBlue text-white"
              >
                <option className="fw-700">BNB</option>
                <option value="1">USDT</option>
                <option value="2">ETH</option>
                <option value="3">BTC</option>
                <option value="3">BUSD</option>
              </Form.Select>
            </div>
            {/* icon */}
          </div>

          <div className="text-center">
            <ArrowDownShort className="iconArrowDown" />
          </div>

          <div>
            <label>To</label>
            <div className="d-flex flex-wrap">
              <input type="number" placeholder="0" className="forminput" />
              <Form.Select
                aria-label="Default select example"
                className="bg-darkBlue text-white"
              >
                <option className="fw-700">CST</option>
                <option value="1">BNB</option>
                <option value="1">USDT</option>
                <option value="2">ETH</option>
                <option value="3">BTC</option>
              </Form.Select>
            </div>
          </div>

          <div className="d-flex justify-content-between">
            <span className="fs-14 my-0 mx-6">Slippage Tolerance</span>
            <br />
            <span className="fs-14 my-0 mx-6">Auto</span>
          </div>
          <div>
            <CustomPinkButton
              type="submit"
              title="Unlock Wallet"
              className="customPinkButton"
              onClick={handleClick}
            />
          </div>

          <div>
            {loading ? <img src="/src/assets/Header/ajax-loader.gif" /> : ""}
            {contentVisible && (
              <div className="mt-25 hiddenDiv">
                <p>
                  One or more fields have an error. Please check and try again.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
