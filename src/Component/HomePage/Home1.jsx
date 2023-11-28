import React, {useRef, useState, useEffect} from 'react'
import HomeHeader from './HomeHeader.jsx/HomeHeader';
import Features from '../CommonComponent/FeatureComponent/Features';
import CompanyPromoBanner from '../CommonComponent/CompanyPromoBanner/CompanyPromoBanner';
import { Container, Row, Col, Overlay, Dropdown, Form } from 'react-bootstrap';
import { Clock, ArrowDownCircleFill, ArrowDownShort } from 'react-bootstrap-icons';
import CustomPinkButton from '../CommonComponent/CustomButton/CustomPinkButton';
import BlockchainComponent from '../CommonComponent/CustomBlockchainComponent/BlockchainComponent';
import Detail from '../CommonComponent/DetailComponent/Detail';


export default function Home1() {
  

  const [show, setShow] = useState(false);
  const target = useRef(null);
  const [loading, setLoading] = useState(false)
  const [contentVisible, setContentVisible] = useState(false)

  const handleClick= ()=>{
    setLoading(true);

    setTimeout(()=>{
      setLoading(false)
      setContentVisible(true)
    },2000)
  }


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
     <div className='homePageWrapper position-relative'>
    <div className='bg-wrapper'>
      <img className='homeBackground' src='https://shtheme.com/demosd/graphbitwp/wp-content/themes/graphbit/img/background/bg2.jpg' />
    </div>
    <HomeHeader />
   </div>
   <Features />
   <CompanyPromoBanner />
   {/* wallet component */}
   <div className='bg-darkBlue walletWrapper'>
    <Container>
      <Row>
        <Col lg={6} md={6} sm={12}>
          <div>
            <div className='headingDiv mb-10'>coin swap</div>
            <h2 className='fs-52 fw-700 font-josefin mb-15'>
            You can swap
            <br />
            <span className='text-pink fw-800'>
            Graphbit token
            </span>
            <br />
            anytime
            </h2>
            <p className='fs-18 lh-28 mb-15'>
            Blockchain opt in to the projects they genuinely want to work on.maintains the amount of lines. When replacing a selection. help agencies to define. define their new business objectives and then Our consultants opt in to the projects they genuinely want to work on. 
            </p>
          </div>
        </Col>
        <Col lg={6} md={6} sm={12}>
          <div className='sendMoneyWrapper'>
            <div className='bg-blue' style={{padding:'30px', borderRadius:'3px'}}>
              {/* swap /icon div */}
              <div className='mb-30 justify-content-between align-middle d-flex flex-wrap'>
                <div>
                  <p className='bg-pink swapSpan'>Swap</p>
                  </div>
                  <div>
                  <Clock style={{width:'28px', height:'28px'}} ref={target} onClick={() => setShow(!show)} />
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
              position: 'absolute',
              backgroundColor: '#050830',
              width:'450px',
              height:'200px',
              boxShadow:'0px 4px 10px 0px rgb(112 120 146 / 10%)',
              fontSize:'17px',
              lineHeight:'22px',
              padding: '40px',
              color: 'white',
              textAlign:'center',
              margin:'145px -43px 0px 0px',
              borderRadius: 3,
              ...props.style,
            }}
          >
           Aspernatur sit adipisci quaerat unde at neque Redug Lagre dolorAspernatur sit adipisci quaerat unde at neque Redug Lagre dolor.Aspernatur sit adipisci quaerat unde at neque Redug Lagre dolor
          </div>
        )}
      </Overlay>
                  </div>


              </div>
            
              
              <div className='form'>
            
                <div>
                <label>From</label>
                <div className='d-flex flex-wrap'> 
                  <input type='number' placeholder='0' className='forminput' />
                  <Form.Select aria-label="Default select example" className='bg-darkBlue text-white'>
      <option className='fw-700'>BNB</option>
      <option value="1">USDT</option>
      <option value="2">ETH</option>
      <option value="3">BTC</option>
      <option value="3">BUSD</option>
    </Form.Select>
                </div>
                {/* icon */}
                
                </div>
             
                <div className='text-center'>
                  <ArrowDownShort className='iconArrowDown' />
                </div>

              
                <div>
                <label>To</label>
                <div className='d-flex flex-wrap'> 
                  <input type='number' placeholder='0' className='forminput' />
                  <Form.Select aria-label="Default select example" className='bg-darkBlue text-white'>
      <option className='fw-700'>CST</option>
      <option value="1">BNB</option>
      <option value="1">USDT</option>
      <option value="2">ETH</option>
      <option value="3">BTC</option>
    </Form.Select>
                </div>
                
                </div>

                <div className='d-flex justify-content-between'>
                  <span className='fs-14 my-0 mx-6'>Slippage Tolerance</span>
                  <br />
                  <span className='fs-14 my-0 mx-6'>Auto</span>
                </div>
                <div>
                  <CustomPinkButton type='submit' title='Unlock Wallet' className='customPinkButton' onClick={handleClick} />
                </div>
               
                <div>
                {loading ?
                <img src='/src/assets/Header/ajax-loader.gif' />
              : ''}
              {contentVisible && (
                <div className='mt-25 hiddenDiv'>
                <p>One or more fields have an error. Please check and try again.</p>
              </div>
              )}
              
                  
                </div>
               
              </div>

            </div>
          </div>
        </Col>
      </Row>
    </Container>

   </div>
   {/*  */}
   <BlockchainComponent />
   <Detail />
  
    </>
  
  )
}
