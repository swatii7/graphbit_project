import React from "react";
import { Container, Row, Col, Table} from "react-bootstrap";
import headerImg from "../../../assets/Header/headerImg.webp";
import TokenImg from "../../../assets/Detail/table-2.webp"
import blockchainImg from "../../../assets/Detail/table-3.webp"
import CustomTable from '../TableComponent/CustomTable'

export default function Detail() {

  const tableOne= [
    {
      key:'Initial Supply',
      value:'1000,000,000 $CNS'
  },
  {
      key:'Liquidity',
      value:'450 BNB'  
  },
  {
      key:'Initial Price in BNB',
      value:'0.0000005 BNB ,estimate ( $0.0019 / $CNS )'  
  },
  {
      key:'Max Lock',
      value:'6 Months'  
  },
  ]

  const tableTwo= [
        {
            key:'Token Name',
            value:'Graphbit'
        },
        {
            key:'Network',
            value:'Binance Smart Chain ( BSC )'  
        },
        {
            key:'Token Ticker',
            value:'$CNS'  
        },
        {
            key:'Max Supply',
            value:'100,000,000 $CNS'  
        },
        {
            key:'Decimals',
            value:'9'  
        },
        {
            key:'Tax Reflection',
            value:'6% | 3% Development | 3% Marketing'  
        }
      ]

        const tableThree=[
          {
            key:'Consensus',
            value:'HPOS'
        },
        {
            key:'Performance',
            value:`TPS +7000 “ Average Block Interval 3s` 
        },
        {
            key:'Compatible',
            value:`EVM “Ethereum Virtual Machine”`  
        },
        {
            key:'Crosschain',
            value:'Supported'  
        },
        {
            key:'Token Contract',
            value:`Supported` 
        },
        {
            key:'Smart Contract',
            value:`Supported`  
        },
        {
            key:'Smart Contract Type',
            value:'ERC20 & BSC20'  
        }
        ]
       
      


  return (
    <div className="detailWrapper text-center">
      <Container>
        <div className="pb-40">
          <p
            className="text-uppercase fw-700 fs-17 mb-10"
            style={{ letterSpacing: "1px" }}
          >
            graphbit information
          </p>
          <h2 className="fw-700 fs-56 graphbitHeading font-josefin">
            Graphbit token supply and
            <br className="d-lg-block d-none" />
            <span className="text-pink mr-20">blockchain</span>
            <br className="d-lg-none" />
            information
          </h2>
        </div>
       <CustomTable
        keyDescription={tableOne}
         heading='Supply & Price Information'
          image={headerImg} 
          showHorizontalLine={true}
          />

          <CustomTable
          keyDescription={tableTwo}
          heading='Token Information'
          image={TokenImg}
          showHorizontalLine={true}
          orderClass='order-2'
          className='order-1'
           />

<CustomTable
        keyDescription={tableThree}
         heading='Blockchain Information'
          image={blockchainImg} 
          showHorizontalLine= {true}
          />

      </Container>
    </div>
  );
}
