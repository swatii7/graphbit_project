import React, {useState} from 'react'
import "../../../Stylesheet/CommonComponentStyle/InvestmentComponent/Investment.css"
import { Col, Container, Row } from 'react-bootstrap'
import CustomButton from '../CustomButton/CustomButton'
import Plan from './Plan'

export default function InvestmentPlatform() {

  const [silverIsActive, setSilverIsActive] = useState("15");
  const [goldIsActive, setGoldIsActive] = useState("30");
  const [diamondIsActive, setIsDiamondActive] = useState("50")

  const handleSilverCardBtn=(item)=>{
    setSilverIsActive(item)
   
  }

  const handleGoldCardBtn=(item)=>{
    setGoldIsActive(item)
  }
  const handleDiamondCardBtn=(item)=>{
    setIsDiamondActive(item)
  }



const allBtns = ['15','30','60']; 
const goldCardBtn= ['30', '45', '60']
const diamondCardBtn= ['50', '75', '90']



// pass array of object for silver card plan

const contentDataFor15Days = [
  {
key:'Diposite- 100 USD',
value:'Payment- 1000 CNS'
  },
  {
    key:'Diposite- 200 USD',
    value:'Payment- 2000 CNS'
      },
      {
        key:'Diposite- 300 USD',
        value:'Payment- 3000 CNS'
          },
]

const contentDataFor30Days= [
  {
    key:'Diposite- 200 USD',
    value:'Payment- 2000 CNS'
      },
      {
        key:'Diposite- 400 USD',
        value:'Payment- 4000 CNS'
          },
          {
            key:'Diposite- 600 USD',
            value:'Payment- 6000 CNS'
              },
]

const contentDataFor60Days= [
  {
    key:'Diposite- 300 USD',
    value:'Payment- 3000 CNS'
      },
      {
        key:'Diposite- 500 USD',
        value:'Payment- 5000 CNS'
          },
          {
            key:'Diposite- 700 USD',
            value:'Payment- 7000 CNS'
              },
]


const getContentByDaysChangeinSilverPlan =(days)=> {
  let content
    switch (days) {
      case "15":
        content = contentDataFor15Days
        break;

        case "30":
          content = contentDataFor30Days
        break;
        case "60":
          content = contentDataFor60Days
        break;

      default:
        break;
     
    }
    return content;
}

const contentfordaysinSilverCard = getContentByDaysChangeinSilverPlan(silverIsActive)

// pass array of object and conditions for gold card plan

const contentDataForG30Days= [
  {
    key:'Diposite- 1000 USD',
    value:'Payment- 10K CNS'
      },
      {
        key:'Diposite- 2000 USD',
        value:'Payment- 20K CNS'
          },
          {
            key:'Diposite- 3000 USD',
            value:'Payment- 30K CNS'
              },
]

const contentDataForG45Days= [
  {
    key:'Diposite- 1500 USD',
    value:'Payment- 15K CNS'
      },
      {
        key:'Diposite- 2500 USD',
        value:'Payment- 25K CNS'
          },
          {
            key:'Diposite- 3500 USD',
            value:'Payment- 35K CNS'
              },
]

const contentDataForG60Days= [
  {
    key:'Diposite- 2000 USD',
    value:'Payment- 20K CNS'
      },
      {
        key:'Diposite- 4000 USD',
        value:'Payment- 40K CNS'
          },
          {
            key:'Diposite- 6000 USD',
            value:'Payment- 60K CNS'
              },
]



const getContentByDaysChangeinGoldPlan =(days)=> {
  let content
    switch (days) {
        case "30":
          content = contentDataForG30Days
        break;
        case "45":
          content = contentDataForG45Days
        break;
        case "60":
          content = contentDataForG60Days
        break;
    
      default:
        break;
     
    }
    return content;
}

const contentfordaysInGoldCard = getContentByDaysChangeinGoldPlan(goldIsActive)


// pass array of object and condition for diamond card plan

const contentDataForD50Days= [
  {
    key:'Diposite- 10K USD',
    value:'Payment- 100K CNS'
      },
      {
        key:'Diposite- 20K USD',
        value:'Payment- 200K CNS'
          },
          {
            key:'Diposite- 30K USD',
            value:'Payment- 300K CNS'
              },
]

const contentDataForD75Days= [
  {
    key:'Diposite- 15K USD',
    value:'Payment- 150K CNS'
      },
      {
        key:'Diposite- 25K USD',
        value:'Payment- 250K CNS'
          },
          {
            key:'Diposite- 35K USD',
            value:'Payment- 350K CNS'
              },
]

const contentDataForD90Days= [
  {
    key:'Diposite- 20K USD',
    value:'Payment- 200K CNS'
      },
      {
        key:'Diposite- 40K USD',
        value:'Payment- 400K CNS'
          },
          {
            key:'Diposite- 60K USD',
            value:'Payment- 600K CNS'
              },
]



const getContentByDaysChangeinDiamondPlan =(days)=> {
  let content
    switch (days) {
        case "50":
          content = contentDataForD50Days
        break;
        case "75":
          content = contentDataForD75Days
        break;
        case "90":
          content = contentDataForD90Days
        break;
    
      default:
        break;
     
    }
    return content;
}

const contentfordaysInDiamondCard = getContentByDaysChangeinDiamondPlan(diamondIsActive)

// const contentForDays=contentfordaysinSilverCard

  return (
    <div className='investmentWrapper'>
     <Container className='px-15'>
      {/* heading div */}
      <div>
      <Row className='align-items-center'>
        <Col lg={8} md={8} sm={12} >
          <div className='mb-40'>
            <p className='text-uppercase fw-700 fs-17 mb-10 px-15' style={{letterSpacing:'1px'}}>
            STACKING INVESTMENT PLATFORM
            </p>
            <h2 className='fs-54 fw-700 font-josefin mb-15 investmentHeading px-15'>
            Staking
            <span className='text-pink ml-10 mr-10'>
            Graphbit token
            </span>
            <br className='d-lg-block d-none' />
            secure own wallet
            </h2>
          </div>
        </Col>
        <Col lg={4} md={4} sm={12} className='text-lg-end text-start'>
        <CustomButton buttonTitle='Explore More'
         className="pink-btn navButton transition-btn py-12 px-20 mt-15 exploreBtn" />
        </Col>
      </Row>
      </div>
      <Plan cardHeading='Silver staking plan'
      cardFooter='Participet investor'
      cardBadge='2130'
      allBtns={allBtns}
      isActive={silverIsActive}
      handleClick={handleSilverCardBtn}
      contentfordays={contentfordaysinSilverCard} />

<Plan cardHeading='Gold staking plan'
      cardFooter='Participet investor'
      cardBadge='3130'
      allBtns={goldCardBtn}
      isActive={goldIsActive}
      handleClick={handleGoldCardBtn}
      contentfordays={contentfordaysInGoldCard}
       />

<Plan cardHeading='Diamond staking plan'
      cardFooter='Participet investor'
      cardBadge='2130'
      allBtns={diamondCardBtn}
      isActive={diamondIsActive}
      handleClick={handleDiamondCardBtn}
      contentfordays={contentfordaysInDiamondCard}
       />
      
     </Container>
    </div>
  )
}
