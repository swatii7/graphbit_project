import React from 'react'
import CommonHeader from '../CommonComponent/CommonHeaderSection/CommonHeader'
import Faq from '../CommonComponent/FaqComponent/Faq'
import Wallet from '../CommonComponent/WalletComponent/Wallet'

export default function FaqPage() {
  return (
   <section>
    <CommonHeader headerHeading='Coin FAQ' activePageName='Coin FAQ' />
    <Faq />
    <Wallet />
   </section>
  )
}
