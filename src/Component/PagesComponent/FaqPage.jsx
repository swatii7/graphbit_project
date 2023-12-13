import React from 'react'
import CommonHeader from '../CommonComponent/CommonHeaderSection/CommonHeader'
import Faq from '../CommonComponent/FaqComponent/Faq'
import Wallet from '../CommonComponent/WalletComponent/Wallet'
import ScrollToTop from 'react-scroll-to-top'

export default function FaqPage() {
  return (
   <section>
    <ScrollToTop smooth color="#fff" />
    <CommonHeader headerHeading='Coin FAQ' activePageName='Coin FAQ' />
    <Faq />
    <Wallet />
   </section>
  )
}
