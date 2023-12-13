import React from 'react'
import CommonHeader from '../CommonComponent/CommonHeaderSection/CommonHeader'
import InvestmentPlatform from '../CommonComponent/InvestmentPlatformComponent/InvestmentPlatform'
import Wallet from '../CommonComponent/WalletComponent/Wallet'
import ScrollToTop from 'react-scroll-to-top'

export default function CoinStacking() {
  return (
   <section>
    <ScrollToTop smooth color="#fff" />
    <CommonHeader headerHeading='Token Stacking' activePageName='Token Stacking' />
    <InvestmentPlatform isVisible={true} />
    <Wallet />
   </section>
  )
}
